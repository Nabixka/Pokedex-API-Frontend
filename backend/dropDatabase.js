const pool = require("./createDatabase")

async function drop(){
    try{
        await pool.query(`
            DROP DATABASE pokedex
        `)
        console.log("Berhasil Menghapus Database")
    }
    catch(err){
        console.log(err.message)
    }
    finally{
        process.exit(0)
    }
}

drop()