const express=require("express");
//const pool = require("./database/db");
const routUser=require("./routes/routUser");
const app= express();
const PORT=3000;
app.use(express.json());

app.use("/api", routUser);
/*
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
/*
app.post("/utilisateur", (req,res)=>{
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
app.get("/", async(req,res)=>{
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
});
app.post("/utilisateurs", async(req,res)=>{
    const {id,nom,email,mot_de_passe}=req.body;
    try {
        const result= await pool.query(
            `Insert into utilisateurs(id,nom,email,mot_de_passe) VALUES($1,$2,$3,$4) RETURNING *
            `, [id,nom,email,mot_de_passe]
        );
        res.json(result.rows[0]);
        console.log(result.rows[0]);
        
        
    }
    catch (error) {
        console.error("Erreur SQL :", error.message);
        res.status(500).json({
            message: "Erreur de connexion à la base"
        });
    }
});
*/
app.listen(PORT, ()=>{
    console.log(`Serveur lancé sur le port ${PORT}`);
});