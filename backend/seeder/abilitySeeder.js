const pool = require("../db")

async function abilitySeeder(){
    const ability = [
        {name: "Overgrow", description: "Powers up Grass-type moves in a pinch"},
        {name: "Torrent", description: "Powers up Water-type moves in a pinch"},
        {name: "Blaze", description: "Powers up Fire-type moves in a pinch"}
    ]

    for(let bility of ability){
        await pool.query(`
            INSERT INTO ability (name, description) VALUES ($1, $2) ON CONFLICT (name) DO NOTHING`,
        [bility.name, bility.description])
    }

    console.log("Berhasil Menambahkan Ability")
}

module.exports = abilitySeeder