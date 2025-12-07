const pool = require("../db")

async function regionSeeder(){
    const region = [
        {name: "Kanto", gen: 1}, 
        {name: "Johto", gen: 2}, 
        {name: "Hoen", gen: 3}, 
        {name: "Sinnoh", gen: 4}, 
        {name: "Unova", gen: 5},
        {name: "Kalos", gen: 6}, 
        {name: "Alola", gen: 7}, 
        {name: "Galar", gen: 8}, 
        {name: "Paldea", gen: 9}]

    for(let reg of region){
        await pool.query(`
            INSERT INTO region (name, gen_id) VALUES ($1, $2) ON CONFLICT (name) DO NOTHING`, 
        [reg.name, reg.gen])
    }
    console.log("Berhasil Menambahkan Region")
}

module.exports = regionSeeder