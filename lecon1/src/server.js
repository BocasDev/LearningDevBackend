const express=require("express");
const app= express();
const PORT=3000;
app.use(express.json());
app.get("/", (req,res) => {
    res.json({
        message:"Backend API opérationnel"
    });
});
app.listen(PORT, ()=>{
    console.log(`Serveur lancé sur le port ${PORT}`);
    
});