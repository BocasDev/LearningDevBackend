const express=require("express");
const pool = require("./database");
const app= express();
const PORT=3000;
app.use(express.json());
app.get("/api/info", (req,res) => {
    const resultat=`
    "nom":"Learning-node",
    "version":"1.0",
     "auteur":"Symphorien"`;
    res.json({
        message:"Backend API opérationnel"   
    });
    console.log(resultat);
});
app.get("/api/test", (req,res)=>{
    const op=`
    "status": "Ok",
    "database": "PostgreSQL bientot connecté"
    `;
    res.json({
        message:"test réussi"
    });
    console.log(op);
    
});
app.post("/utilisateurs", (req,res)=>{
    const utilisateurs=req.body;
    console.log(utilisateurs);
    res.json({
        message:"Utilisateur inscrit correctement"
    });

    
});
app.post("/filleul", (req,res)=>{
    const filleul = req.body;
    console.log(filleul);
    res.json({
        message: "Filleul enregistré avec succès",
        data: filleul
    });
});
app.get("/", (req,res)=>{
    try {
        const result= await pool.query("SELECT NOW()");
        res.json(result.rows);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Erreur de connexion à la base"
        });
    }
})
app.listen(PORT, ()=>{
    console.log(`Serveur lancé sur le port ${PORT}`);
});