const pool = require("./createDatabase")

async function database(){
    try{
        await pool.query(`CREATE DATABASE pokedex`)
        console.log("Berhasil Membuat Database Pokedex")
    }
    catch(err){
        console.log("Gagal Membuat Database, Error:", err.message)
    }
    finally{
        process.exit(0)
    }
}

database()