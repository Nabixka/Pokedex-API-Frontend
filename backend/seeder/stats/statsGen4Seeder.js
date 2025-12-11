const pool = require("../../db")

async function statsGen4Seeder() {
    try {
        const stats = [
            {
                "pokemon_id": 387,
                "HP": 55,
                "Attack": 68,
                "Sp_Attack": 45,
                "Deff": 64,
                "Sp_Deff": 55,
                "Speed": 31
            },
            {
                "pokemon_id": 388,
                "HP": 75,
                "Attack": 89,
                "Sp_Attack": 55,
                "Deff": 85,
                "Sp_Deff": 65,
                "Speed": 36
            },
            {
                "pokemon_id": 389,
                "HP": 95,
                "Attack": 109,
                "Sp_Attack": 75,
                "Deff": 105,
                "Sp_Deff": 85,
                "Speed": 56
            },
            {
                "pokemon_id": 390,
                "HP": 44,
                "Attack": 58,
                "Sp_Attack": 58,
                "Deff": 44,
                "Sp_Deff": 44,
                "Speed": 61
            },
            {
                "pokemon_id": 391,
                "HP": 64,
                "Attack": 78,
                "Sp_Attack": 78,
                "Deff": 52,
                "Sp_Deff": 52,
                "Speed": 81
            },
            {
                "pokemon_id": 392,
                "HP": 76,
                "Attack": 104,
                "Sp_Attack": 104,
                "Deff": 71,
                "Sp_Deff": 71,
                "Speed": 108
            },
            {
                "pokemon_id": 393,
                "HP": 53,
                "Attack": 51,
                "Sp_Attack": 61,
                "Deff": 53,
                "Sp_Deff": 56,
                "Speed": 40
            },
            {
                "pokemon_id": 394,
                "HP": 64,
                "Attack": 66,
                "Sp_Attack": 81,
                "Deff": 68,
                "Sp_Deff": 76,
                "Speed": 50
            },
            {
                "pokemon_id": 395,
                "HP": 84,
                "Attack": 86,
                "Sp_Attack": 111,
                "Deff": 88,
                "Sp_Deff": 101,
                "Speed": 60
            },
            {
                "pokemon_id": 396,
                "HP": 40,
                "Attack": 55,
                "Sp_Attack": 30,
                "Deff": 30,
                "Sp_Deff": 30,
                "Speed": 60
            },
            {
                "pokemon_id": 397,
                "HP": 55,
                "Attack": 75,
                "Sp_Attack": 40,
                "Deff": 50,
                "Sp_Deff": 40,
                "Speed": 80
            },
            {
                "pokemon_id": 398,
                "HP": 85,
                "Attack": 120,
                "Sp_Attack": 50,
                "Deff": 70,
                "Sp_Deff": 60,
                "Speed": 100
            },
            {
                "pokemon_id": 399,
                "HP": 59,
                "Attack": 45,
                "Sp_Attack": 35,
                "Deff": 40,
                "Sp_Deff": 40,
                "Speed": 31
            },
            {
                "pokemon_id": 400,
                "HP": 79,
                "Attack": 85,
                "Sp_Attack": 55,
                "Deff": 60,
                "Sp_Deff": 60,
                "Speed": 71
            },
            {
                "pokemon_id": 401,
                "HP": 37,
                "Attack": 25,
                "Sp_Attack": 25,
                "Deff": 41,
                "Sp_Deff": 41,
                "Speed": 25
            },
            {
                "pokemon_id": 402,
                "HP": 77,
                "Attack": 85,
                "Sp_Attack": 55,
                "Deff": 51,
                "Sp_Deff": 51,
                "Speed": 65
            },
            {
                "pokemon_id": 403,
                "HP": 45,
                "Attack": 65,
                "Sp_Attack": 40,
                "Deff": 34,
                "Sp_Deff": 34,
                "Speed": 45
            },
            {
                "pokemon_id": 404,
                "HP": 60,
                "Attack": 85,
                "Sp_Attack": 60,
                "Deff": 49,
                "Sp_Deff": 49,
                "Speed": 60
            },
            {
                "pokemon_id": 405,
                "HP": 80,
                "Attack": 120,
                "Sp_Attack": 95,
                "Deff": 79,
                "Sp_Deff": 79,
                "Speed": 70
            },
            {
                "pokemon_id": 406,
                "HP": 40,
                "Attack": 30,
                "Sp_Attack": 50,
                "Deff": 35,
                "Sp_Deff": 70,
                "Speed": 55
            },
            {
                "pokemon_id": 407,
                "HP": 60,
                "Attack": 70,
                "Sp_Attack": 125,
                "Deff": 65,
                "Sp_Deff": 105,
                "Speed": 90
            },
            {
                "pokemon_id": 408,
                "HP": 67,
                "Attack": 125,
                "Sp_Attack": 30,
                "Deff": 40,
                "Sp_Deff": 30,
                "Speed": 58
            },
            {
                "pokemon_id": 409,
                "HP": 97,
                "Attack": 165,
                "Sp_Attack": 65,
                "Deff": 60,
                "Sp_Deff": 50,
                "Speed": 58
            },
            {
                "pokemon_id": 410,
                "HP": 30,
                "Attack": 42,
                "Sp_Attack": 42,
                "Deff": 118,
                "Sp_Deff": 88,
                "Speed": 30
            },
            {
                "pokemon_id": 411,
                "HP": 60,
                "Attack": 52,
                "Sp_Attack": 47,
                "Deff": 168,
                "Sp_Deff": 138,
                "Speed": 30
            },
            {
                "pokemon_id": 412,
                "HP": 40,
                "Attack": 29,
                "Sp_Attack": 29,
                "Deff": 45,
                "Sp_Deff": 45,
                "Speed": 36
            },
            {
                "pokemon_id": 413,
                "HP": 60,
                "Attack": 59,
                "Sp_Attack": 79,
                "Deff": 85,
                "Sp_Deff": 105,
                "Speed": 36
            },
            {
                "pokemon_id": 414,
                "HP": 70,
                "Attack": 94,
                "Sp_Attack": 94,
                "Deff": 50,
                "Sp_Deff": 50,
                "Speed": 66
            },
            {
                "pokemon_id": 415,
                "HP": 30,
                "Attack": 30,
                "Sp_Attack": 30,
                "Deff": 42,
                "Sp_Deff": 42,
                "Speed": 70
            },
            {
                "pokemon_id": 416,
                "HP": 70,
                "Attack": 80,
                "Sp_Attack": 80,
                "Deff": 102,
                "Sp_Deff": 102,
                "Speed": 40
            },
            {
                "pokemon_id": 417,
                "HP": 60,
                "Attack": 45,
                "Sp_Attack": 45,
                "Deff": 70,
                "Sp_Deff": 90,
                "Speed": 95
            },
            {
                "pokemon_id": 418,
                "HP": 55,
                "Attack": 65,
                "Sp_Attack": 60,
                "Deff": 35,
                "Sp_Deff": 30,
                "Speed": 85
            },
            {
                "pokemon_id": 419,
                "HP": 85,
                "Attack": 105,
                "Sp_Attack": 85,
                "Deff": 55,
                "Sp_Deff": 50,
                "Speed": 115
            },
            {
                "pokemon_id": 420,
                "HP": 45,
                "Attack": 35,
                "Sp_Attack": 62,
                "Deff": 45,
                "Sp_Deff": 53,
                "Speed": 35
            },
            {
                "pokemon_id": 421,
                "HP": 70,
                "Attack": 60,
                "Sp_Attack": 87,
                "Deff": 70,
                "Sp_Deff": 78,
                "Speed": 85
            },
            {
                "pokemon_id": 422,
                "HP": 76,
                "Attack": 48,
                "Sp_Attack": 57,
                "Deff": 48,
                "Sp_Deff": 62,
                "Speed": 34
            },
            {
                "pokemon_id": 423,
                "HP": 111,
                "Attack": 83,
                "Sp_Attack": 92,
                "Deff": 68,
                "Sp_Deff": 82,
                "Speed": 39
            },
            {
                "pokemon_id": 424,
                "HP": 75,
                "Attack": 100,
                "Sp_Attack": 60,
                "Deff": 66,
                "Sp_Deff": 66,
                "Speed": 115
            },
            {
                "pokemon_id": 425,
                "HP": 90,
                "Attack": 50,
                "Sp_Attack": 60,
                "Deff": 34,
                "Sp_Deff": 44,
                "Speed": 70
            },
            {
                "pokemon_id": 426,
                "HP": 150,
                "Attack": 80,
                "Sp_Attack": 90,
                "Deff": 44,
                "Sp_Deff": 54,
                "Speed": 80
            },
            {
                "pokemon_id": 427,
                "HP": 55,
                "Attack": 66,
                "Sp_Attack": 44,
                "Deff": 44,
                "Sp_Deff": 56,
                "Speed": 85
            },
            {
                "pokemon_id": 428,
                "HP": 65,
                "Attack": 76,
                "Sp_Attack": 54,
                "Deff": 84,
                "Sp_Deff": 96,
                "Speed": 105
            },
            {
                "pokemon_id": 429,
                "HP": 60,
                "Attack": 60,
                "Sp_Attack": 105,
                "Deff": 60,
                "Sp_Deff": 105,
                "Speed": 105
            },
            {
                "pokemon_id": 430,
                "HP": 100,
                "Attack": 125,
                "Sp_Attack": 105,
                "Deff": 52,
                "Sp_Deff": 52,
                "Speed": 71
            },
            {
                "pokemon_id": 431,
                "HP": 49,
                "Attack": 55,
                "Sp_Attack": 42,
                "Deff": 42,
                "Sp_Deff": 37,
                "Speed": 85
            },
            {
                "pokemon_id": 432,
                "HP": 71,
                "Attack": 82,
                "Sp_Attack": 64,
                "Deff": 64,
                "Sp_Deff": 59,
                "Speed": 112
            },
            {
                "pokemon_id": 433,
                "HP": 45,
                "Attack": 30,
                "Sp_Attack": 65,
                "Deff": 50,
                "Sp_Deff": 65,
                "Speed": 45
            },
            {
                "pokemon_id": 434,
                "HP": 63,
                "Attack": 63,
                "Sp_Attack": 41,
                "Deff": 47,
                "Sp_Deff": 41,
                "Speed": 74
            },
            {
                "pokemon_id": 435,
                "HP": 103,
                "Attack": 93,
                "Sp_Attack": 71,
                "Deff": 67,
                "Sp_Deff": 61,
                "Speed": 84
            },
            {
                "pokemon_id": 436,
                "HP": 57,
                "Attack": 24,
                "Sp_Attack": 24,
                "Deff": 86,
                "Sp_Deff": 86,
                "Speed": 23
            },
            {
                "pokemon_id": 437,
                "HP": 67,
                "Attack": 89,
                "Sp_Attack": 79,
                "Deff": 116,
                "Sp_Deff": 116,
                "Speed": 33
            },
            {
                "pokemon_id": 438,
                "HP": 50,
                "Attack": 80,
                "Sp_Attack": 10,
                "Deff": 95,
                "Sp_Deff": 45,
                "Speed": 10
            },
            {
                "pokemon_id": 439,
                "HP": 20,
                "Attack": 25,
                "Sp_Attack": 70,
                "Deff": 45,
                "Sp_Deff": 90,
                "Speed": 60
            },
            {
                "pokemon_id": 440,
                "HP": 100,
                "Attack": 5,
                "Sp_Attack": 15,
                "Deff": 5,
                "Sp_Deff": 65,
                "Speed": 30
            },
            {
                "pokemon_id": 441,
                "HP": 76,
                "Attack": 65,
                "Sp_Attack": 92,
                "Deff": 45,
                "Sp_Deff": 42,
                "Speed": 91
            },
            {
                "pokemon_id": 442,
                "HP": 50,
                "Attack": 92,
                "Sp_Attack": 92,
                "Deff": 108,
                "Sp_Deff": 108,
                "Speed": 35
            },
            {
                "pokemon_id": 443,
                "HP": 58,
                "Attack": 70,
                "Sp_Attack": 40,
                "Deff": 45,
                "Sp_Deff": 45,
                "Speed": 42
            },
            {
                "pokemon_id": 444,
                "HP": 68,
                "Attack": 90,
                "Sp_Attack": 50,
                "Deff": 65,
                "Sp_Deff": 55,
                "Speed": 82
            },
            {
                "pokemon_id": 445,
                "HP": 108,
                "Attack": 130,
                "Sp_Attack": 80,
                "Deff": 95,
                "Sp_Deff": 85,
                "Speed": 102
            },
            {
                "pokemon_id": 446,
                "HP": 135,
                "Attack": 85,
                "Sp_Attack": 40,
                "Deff": 40,
                "Sp_Deff": 85,
                "Speed": 5
            },
            {
                "pokemon_id": 447,
                "HP": 40,
                "Attack": 70,
                "Sp_Attack": 35,
                "Deff": 40,
                "Sp_Deff": 40,
                "Speed": 60
            },
            {
                "pokemon_id": 448,
                "HP": 70,
                "Attack": 110,
                "Sp_Attack": 115,
                "Deff": 70,
                "Sp_Deff": 70,
                "Speed": 90
            },
            {
                "pokemon_id": 449,
                "HP": 68,
                "Attack": 72,
                "Sp_Attack": 38,
                "Deff": 78,
                "Sp_Deff": 42,
                "Speed": 32
            },
            {
                "pokemon_id": 450,
                "HP": 108,
                "Attack": 112,
                "Sp_Attack": 68,
                "Deff": 118,
                "Sp_Deff": 72,
                "Speed": 47
            },
            {
                "pokemon_id": 451,
                "HP": 40,
                "Attack": 50,
                "Sp_Attack": 30,
                "Deff": 70,
                "Sp_Deff": 55,
                "Speed": 65
            },
            {
                "pokemon_id": 452,
                "HP": 70,
                "Attack": 90,
                "Sp_Attack": 60,
                "Deff": 110,
                "Sp_Deff": 75,
                "Speed": 95
            },
            {
                "pokemon_id": 453,
                "HP": 48,
                "Attack": 61,
                "Sp_Attack": 61,
                "Deff": 40,
                "Sp_Deff": 40,
                "Speed": 50
            },
            {
                "pokemon_id": 454,
                "HP": 83,
                "Attack": 106,
                "Sp_Attack": 86,
                "Deff": 65,
                "Sp_Deff": 65,
                "Speed": 85
            },
            {
                "pokemon_id": 455,
                "HP": 74,
                "Attack": 100,
                "Sp_Attack": 90,
                "Deff": 72,
                "Sp_Deff": 72,
                "Speed": 46
            },
            {
                "pokemon_id": 456,
                "HP": 49,
                "Attack": 49,
                "Sp_Attack": 49,
                "Deff": 56,
                "Sp_Deff": 61,
                "Speed": 66
            },
            {
                "pokemon_id": 457,
                "HP": 69,
                "Attack": 69,
                "Sp_Attack": 69,
                "Deff": 76,
                "Sp_Deff": 86,
                "Speed": 91
            },
            {
                "pokemon_id": 458,
                "HP": 45,
                "Attack": 20,
                "Sp_Attack": 60,
                "Deff": 50,
                "Sp_Deff": 120,
                "Speed": 50
            },
            {
                "pokemon_id": 459,
                "HP": 60,
                "Attack": 62,
                "Sp_Attack": 62,
                "Deff": 50,
                "Sp_Deff": 60,
                "Speed": 40
            },
            {
                "pokemon_id": 460,
                "HP": 90,
                "Attack": 92,
                "Sp_Attack": 92,
                "Deff": 75,
                "Sp_Deff": 85,
                "Speed": 60
            },
            {
                "pokemon_id": 461,
                "HP": 70,
                "Attack": 120,
                "Sp_Attack": 45,
                "Deff": 65,
                "Sp_Deff": 85,
                "Speed": 125
            },
            {
                "pokemon_id": 462,
                "HP": 70,
                "Attack": 70,
                "Sp_Attack": 130,
                "Deff": 115,
                "Sp_Deff": 90,
                "Speed": 60
            },
            {
                "pokemon_id": 463,
                "HP": 110,
                "Attack": 85,
                "Sp_Attack": 80,
                "Deff": 95,
                "Sp_Deff": 95,
                "Speed": 50
            },
            {
                "pokemon_id": 464,
                "HP": 115,
                "Attack": 140,
                "Sp_Attack": 55,
                "Deff": 130,
                "Sp_Deff": 55,
                "Speed": 40
            },
            {
                "pokemon_id": 465,
                "HP": 100,
                "Attack": 100,
                "Sp_Attack": 110,
                "Deff": 125,
                "Sp_Deff": 50,
                "Speed": 50
            },
            {
                "pokemon_id": 466,
                "HP": 75,
                "Attack": 123,
                "Sp_Attack": 95,
                "Deff": 67,
                "Sp_Deff": 85,
                "Speed": 95
            },
            {
                "pokemon_id": 467,
                "HP": 75,
                "Attack": 95,
                "Sp_Attack": 125,
                "Deff": 67,
                "Sp_Deff": 95,
                "Speed": 83
            },
            {
                "pokemon_id": 468,
                "HP": 85,
                "Attack": 50,
                "Sp_Attack": 120,
                "Deff": 95,
                "Sp_Deff": 115,
                "Speed": 80
            },
            {
                "pokemon_id": 469,
                "HP": 86,
                "Attack": 76,
                "Sp_Attack": 116,
                "Deff": 86,
                "Sp_Deff": 56,
                "Speed": 95
            },
            {
                "pokemon_id": 470,
                "HP": 65,
                "Attack": 110,
                "Sp_Attack": 60,
                "Deff": 130,
                "Sp_Deff": 65,
                "Speed": 95
            },
            {
                "pokemon_id": 471,
                "HP": 65,
                "Attack": 60,
                "Sp_Attack": 130,
                "Deff": 110,
                "Sp_Deff": 95,
                "Speed": 65
            },
            {
                "pokemon_id": 472,
                "HP": 75,
                "Attack": 95,
                "Sp_Attack": 45,
                "Deff": 125,
                "Sp_Deff": 75,
                "Speed": 95
            },
            {
                "pokemon_id": 473,
                "HP": 110,
                "Attack": 130,
                "Sp_Attack": 70,
                "Deff": 80,
                "Sp_Deff": 60,
                "Speed": 80
            },
            {
                "pokemon_id": 474,
                "HP": 85,
                "Attack": 80,
                "Sp_Attack": 135,
                "Deff": 70,
                "Sp_Deff": 75,
                "Speed": 90
            },
            {
                "pokemon_id": 475,
                "HP": 68,
                "Attack": 125,
                "Sp_Attack": 65,
                "Deff": 65,
                "Sp_Deff": 115,
                "Speed": 80
            },
            {
                "pokemon_id": 476,
                "HP": 60,
                "Attack": 55,
                "Sp_Attack": 75,
                "Deff": 145,
                "Sp_Deff": 150,
                "Speed": 40
            },
            {
                "pokemon_id": 477,
                "HP": 45,
                "Attack": 100,
                "Sp_Attack": 65,
                "Deff": 135,
                "Sp_Deff": 135,
                "Speed": 45
            },
            {
                "pokemon_id": 478,
                "HP": 70,
                "Attack": 80,
                "Sp_Attack": 80,
                "Deff": 70,
                "Sp_Deff": 70,
                "Speed": 110
            },
            {
                "pokemon_id": 479,
                "HP": 50,
                "Attack": 50,
                "Sp_Attack": 95,
                "Deff": 77,
                "Sp_Deff": 77,
                "Speed": 91
            },
            {
                "pokemon_id": 480,
                "HP": 75,
                "Attack": 75,
                "Sp_Attack": 75,
                "Deff": 130,
                "Sp_Deff": 130,
                "Speed": 95
            },
            {
                "pokemon_id": 481,
                "HP": 80,
                "Attack": 105,
                "Sp_Attack": 105,
                "Deff": 105,
                "Sp_Deff": 105,
                "Speed": 80
            },
            {
                "pokemon_id": 482,
                "HP": 75,
                "Attack": 125,
                "Sp_Attack": 125,
                "Deff": 70,
                "Sp_Deff": 70,
                "Speed": 115
            },
            {
                "pokemon_id": 483,
                "HP": 100,
                "Attack": 120,
                "Sp_Attack": 150,
                "Deff": 120,
                "Sp_Deff": 100,
                "Speed": 90
            },
            {
                "pokemon_id": 484,
                "HP": 90,
                "Attack": 120,
                "Sp_Attack": 150,
                "Deff": 100,
                "Sp_Deff": 120,
                "Speed": 100
            },
            {
                "pokemon_id": 485,
                "HP": 91,
                "Attack": 90,
                "Sp_Attack": 130,
                "Deff": 106,
                "Sp_Deff": 106,
                "Speed": 77
            },
            {
                "pokemon_id": 486,
                "HP": 110,
                "Attack": 160,
                "Sp_Attack": 80,
                "Deff": 110,
                "Sp_Deff": 110,
                "Speed": 100
            },
            {
                "pokemon_id": 487,
                "HP": 150,
                "Attack": 100,
                "Sp_Attack": 100,
                "Deff": 120,
                "Sp_Deff": 120,
                "Speed": 90
            },
            {
                "pokemon_id": 488,
                "HP": 120,
                "Attack": 70,
                "Sp_Attack": 75,
                "Deff": 120,
                "Sp_Deff": 130,
                "Speed": 85
            },
            {
                "pokemon_id": 489,
                "HP": 80,
                "Attack": 80,
                "Sp_Attack": 80,
                "Deff": 80,
                "Sp_Deff": 80,
                "Speed": 80
            },
            {
                "pokemon_id": 490,
                "HP": 100,
                "Attack": 100,
                "Sp_Attack": 100,
                "Deff": 100,
                "Sp_Deff": 100,
                "Speed": 100
            },
            {
                "pokemon_id": 491,
                "HP": 70,
                "Attack": 90,
                "Sp_Attack": 135,
                "Deff": 90,
                "Sp_Deff": 90,
                "Speed": 125
            },
            {
                "pokemon_id": 492,
                "HP": 100,
                "Attack": 100,
                "Sp_Attack": 100,
                "Deff": 100,
                "Sp_Deff": 100,
                "Speed": 100
            },
            {
                "pokemon_id": 493,
                "HP": 120,
                "Attack": 120,
                "Sp_Attack": 120,
                "Deff": 120,
                "Sp_Deff": 120,
                "Speed": 120
            }
        ]


        for (let stat of stats) {
            await pool.query(`
                INSERT INTO stats (pokemon_id, HP, Attack, Sp_Attack, Deff, Sp_Deff, Speed) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
                [stat.pokemon_id, stat.HP, stat.Attack, stat.Sp_Attack, stat.Deff, stat.Sp_Deff, stat.Speed])
        }

        console.log("Berhasil Membuat Stats Pokemon Gen 4")
    }
    catch (err) {
        console.log("Gagal Membuat stats Pokemon, Error: ", err.message)
    }
}

module.exports = statsGen4Seeder