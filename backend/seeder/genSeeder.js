const pool = require("../db")

async function genSeeder(){
    const generation = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    for(let gen of generation){
        await pool.query(`
            INSERT INTO gen (no) VALUES ($1) ON CONFLICT (no) DO NOTHING`,
        [gen])
    }

    console.log("Berhasil Menambahkan Generation")
}

module.exports = genSeeder