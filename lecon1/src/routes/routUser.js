const express = require("express");
const router = express.Router();

const controller=require("../controllers/userControllers");

router.get("/utilisateurs", controller.afficherUsers);
router.post("/utilisateurs", controller.ajouterUsers);
router.get("/utilisateurs/:id",controller.afficherUser);
router.delete("/utilisateurs/:id", controller.supprimerUser);
module.exports=router;

