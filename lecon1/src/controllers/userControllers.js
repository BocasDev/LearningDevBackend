const modUser=require("../models/modUser");


async function afficherUsers(req,res){
    try {
        const user=await modUser.getUser();
        res.json(user);
    } catch (error) {
        res.status(500).json({
            message:"Erreur serveur"
        });
    }
}
async function afficherUser(req,res){
    const {id}=req.params;
    const user=await modUser.getUserById(id);
    if(!user){
       return res.status(404).json({
            message:"utilisateur introuvable"
        });
       
    }
     return res.json(user);
}


async function ajouterUsers(req,res){
     const { id,nom, email, mot_de_passe } = req.body;
     if(!nom || !email){
        return res.status(400).json({
            message:"Les champs nom et email sont obligatoires"
        });
     }
     if(!email.includes("@")){
        return res.status(400).json({
            message: "L'émail est invalide"
        });
     }
    try {
       
        const user=await modUser.createUser(id,nom,email,mot_de_passe);
        return res.status(201).json(user);
    } catch (error) {
        if(error.code==="23505"){
            return res.status(400).json({
                message:"Cet email existe déja"
            })
        }
        console.log(error);
        return res.status(500).json({
            message: "erreur de création d'utilisateur"
        });
        
    }
}

async function supprimerUser(req,res) {
    try {
        const {id}=req.params;
    const user=await modUser.deleteUserById(id);
    if(!user){
        return res.status(404).json({
            message:"utilisateur introuvable"
        });

    }
    res.status(200).json({
        message:"Utilisateur supprimé",
        utilisateur:user
    });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Erreur de connexion au serveur"
        });
    }
}

module.exports={
    afficherUsers,
    ajouterUsers,
    afficherUser,
    supprimerUser
};