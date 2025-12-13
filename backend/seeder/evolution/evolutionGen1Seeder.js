const pool = require("../../db")

async function evolutionGen1Seeder() {
    try {
        const evol = [

            { stage1: 1, stage2: 2, how2: "Level 16", stage3: 3, how3: "Level 32" },
            { stage1: 4, stage2: 5, how2: "Level 16", stage3: 6, how3: "Level 36" },
            { stage1: 7, stage2: 8, how2: "Level 16", stage3: 9, how3: "Level 36" },

            { stage1: 10, stage2: 11, how2: "Level 7", stage3: 12, how3: "Level 10" },
            { stage1: 13, stage2: 14, how2: "Level 7", stage3: 15, how3: "Level 10" },

            { stage1: 16, stage2: 17, how2: "Level 18", stage3: 18, how3: "Level 36" },
            { stage1: 19, stage2: 20, how2: "Level 20", stage3: null, how3: null },
            { stage1: 21, stage2: 22, how2: "Level 20", stage3: null, how3: null },
            { stage1: 23, stage2: 24, how2: "Level 22", stage3: null, how3: null },

            { stage1: 25, stage2: 26, how2: "Use Thunder Stone", stage3: null, how3: null },
            { stage1: 27, stage2: 28, how2: "Level 22", stage3: null, how3: null },

            { stage1: 29, stage2: 30, how2: "Level 16", stage3: 31, how3: "Use Moon Stone" },
            { stage1: 32, stage2: 33, how2: "Level 16", stage3: 34, how3: "Use Moon Stone" },

            { stage1: 35, stage2: 36, how2: "Use Moon Stone", stage3: null, how3: null },
            { stage1: 37, stage2: 38, how2: "Use Fire Stone", stage3: null, how3: null },

            { stage1: 39, stage2: 40, how2: "Use Moon Stone", stage3: null, how3: null },

            { stage1: 41, stage2: 42, how2: "Level 22", stage3: null, how3: null },
            { stage1: 43, stage2: 44, how2: "Level 21", stage3: 45, how3: "Level 30" },

            { stage1: 46, stage2: 47, how2: "Level 24", stage3: null, how3: null },
            { stage1: 48, stage2: 49, how2: "Level 31", stage3: null, how3: null },

            { stage1: 50, stage2: 51, how2: "Level 26", stage3: null, how3: null },

            { stage1: 52, stage2: 53, how2: "Level 28", stage3: null, how3: null },

            { stage1: 54, stage2: 55, how2: "Level 33", stage3: null, how3: null },

            { stage1: 56, stage2: 57, how2: "Level 28", stage3: null, how3: null },

            { stage1: 58, stage2: 59, how2: "Use Fire Stone", stage3: null, how3: null },

            { stage1: 60, stage2: 61, how2: "Level 25", stage3: 62, how3: "Use Water Stone" },

            { stage1: 63, stage2: 64, how2: "Level 16", stage3: 65, how3: "Trade" },

            { stage1: 66, stage2: 67, how2: "Level 28", stage3: 68, how3: "Trade" },

            { stage1: 69, stage2: 70, how2: "Level 21", stage3: 71, how3: "Use Leaf Stone" },

            { stage1: 72, stage2: 73, how2: "Level 30", stage3: null, how3: null },

            { stage1: 74, stage2: 75, how2: "Level 25", stage3: 76, how3: "Trade" },

            { stage1: 77, stage2: 78, how2: "Level 40", stage3: null, how3: null },

            { stage1: 79, stage2: 80, how2: "Level 37", stage3: null, how3: null },

            { stage1: 81, stage2: 82, how2: "Level 30", stage3: null, how3: null },

            { stage1: 84, stage2: 85, how2: "Level 31", stage3: null, how3: null },

            { stage1: 86, stage2: 87, how2: "Level 34", stage3: null, how3: null },

            { stage1: 88, stage2: 89, how2: "Level 38", stage3: null, how3: null },

            { stage1: 90, stage2: 91, how2: "Use Water Stone", stage3: null, how3: null },

            { stage1: 92, stage2: 93, how2: "Level 25", stage3: 94, how3: "Trade" },

            { stage1: 95, stage2: null, how2: null, stage3: null, how3: null },

            { stage1: 96, stage2: 97, how2: "Level 26", stage3: null, how3: null },

            { stage1: 98, stage2: 99, how2: "Level 28", stage3: null, how3: null },

            { stage1: 100, stage2: 101, how2: "Level 30", stage3: null, how3: null },

            { stage1: 102, stage2: 103, how2: "Use Leaf Stone", stage3: null, how3: null },

            { stage1: 104, stage2: 105, how2: "Level 28", stage3: null, how3: null },

            { stage1: 106, stage2: null, how2: null, stage3: null, how3: null },
            { stage1: 107, stage2: null, how2: null, stage3: null, how3: null },

            { stage1: 108, stage2: null, how2: null, stage3: null, how3: null },

            { stage1: 109, stage2: 110, how2: "Level 35", stage3: null, how3: null },

            { stage1: 111, stage2: 112, how2: "Level 42", stage3: null, how3: null },

            { stage1: 113, stage2: null, how2: null, stage3: null, how3: null },

            { stage1: 114, stage2: null, how2: null, stage3: null, how3: null },

            { stage1: 115, stage2: null, how2: null, stage3: null, how3: null },

            { stage1: 116, stage2: 117, how2: "Level 32", stage3: null, how3: null },

            { stage1: 118, stage2: 119, how2: "Level 33", stage3: null, how3: null },

            { stage1: 120, stage2: 121, how2: "Use Water Stone", stage3: null, how3: null },

            { stage1: 122, stage2: null, how2: null, stage3: null, how3: null },

            { stage1: 123, stage2: null, how2: null, stage3: null, how3: null },

            { stage1: 124, stage2: null, how2: null, stage3: null, how3: null },

            { stage1: 125, stage2: null, how2: null, stage3: null, how3: null },

            { stage1: 126, stage2: null, how2: null, stage3: null, how3: null },

            { stage1: 127, stage2: null, how2: null, stage3: null, how3: null },

            { stage1: 128, stage2: null, how2: null, stage3: null, how3: null },

            { stage1: 129, stage2: 130, how2: "Level 20", stage3: null, how3: null },

            { stage1: 131, stage2: null, how2: null, stage3: null, how3: null },

            { stage1: 132, stage2: null, how2: null, stage3: null, how3: null },

            { stage1: 133, stage2: 134, how2: "Use Water Stone", stage3: null, how3: null },

            { stage1: 133, stage2: 135, how2: "Use Thunder Stone", stage3: null, how3: null },
            { stage1: 133, stage2: 136, how2: "Use Fire Stone", stage3: null, how3: null },

            { stage1: 137, stage2: null, how2: null, stage3: null, how3: null },

            { stage1: 138, stage2: 139, how2: "Level 40", stage3: null, how3: null },

            { stage1: 140, stage2: 141, how2: "Level 40", stage3: null, how3: null },

            { stage1: 142, stage2: null, how2: null, stage3: null, how3: null },

            { stage1: 143, stage2: null, how2: null, stage3: null, how3: null },

            { stage1: 144, stage2: null, how2: null, stage3: null, how3: null },
            { stage1: 145, stage2: null, how2: null, stage3: null, how3: null },
            { stage1: 146, stage2: null, how2: null, stage3: null, how3: null },

            { stage1: 147, stage2: 148, how2: "Level 30", stage3: 149, how3: "Level 55" },

            { stage1: 150, stage2: null, how2: null, stage3: null, how3: null },
            { stage1: 151, stage2: null, how2: null, stage3: null, how3: null }


        ]

        for (let evolution of evol) {
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