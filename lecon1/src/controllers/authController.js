const bcrypt= require("bcrypt");

const modUser=require("../models/modUser");
const jwt=require("jsonwebtoken");

async function inscription(req,res) {
    try {
        const {id,nom,email,mot_de_passe,role}=req.body;
        if(!nom || !email || !mot_de_passe){
            return res.status(400).json({
                message:"Les champs nom email et mot de passe sont obligatoires"
            });
        }
        const hash=await bcrypt.hash(mot_de_passe,10);
        const user = await modUser.createUser(id,nom,email,hash,role);
        res.status(201).json({
            message:"compte créé", user
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Erreur serveur"
        });
        
    }
}
async function connexion(req,res) {
    try {

        const {email,mot_de_passe}=req.body; // récupération des données(email et mot de passe)

        const user= await modUser.getUserByEmail(email); // validtion de email
        console.log(user);
        
        if(!user){
            return res.status(404).json({
                message:"Utilisateur inconnu"
            })
        }
        const passwordCorrect=await bcrypt.compare(mot_de_passe,user.mot_de_passe); //comparaison et validation du mot de passe
        if(!passwordCorrect){
            return res.status(401).json({
                message:"mot de passe incorrect"
            });
        }
        // création du token
        const token=jwt.sign(
            {
                id:user.id,
                email:user.email,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "24h"
            }
        );
        console.log(token);
        res.json({
            message:"connexion réussie", token
        });
        
        

    } catch (error) {
        res.status(500).json({
            message:"Erreur serveur"
        });
    }
}
module.exports={inscription,connexion};