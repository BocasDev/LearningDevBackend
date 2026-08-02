const express = require("express");
const router = express.Router();

const controller=require("../controllers/userControllers");

router.get("/utilisateurs", controller.afficherUser);
router.post("/utilisateurs", controller.ajouterUser);

module.exports=router;

