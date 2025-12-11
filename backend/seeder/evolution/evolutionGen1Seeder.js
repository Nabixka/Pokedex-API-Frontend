const pool = require("../../db")

async function evolutionGen1Seeder() {
    try {
        const evol = [
            { stage1: 1, stage2: 2, how2: "Level 16", stage3: 3, how3: "Level 36" },
            { stage1: 4, stage2: 5, how2: "Level 16", stage3: 6, how3: "Level 36" },
            { stage1: 7, stage2: 8, how2: "Level 16", stage3: 9, how3: "Level 36" }
        ]

        for(let evolution of evol){
            await pool.query(`
                INSERT INTO evolution (stage1, stage2, how2, stage3, how3) VALUES ($1, $2, $3, $4, $5)`,
            [evolution.stage1, evolution.stage2, evolution.how2, evolution.stage3, evolution.how3])
        }

        console.log("Berhasil Membuat Evolution Pokemon Gen 1")
    }
    catch (err) {
        console.log("Gagal Membuat Evolution Pokemon Gen 1, Error: ", err.message)
    }
}

module.exports = evolutionGen1Seeder