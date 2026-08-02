const modUser=require("../models/modUser");


async function afficherUser(req,res){
    try {
        const user=await modUser.getUser();
        res.json(user);
    } catch (error) {
        res.status(500).json({
            message:"Erreur serveur"
        });
    }
}


async function ajouterUser(req,res){
    try {
        const { id,nom, email, mot_de_passe } = req.body;
        const user=await modUser.createUser(id,nom,email,mot_de_passe);
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "erreur de création d'utilisateur"
        });
        
    }
}

module.exports={
    afficherUser,
    ajouterUser
};