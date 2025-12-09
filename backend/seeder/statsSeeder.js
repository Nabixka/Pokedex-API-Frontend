const pool = require("../db")

async function statsSeeder() {
    try {
        const stats = [
            {
                pokemon_id: 1,
                HP: 45,
                Attack: 49,
                Sp_Attack: 65,
                Deff: 49,
                Sp_Deff: 65,
                Speed: 45
            }
        ]

        for (let stat of stats) {
            await pool.query(`
                INSERT INTO stats (pokemon_id, HP, Attack, Sp_Attack, Deff, Sp_Deff, Speed) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
                [stat.pokemon_id, stat.HP, stat.Attack, stat.Sp_Attack, stat.Deff, stat.Sp_Deff, stat.Speed])
        }

        console.log("Berhasil Membuat Stats Pokemon")
    }
    catch (err) {
        console.log("Gagal Membuat Stats Pokmon, Error: ", err.message)
    }
}

module.exports = statsSeeder