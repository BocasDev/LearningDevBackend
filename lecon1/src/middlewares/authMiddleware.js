const jwt=require("jsonwebtoken");

function verifierToken(req,res,next){
    const authHeader=req.headers.authorization;
    console.log(authHeader);
    
    if(!authHeader){
       return res.status(401).json({
            message: "Token manquant"
        });
    }

    const token=authHeader.split(" ")[1];
    try {
        const user=jwt.verify(token, process.env.JWT_SECRET);
        req.user=user;
        next();
    } catch (error) {
       return res.status(401).json({
            message:"Token invalide"
        });
    }
    

}
module.exports = verifierToken;