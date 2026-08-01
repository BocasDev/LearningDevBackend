const express=require("express");
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
    
})
app.listen(PORT, ()=>{
    console.log(`Serveur lancé sur le port ${PORT}`);
    
});