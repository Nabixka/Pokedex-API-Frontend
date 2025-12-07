const pool = require("../db")

async function regionSeeder(){
    const region = ["Kanto", "Johto", "Hoen", "Sinnoh", "Unova", "Kalos", "Alola", "Galar", "Paldea"]

    for(let reg of region){
        await pool.query(`
            INSERT INTO region (name) VALUES ($1) ON CONFLICT (name) DO NOTHING`, 
        [reg])
    }
    console.log("Berhasil Menambahkan Region")
}

module.exports = regionSeeder