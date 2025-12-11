const pool = require("../../db")

async function statsGen2Seeder() {
    try {
        const stats = [
            {
                pokemon_id: 152,
                HP: 45,
                Attack: 49,
                Sp_Attack: 49,
                Deff: 65,
                Sp_Deff: 65,
                Speed: 45
            },
            {
                pokemon_id: 153,
                HP: 60,
                Attack: 62,
                Sp_Attack: 63,
                Deff: 80,
                Sp_Deff: 80,
                Speed: 60
            },
            {
                pokemon_id: 154,
                HP: 80,
                Attack: 82,
                Sp_Attack: 83,
                Deff: 100,
                Sp_Deff: 100,
                Speed: 80
            },
            {
                pokemon_id: 155,
                HP: 39,
                Attack: 52,
                Sp_Attack: 60,
                Deff: 43,
                Sp_Deff: 50,
                Speed: 65
            },
            {
                pokemon_id: 156,
                HP: 58,
                Attack: 64,
                Sp_Attack: 80,
                Deff: 58,
                Sp_Deff: 65,
                Speed: 80
            },
            {
                pokemon_id: 157,
                HP: 78,
                Attack: 84,
                Sp_Attack: 109,
                Deff: 78,
                Sp_Deff: 85,
                Speed: 100
            },
            {
                pokemon_id: 158,
                HP: 50,
                Attack: 65,
                Sp_Attack: 44,
                Deff: 64,
                Sp_Deff: 48,
                Speed: 43
            },
            {
                pokemon_id: 159,
                HP: 65,
                Attack: 80,
                Sp_Attack: 59,
                Deff: 80,
                Sp_Deff: 63,
                Speed: 58
            },
            {
                pokemon_id: 160,
                HP: 85,
                Attack: 105,
                Sp_Attack: 79,
                Deff: 100,
                Sp_Deff: 83,
                Speed: 78
            },
            {
                pokemon_id: 161,
                HP: 35,
                Attack: 46,
                Sp_Attack: 35,
                Deff: 34,
                Sp_Deff: 45,
                Speed: 20
            },
            {
                pokemon_id: 162,
                HP: 85,
                Attack: 76,
                Sp_Attack: 45,
                Deff: 64,
                Sp_Deff: 55,
                Speed: 90
            },
            {
                pokemon_id: 163,
                HP: 60,
                Attack: 30,
                Sp_Attack: 36,
                Deff: 30,
                Sp_Deff: 56,
                Speed: 50
            },
            {
                pokemon_id: 164,
                HP: 100,
                Attack: 50,
                Sp_Attack: 76,
                Deff: 50,
                Sp_Deff: 96,
                Speed: 70
            },
            {
                pokemon_id: 165,
                HP: 40,
                Attack: 20,
                Sp_Attack: 40,
                Deff: 30,
                Sp_Deff: 80,
                Speed: 55
            },
            {
                pokemon_id: 166,
                HP: 55,
                Attack: 35,
                Sp_Attack: 55,
                Deff: 50,
                Sp_Deff: 110,
                Speed: 85
            },
            {
                pokemon_id: 167,
                HP: 40,
                Attack: 60,
                Sp_Attack: 40,
                Deff: 40,
                Sp_Deff: 40,
                Speed: 30
            },
            {
                pokemon_id: 168,
                HP: 70,
                Attack: 90,
                Sp_Attack: 60,
                Deff: 70,
                Sp_Deff: 60,
                Speed: 40
            },
            {
                pokemon_id: 169,
                HP: 85,
                Attack: 90,
                Sp_Attack: 70,
                Deff: 80,
                Sp_Deff: 80,
                Speed: 130
            },
            {
                pokemon_id: 170,
                HP: 75,
                Attack: 38,
                Sp_Attack: 56,
                Deff: 38,
                Sp_Deff: 56,
                Speed: 67
            },
            {
                pokemon_id: 171,
                HP: 125,
                Attack: 58,
                Sp_Attack: 76,
                Deff: 58,
                Sp_Deff: 76,
                Speed: 67
            },
            {
                pokemon_id: 172,
                HP: 20,
                Attack: 40,
                Sp_Attack: 35,
                Deff: 15,
                Sp_Deff: 35,
                Speed: 60
            },
            {
                pokemon_id: 173,
                HP: 50,
                Attack: 25,
                Sp_Attack: 45,
                Deff: 28,
                Sp_Deff: 55,
                Speed: 15
            },
            {
                pokemon_id: 174,
                HP: 90,
                Attack: 30,
                Sp_Attack: 40,
                Deff: 15,
                Sp_Deff: 20,
                Speed: 15
            },
            {
                pokemon_id: 175,
                HP: 35,
                Attack: 20,
                Sp_Attack: 40,
                Deff: 65,
                Sp_Deff: 65,
                Speed: 20
            },
            {
                pokemon_id: 176,
                HP: 55,
                Attack: 40,
                Sp_Attack: 80,
                Deff: 85,
                Sp_Deff: 105,
                Speed: 40
            },
            {
                pokemon_id: 177,
                HP: 40,
                Attack: 50,
                Sp_Attack: 70,
                Deff: 45,
                Sp_Deff: 45,
                Speed: 70
            },
            {
                pokemon_id: 178,
                HP: 65,
                Attack: 75,
                Sp_Attack: 95,
                Deff: 70,
                Sp_Deff: 70,
                Speed: 95
            },
            {
                pokemon_id: 179,
                HP: 55,
                Attack: 40,
                Sp_Attack: 65,
                Deff: 40,
                Sp_Deff: 45,
                Speed: 35
            },
            {
                pokemon_id: 180,
                HP: 70,
                Attack: 55,
                Sp_Attack: 80,
                Deff: 55,
                Sp_Deff: 60,
                Speed: 45
            },
            {
                pokemon_id: 181,
                HP: 90,
                Attack: 75,
                Sp_Attack: 115,
                Deff: 85,
                Sp_Deff: 90,
                Speed: 55
            },
            {
                pokemon_id: 182,
                HP: 75,
                Attack: 80,
                Sp_Attack: 90,
                Deff: 85,
                Sp_Deff: 100,
                Speed: 50
            },
            {
                pokemon_id: 183,
                HP: 70,
                Attack: 20,
                Sp_Attack: 20,
                Deff: 50,
                Sp_Deff: 50,
                Speed: 40
            },
            {
                pokemon_id: 184,
                HP: 100,
                Attack: 50,
                Sp_Attack: 60,
                Deff: 80,
                Sp_Deff: 80,
                Speed: 50
            },
            {
                pokemon_id: 185,
                HP: 70,
                Attack: 100,
                Sp_Attack: 30,
                Deff: 115,
                Sp_Deff: 65,
                Speed: 30
            },
            {
                pokemon_id: 186,
                HP: 90,
                Attack: 75,
                Sp_Attack: 90,
                Deff: 75,
                Sp_Deff: 100,
                Speed: 70
            },
            {
                pokemon_id: 187,
                HP: 35,
                Attack: 35,
                Sp_Attack: 35,
                Deff: 40,
                Sp_Deff: 55,
                Speed: 50
            },
            {
                pokemon_id: 188,
                HP: 55,
                Attack: 45,
                Sp_Attack: 45,
                Deff: 50,
                Sp_Deff: 65,
                Speed: 80
            },
            {
                pokemon_id: 189,
                HP: 75,
                Attack: 55,
                Sp_Attack: 55,
                Deff: 70,
                Sp_Deff: 95,
                Speed: 110
            },
            {
                pokemon_id: 190,
                HP: 55,
                Attack: 70,
                Sp_Attack: 40,
                Deff: 55,
                Sp_Deff: 55,
                Speed: 85
            },
            {
                pokemon_id: 191,
                HP: 30,
                Attack: 30,
                Sp_Attack: 30,
                Deff: 30,
                Sp_Deff: 30,
                Speed: 30
            },
            {
                pokemon_id: 192,
                HP: 75,
                Attack: 75,
                Sp_Attack: 105,
                Deff: 55,
                Sp_Deff: 85,
                Speed: 30
            },
            {
                pokemon_id: 193,
                HP: 65,
                Attack: 65,
                Sp_Attack: 75,
                Deff: 45,
                Sp_Deff: 45,
                Speed: 95
            },
            {
                pokemon_id: 194,
                HP: 55,
                Attack: 45,
                Sp_Attack: 25,
                Deff: 45,
                Sp_Deff: 25,
                Speed: 15
            },
            {
                pokemon_id: 195,
                HP: 95,
                Attack: 85,
                Sp_Attack: 65,
                Deff: 85,
                Sp_Deff: 65,
                Speed: 35
            },
            {
                pokemon_id: 196,
                HP: 65,
                Attack: 65,
                Sp_Attack: 130,
                Deff: 60,
                Sp_Deff: 95,
                Speed: 110
            },
            {
                pokemon_id: 197,
                HP: 95,
                Attack: 65,
                Sp_Attack: 60,
                Deff: 110,
                Sp_Deff: 130,
                Speed: 65
            },
            {
                pokemon_id: 198,
                HP: 60,
                Attack: 85,
                Sp_Attack: 85,
                Deff: 42,
                Sp_Deff: 42,
                Speed: 91
            },
            {
                pokemon_id: 199,
                HP: 95,
                Attack: 75,
                Sp_Attack: 100,
                Deff: 80,
                Sp_Deff: 110,
                Speed: 30
            },
            {
                pokemon_id: 200,
                HP: 60,
                Attack: 60,
                Sp_Attack: 85,
                Deff: 60,
                Sp_Deff: 85,
                Speed: 85
            },
            {
                pokemon_id: 201,
                HP: 48,
                Attack: 72,
                Sp_Attack: 72,
                Deff: 48,
                Sp_Deff: 48,
                Speed: 48
            },
            {
                pokemon_id: 202,
                HP: 190,
                Attack: 33,
                Sp_Attack: 33,
                Deff: 58,
                Sp_Deff: 58,
                Speed: 33
            },
            {
                pokemon_id: 203,
                HP: 70,
                Attack: 80,
                Sp_Attack: 90,
                Deff: 65,
                Sp_Deff: 65,
                Speed: 85
            },
            {
                pokemon_id: 204,
                HP: 50,
                Attack: 65,
                Sp_Attack: 35,
                Deff: 90,
                Sp_Deff: 35,
                Speed: 15
            },
            {
                pokemon_id: 205,
                HP: 75,
                Attack: 90,
                Sp_Attack: 60,
                Deff: 140,
                Sp_Deff: 60,
                Speed: 40
            },
            {
                pokemon_id: 206,
                HP: 100,
                Attack: 70,
                Sp_Attack: 65,
                Deff: 70,
                Sp_Deff: 65,
                Speed: 45
            },
            {
                pokemon_id: 207,
                HP: 65,
                Attack: 75,
                Sp_Attack: 35,
                Deff: 105,
                Sp_Deff: 65,
                Speed: 85
            },
            {
                pokemon_id: 208,
                HP: 75,
                Attack: 85,
                Sp_Attack: 55,
                Deff: 200,
                Sp_Deff: 65,
                Speed: 30
            },
            {
                pokemon_id: 209,
                HP: 50,
                Attack: 80,
                Sp_Attack: 40,
                Deff: 50,
                Sp_Deff: 40,
                Speed: 30
            },
            {
                pokemon_id: 210,
                HP: 90,
                Attack: 120,
                Sp_Attack: 60,
                Deff: 75,
                Sp_Deff: 60,
                Speed: 45
            },
            {
                pokemon_id: 211,
                HP: 65,
                Attack: 95,
                Sp_Attack: 55,
                Deff: 85,
                Sp_Deff: 55,
                Speed: 85
            },
            {
                pokemon_id: 212,
                HP: 70,
                Attack: 130,
                Sp_Attack: 55,
                Deff: 100,
                Sp_Deff: 80,
                Speed: 65
            },
            {
                pokemon_id: 213,
                HP: 20,
                Attack: 10,
                Sp_Attack: 10,
                Deff: 230,
                Sp_Deff: 230,
                Speed: 5
            },
            {
                pokemon_id: 214,
                HP: 80,
                Attack: 125,
                Sp_Attack: 40,
                Deff: 75,
                Sp_Deff: 95,
                Speed: 85
            },
            {
                pokemon_id: 215,
                HP: 55,
                Attack: 95,
                Sp_Attack: 35,
                Deff: 55,
                Sp_Deff: 75,
                Speed: 115
            },
            {
                pokemon_id: 216,
                HP: 60,
                Attack: 80,
                Sp_Attack: 50,
                Deff: 50,
                Sp_Deff: 50,
                Speed: 40
            },
            {
                pokemon_id: 217,
                HP: 90,
                Attack: 130,
                Sp_Attack: 75,
                Deff: 75,
                Sp_Deff: 75,
                Speed: 55
            },
            {
                pokemon_id: 218,
                HP: 40,
                Attack: 40,
                Sp_Attack: 70,
                Deff: 40,
                Sp_Deff: 40,
                Speed: 20
            },
            {
                pokemon_id: 219,
                HP: 50,
                Attack: 50,
                Sp_Attack: 80,
                Deff: 120,
                Sp_Deff: 80,
                Speed: 30
            },
            {
                pokemon_id: 220,
                HP: 50,
                Attack: 50,
                Sp_Attack: 30,
                Deff: 40,
                Sp_Deff: 30,
                Speed: 50
            },
            {
                pokemon_id: 221,
                HP: 100,
                Attack: 100,
                Sp_Attack: 60,
                Deff: 80,
                Sp_Deff: 60,
                Speed: 50
            },
            {
                pokemon_id: 222,
                HP: 65,
                Attack: 55,
                Sp_Attack: 65,
                Deff: 95,
                Sp_Deff: 95,
                Speed: 35
            },
            {
                pokemon_id: 223,
                HP: 35,
                Attack: 65,
                Sp_Attack: 65,
                Deff: 35,
                Sp_Deff: 35,
                Speed: 65
            },
            {
                pokemon_id: 224,
                HP: 75,
                Attack: 105,
                Sp_Attack: 105,
                Deff: 75,
                Sp_Deff: 75,
                Speed: 45
            },
            {
                pokemon_id: 225,
                HP: 45,
                Attack: 55,
                Sp_Attack: 65,
                Deff: 45,
                Sp_Deff: 45,
                Speed: 75
            },
            {
                pokemon_id: 226,
                HP: 85,
                Attack: 40,
                Sp_Attack: 80,
                Deff: 70,
                Sp_Deff: 140,
                Speed: 70
            },
            {
                pokemon_id: 227,
                HP: 65,
                Attack: 80,
                Sp_Attack: 40,
                Deff: 140,
                Sp_Deff: 70,
                Speed: 70
            },
            {
                pokemon_id: 228,
                HP: 45,
                Attack: 60,
                Sp_Attack: 80,
                Deff: 30,
                Sp_Deff: 50,
                Speed: 65
            },
            {
                pokemon_id: 229,
                HP: 75,
                Attack: 90,
                Sp_Attack: 110,
                Deff: 50,
                Sp_Deff: 80,
                Speed: 95
            },
            {
                pokemon_id: 230,
                HP: 75,
                Attack: 95,
                Sp_Attack: 95,
                Deff: 95,
                Sp_Deff: 95,
                Speed: 85
            },
            {
                pokemon_id: 231,
                HP: 90,
                Attack: 60,
                Sp_Attack: 40,
                Deff: 60,
                Sp_Deff: 40,
                Speed: 40
            },
            {
                pokemon_id: 232,
                HP: 90,
                Attack: 120,
                Sp_Attack: 60,
                Deff: 120,
                Sp_Deff: 60,
                Speed: 50
            },
            {
                pokemon_id: 233,
                HP: 85,
                Attack: 80,
                Sp_Attack: 105,
                Deff: 90,
                Sp_Deff: 95,
                Speed: 60
            },
            {
                pokemon_id: 234,
                HP: 73,
                Attack: 95,
                Sp_Attack: 85,
                Deff: 62,
                Sp_Deff: 65,
                Speed: 85
            },
            {
                pokemon_id: 235,
                HP: 55,
                Attack: 20,
                Sp_Attack: 20,
                Deff: 35,
                Sp_Deff: 45,
                Speed: 75
            },
            {
                pokemon_id: 236,
                HP: 35,
                Attack: 35,
                Sp_Attack: 35,
                Deff: 35,
                Sp_Deff: 35,
                Speed: 35
            },
            {
                pokemon_id: 237,
                HP: 50,
                Attack: 95,
                Sp_Attack: 35,
                Deff: 95,
                Sp_Deff: 110,
                Speed: 70
            },
            {
                pokemon_id: 238,
                HP: 45,
                Attack: 30,
                Sp_Attack: 85,
                Deff: 15,
                Sp_Deff: 65,
                Speed: 65
            },
            {
                pokemon_id: 239,
                HP: 45,
                Attack: 63,
                Sp_Attack: 65,
                Deff: 37,
                Sp_Deff: 55,
                Speed: 95
            },
            {
                pokemon_id: 240,
                HP: 45,
                Attack: 75,
                Sp_Attack: 70,
                Deff: 37,
                Sp_Deff: 55,
                Speed: 83
            },
            {
                pokemon_id: 241,
                HP: 95,
                Attack: 80,
                Sp_Attack: 40,
                Deff: 105,
                Sp_Deff: 70,
                Speed: 100
            },
            {
                pokemon_id: 242,
                HP: 255,
                Attack: 10,
                Sp_Attack: 75,
                Deff: 10,
                Sp_Deff: 135,
                Speed: 55
            },
            {
                pokemon_id: 243,
                HP: 90,
                Attack: 85,
                Sp_Attack: 115,
                Deff: 75,
                Sp_Deff: 100,
                Speed: 115
            },
            {
                pokemon_id: 244,
                HP: 115,
                Attack: 115,
                Sp_Attack: 90,
                Deff: 85,
                Sp_Deff: 75,
                Speed: 100
            },
            {
                pokemon_id: 245,
                HP: 100,
                Attack: 75,
                Sp_Attack: 90,
                Deff: 115,
                Sp_Deff: 115,
                Speed: 85
            },
            {
                pokemon_id: 246,
                HP: 50,
                Attack: 64,
                Sp_Attack: 45,
                Deff: 50,
                Sp_Deff: 50,
                Speed: 41
            },
            {
                pokemon_id: 247,
                HP: 70,
                Attack: 84,
                Sp_Attack: 65,
                Deff: 70,
                Sp_Deff: 70,
                Speed: 51
            },
            {
                pokemon_id: 248,
                HP: 100,
                Attack: 134,
                Sp_Attack: 95,
                Deff: 110,
                Sp_Deff: 100,
                Speed: 61
            },
            {
                pokemon_id: 249,
                HP: 106,
                Attack: 90,
                Sp_Attack: 90,
                Deff: 130,
                Sp_Deff: 154,
                Speed: 110
            },
            {
                pokemon_id: 250,
                HP: 106,
                Attack: 130,
                Sp_Attack: 110,
                Deff: 90,
                Sp_Deff: 154,
                Speed: 90
            },
            {
                pokemon_id: 251,
                HP: 100,
                Attack: 100,
                Sp_Attack: 100,
                Deff: 100,
                Sp_Deff: 100,
                Speed: 100
            }
        ]

        for (let stat of stats) {
            await pool.query(`
                INSERT INTO stats (pokemon_id, HP, Attack, Sp_Attack, Deff, Sp_Deff, Speed) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
                [stat.pokemon_id, stat.HP, stat.Attack, stat.Sp_Attack, stat.Deff, stat.Sp_Deff, stat.Speed])
        }

        console.log("Berhasil Membuat Stats Pokemon Gen 2")
    }
    catch (err) {
        console.log("Gagal Membuat stats Pokemon, Error: ", err.message)
    }
}

module.exports = statsGen2Seeder