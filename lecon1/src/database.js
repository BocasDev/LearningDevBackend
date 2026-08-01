const {Pool}=require("pg");
const pool = new Pool({

    user: "postgres",
    host: "localhost",
    database: "plateforme_parrainage",
    password: "@dmin051290",
    port: 5432

});
module.exports=pool;