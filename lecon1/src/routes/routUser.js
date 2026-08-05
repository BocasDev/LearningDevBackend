const express = require("express");
const router = express.Router();
const verifierToken = require("../middlewares/authMiddleware");
const controller=require("../controllers/userControllers");
const verifierRole = require("../middlewares/roleMiddleware");
router.get("/utilisateurs", controller.afficherUsers);
router.post("/utilisateurs", controller.ajouterUsers);
router.get("/utilisateurs/:id",controller.afficherUser);
router.delete("/utilisateurs/:id", controller.supprimerUser);


router.get(
"/profil",
verifierToken,
(req,res)=>{

res.json({

message:"Bienvenue",

utilisateur:req.user

});

}
);


router.delete(
"/utilisateurs/:id",

verifierToken,

verifierRole("administrateur"),

controller.supprimerUser
);

module.exports=router;

