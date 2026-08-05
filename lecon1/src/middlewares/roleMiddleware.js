function verifierRole(...roles){
    return (req,res,next)=>{
        if (!roles.includes(req.user.roles)){
            return res.status(403).json({
                message:"Accès interdit"
            });
        }
        next();
    };
}
module.exports=verifierRole;