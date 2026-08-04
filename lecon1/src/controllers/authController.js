const bcrypt= require("bcrypt");

const modUser=require("../models/modUser");

async function inscription(req,res) {
    try {
        const {id,nom,email,mot_de_passe}=req.body;
        if(!nom || !email || !mot_de_passe){
            return res.status(400).json({
                message:"Les champs nom email et mot de passe sont obligatoires"
            });
        }
        const hash=await bcrypt.hash(mot_de_passe,10);
        const user = await modUser.createUser(id,nom,email,hash);
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
module.exports={inscription};