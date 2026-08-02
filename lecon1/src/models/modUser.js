const pool=require("../database/db");

async function getUser(){
    const result= await pool.query("SELECT * FROM utilisateurs");
    return(result.rows);
}

async function createUser(id,nom,email,mot_de_passe){
    const result = await pool.query(`
        Insert into utilisateurs(id,nom,email,mot_de_passe) VALUES($1,$2,$3,$4) RETURNING *
        `, [id,nom,email,mot_de_passe]
    );
    return result.rows[0];
}
module.exports={
    getUser,
    createUser
};
