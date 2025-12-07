const pool = require("../db")

async function typeSeeder(){
    const types = [
        "Fire",
        "Water",
        "Grass",
        "Electric",
        "Ice",
        "Fighting",
        "Poison",
        "Ground",
        "Flying",
        "Psychic",
        "Bug",
        "Rock",
        "Ghost",
        "Dragon",
        "Dark",
        "Steel",
        "Fairy",
        "Normal"
    ]

    for(let name of types){
        await pool.query(`
            INSERT INTO type (name) VALUES ($1) ON CONFLICT (name) DO NOTHING`, 
            [name])
    }

    console.log("Berhasil Menambahkan Type")
}

module.exports = typeSeeder