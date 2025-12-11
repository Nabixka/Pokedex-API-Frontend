const pool = require("../../db")

async function statsGen3Seeder() {
    try {
        const stats = [
            {
                pokemon_id: 252,
                HP: 40,
                Attack: 45,
                Sp_Attack: 65,
                Deff: 35,
                Sp_Deff: 55,
                Speed: 70
            },
            {
                pokemon_id: 253,
                HP: 50,
                Attack: 65,
                Sp_Attack: 85,
                Deff: 45,
                Sp_Deff: 65,
                Speed: 95
            },
            {
                pokemon_id: 254,
                HP: 70,
                Attack: 85,
                Sp_Attack: 105,
                Deff: 65,
                Sp_Deff: 85,
                Speed: 120
            },
            {
                pokemon_id: 255,
                HP: 45,
                Attack: 60,
                Sp_Attack: 70,
                Deff: 40,
                Sp_Deff: 50,
                Speed: 45
            },
            {
                pokemon_id: 256,
                HP: 60,
                Attack: 85,
                Sp_Attack: 85,
                Deff: 55,
                Sp_Deff: 60,
                Speed: 55
            },
            {
                pokemon_id: 257,
                HP: 80,
                Attack: 120,
                Sp_Attack: 110,
                Deff: 70,
                Sp_Deff: 70,
                Speed: 80
            },
            {
                pokemon_id: 258,
                HP: 50,
                Attack: 70,
                Sp_Attack: 50,
                Deff: 50,
                Sp_Deff: 50,
                Speed: 40
            },
            {
                pokemon_id: 259,
                HP: 70,
                Attack: 85,
                Sp_Attack: 60,
                Deff: 70,
                Sp_Deff: 70,
                Speed: 50
            },
            {
                pokemon_id: 260,
                HP: 100,
                Attack: 110,
                Sp_Attack: 85,
                Deff: 90,
                Sp_Deff: 90,
                Speed: 60
            },
            {
                pokemon_id: 261,
                HP: 35,
                Attack: 55,
                Sp_Attack: 30,
                Deff: 35,
                Sp_Deff: 30,
                Speed: 35
            },
            {
                pokemon_id: 262,
                HP: 70,
                Attack: 90,
                Sp_Attack: 60,
                Deff: 70,
                Sp_Deff: 60,
                Speed: 70
            },
            {
                pokemon_id: 263,
                HP: 38,
                Attack: 30,
                Sp_Attack: 30,
                Deff: 41,
                Sp_Deff: 41,
                Speed: 60
            },
            {
                pokemon_id: 264,
                HP: 78,
                Attack: 70,
                Sp_Attack: 50,
                Deff: 61,
                Sp_Deff: 61,
                Speed: 100
            },
            {
                pokemon_id: 265,
                HP: 45,
                Attack: 45,
                Sp_Attack: 20,
                Deff: 35,
                Sp_Deff: 30,
                Speed: 20
            },
            {
                pokemon_id: 266,
                HP: 50,
                Attack: 35,
                Sp_Attack: 25,
                Deff: 55,
                Sp_Deff: 25,
                Speed: 15
            },
            {
                pokemon_id: 267,
                HP: 60,
                Attack: 70,
                Sp_Attack: 100,
                Deff: 50,
                Sp_Deff: 50,
                Speed: 65
            },
            {
                pokemon_id: 268,
                HP: 50,
                Attack: 35,
                Sp_Attack: 25,
                Deff: 55,
                Sp_Deff: 25,
                Speed: 15
            },
            {
                pokemon_id: 269,
                HP: 60,
                Attack: 50,
                Sp_Attack: 50,
                Deff: 70,
                Sp_Deff: 90,
                Speed: 65
            },
            {
                pokemon_id: 270,
                HP: 40,
                Attack: 30,
                Sp_Attack: 40,
                Deff: 30,
                Sp_Deff: 50,
                Speed: 30
            },
            {
                pokemon_id: 271,
                HP: 60,
                Attack: 50,
                Sp_Attack: 60,
                Deff: 50,
                Sp_Deff: 70,
                Speed: 50
            },
            {
                pokemon_id: 272,
                HP: 80,
                Attack: 70,
                Sp_Attack: 90,
                Deff: 70,
                Sp_Deff: 100,
                Speed: 70
            },
            {
                pokemon_id: 273,
                HP: 40,
                Attack: 40,
                Sp_Attack: 30,
                Deff: 50,
                Sp_Deff: 30,
                Speed: 30
            },
            {
                pokemon_id: 274,
                HP: 70,
                Attack: 70,
                Sp_Attack: 60,
                Deff: 40,
                Sp_Deff: 40,
                Speed: 60
            },
            {
                pokemon_id: 275,
                HP: 90,
                Attack: 100,
                Sp_Attack: 90,
                Deff: 60,
                Sp_Deff: 60,
                Speed: 80
            },
            {
                pokemon_id: 276,
                HP: 40,
                Attack: 55,
                Sp_Attack: 30,
                Deff: 30,
                Sp_Deff: 30,
                Speed: 85
            },
            {
                pokemon_id: 277,
                HP: 60,
                Attack: 85,
                Sp_Attack: 75,
                Deff: 60,
                Sp_Deff: 50,
                Speed: 125
            },
            {
                pokemon_id: 278,
                HP: 40,
                Attack: 30,
                Sp_Attack: 55,
                Deff: 30,
                Sp_Deff: 30,
                Speed: 85
            },
            {
                pokemon_id: 279,
                HP: 60,
                Attack: 50,
                Sp_Attack: 85,
                Deff: 100,
                Sp_Deff: 70,
                Speed: 65
            },
            {
                pokemon_id: 280,
                HP: 28,
                Attack: 25,
                Sp_Attack: 45,
                Deff: 25,
                Sp_Deff: 35,
                Speed: 40
            },
            {
                pokemon_id: 281,
                HP: 38,
                Attack: 35,
                Sp_Attack: 65,
                Deff: 35,
                Sp_Deff: 55,
                Speed: 50
            },
            {
                pokemon_id: 282,
                HP: 68,
                Attack: 65,
                Sp_Attack: 125,
                Deff: 65,
                Sp_Deff: 115,
                Speed: 80
            },
            {
                pokemon_id: 283,
                HP: 40,
                Attack: 30,
                Sp_Attack: 50,
                Deff: 32,
                Sp_Deff: 52,
                Speed: 65
            },
            {
                pokemon_id: 284,
                HP: 70,
                Attack: 60,
                Sp_Attack: 100,
                Deff: 62,
                Sp_Deff: 82,
                Speed: 80
            },
            {
                pokemon_id: 285,
                HP: 60,
                Attack: 40,
                Sp_Attack: 40,
                Deff: 60,
                Sp_Deff: 60,
                Speed: 35
            },
            {
                pokemon_id: 286,
                HP: 70,
                Attack: 130,
                Sp_Attack: 60,
                Deff: 70,
                Sp_Deff: 90,
                Speed: 95
            },
            {
                pokemon_id: 287,
                HP: 60,
                Attack: 60,
                Sp_Attack: 35,
                Deff: 62,
                Sp_Deff: 35,
                Speed: 30
            },
            {
                pokemon_id: 288,
                HP: 80,
                Attack: 80,
                Sp_Attack: 55,
                Deff: 72,
                Sp_Deff: 55,
                Speed: 90
            },
            {
                pokemon_id: 289,
                HP: 150,
                Attack: 100,
                Sp_Attack: 95,
                Deff: 97,
                Sp_Deff: 85,
                Speed: 100
            },
            {
                pokemon_id: 290,
                HP: 31,
                Attack: 45,
                Sp_Attack: 30,
                Deff: 45,
                Sp_Deff: 30,
                Speed: 40
            },
            {
                pokemon_id: 291,
                HP: 76,
                Attack: 90,
                Sp_Attack: 30,
                Deff: 45,
                Sp_Deff: 30,
                Speed: 160
            },
            {
                pokemon_id: 292,
                HP: 1,
                Attack: 90,
                Sp_Attack: 30,
                Deff: 45,
                Sp_Deff: 30,
                Speed: 40
            },
            {
                pokemon_id: 293,
                HP: 61,
                Attack: 30,
                Sp_Attack: 30,
                Deff: 40,
                Sp_Deff: 40,
                Speed: 31
            },
            {
                pokemon_id: 294,
                HP: 84,
                Attack: 58,
                Sp_Attack: 58,
                Deff: 65,
                Sp_Deff: 65,
                Speed: 48
            },
            {
                pokemon_id: 295,
                HP: 104,
                Attack: 78,
                Sp_Attack: 78,
                Deff: 83,
                Sp_Deff: 83,
                Speed: 68
            },
            {
                pokemon_id: 296,
                HP: 72,
                Attack: 60,
                Sp_Attack: 20,
                Deff: 30,
                Sp_Deff: 30,
                Speed: 25
            },
            {
                pokemon_id: 297,
                HP: 144,
                Attack: 120,
                Sp_Attack: 40,
                Deff: 60,
                Sp_Deff: 60,
                Speed: 50
            },
            {
                pokemon_id: 298,
                HP: 50,
                Attack: 20,
                Sp_Attack: 20,
                Deff: 40,
                Sp_Deff: 40,
                Speed: 20
            },
            {
                pokemon_id: 299,
                HP: 40,
                Attack: 40,
                Sp_Attack: 40,
                Deff: 130,
                Sp_Deff: 60,
                Speed: 30
            },
            {
                pokemon_id: 300,
                HP: 50,
                Attack: 40,
                Sp_Attack: 30,
                Deff: 55,
                Sp_Deff: 55,
                Speed: 70
            },
            {
                pokemon_id: 301,
                HP: 70,
                Attack: 60,
                Sp_Attack: 55,
                Deff: 75,
                Sp_Deff: 75,
                Speed: 90
            },
            {
                pokemon_id: 302,
                HP: 50,
                Attack: 75,
                Sp_Attack: 65,
                Deff: 75,
                Sp_Deff: 65,
                Speed: 50
            },
            {
                pokemon_id: 303,
                HP: 50,
                Attack: 85,
                Sp_Attack: 55,
                Deff: 95,
                Sp_Deff: 75,
                Speed: 50
            },
            {
                pokemon_id: 304,
                HP: 50,
                Attack: 70,
                Sp_Attack: 40,
                Deff: 100,
                Sp_Deff: 40,
                Speed: 25
            },
            {
                pokemon_id: 305,
                HP: 60,
                Attack: 90,
                Sp_Attack: 55,
                Deff: 140,
                Sp_Deff: 55,
                Speed: 40
            },
            {
                pokemon_id: 306,
                HP: 70,
                Attack: 110,
                Sp_Attack: 60,
                Deff: 180,
                Sp_Deff: 60,
                Speed: 50
            },
            {
                pokemon_id: 307,
                HP: 30,
                Attack: 40,
                Sp_Attack: 40,
                Deff: 55,
                Sp_Deff: 55,
                Speed: 30
            },
            {
                pokemon_id: 308,
                HP: 60,
                Attack: 60,
                Sp_Attack: 60,
                Deff: 75,
                Sp_Deff: 75,
                Speed: 80
            },
            {
                pokemon_id: 309,
                HP: 40,
                Attack: 45,
                Sp_Attack: 65,
                Deff: 40,
                Sp_Deff: 40,
                Speed: 65
            },
            {
                pokemon_id: 310,
                HP: 70,
                Attack: 75,
                Sp_Attack: 105,
                Deff: 60,
                Sp_Deff: 60,
                Speed: 105
            },
            {
                pokemon_id: 311,
                HP: 60,
                Attack: 40,
                Sp_Attack: 75,
                Deff: 50,
                Sp_Deff: 85,
                Speed: 95
            },
            {
                pokemon_id: 312,
                HP: 60,
                Attack: 40,
                Sp_Attack: 75,
                Deff: 50,
                Sp_Deff: 85,
                Speed: 95
            },
            {
                pokemon_id: 313,
                HP: 65,
                Attack: 73,
                Sp_Attack: 47,
                Deff: 55,
                Sp_Deff: 75,
                Speed: 85
            },
            {
                pokemon_id: 314,
                HP: 65,
                Attack: 47,
                Sp_Attack: 73,
                Deff: 55,
                Sp_Deff: 75,
                Speed: 85
            },
            {
                pokemon_id: 315,
                HP: 50,
                Attack: 60,
                Sp_Attack: 80,
                Deff: 45,
                Sp_Deff: 35,
                Speed: 70
            },
            {
                pokemon_id: 316,
                HP: 70,
                Attack: 43,
                Sp_Attack: 43,
                Deff: 53,
                Sp_Deff: 53,
                Speed: 40
            },
            {
                pokemon_id: 317,
                HP: 100,
                Attack: 73,
                Sp_Attack: 73,
                Deff: 83,
                Sp_Deff: 83,
                Speed: 55
            },
            {
                pokemon_id: 318,
                HP: 45,
                Attack: 90,
                Sp_Attack: 55,
                Deff: 20,
                Sp_Deff: 20,
                Speed: 65
            },
            {
                pokemon_id: 319,
                HP: 70,
                Attack: 105,
                Sp_Attack: 95,
                Deff: 70,
                Sp_Deff: 70,
                Speed: 98
            },
            {
                pokemon_id: 320,
                HP: 130,
                Attack: 70,
                Sp_Attack: 70,
                Deff: 35,
                Sp_Deff: 35,
                Speed: 60
            },
            {
                pokemon_id: 321,
                HP: 170,
                Attack: 90,
                Sp_Attack: 90,
                Deff: 45,
                Sp_Deff: 45,
                Speed: 60
            },
            {
                pokemon_id: 322,
                HP: 60,
                Attack: 60,
                Sp_Attack: 75,
                Deff: 40,
                Sp_Deff: 45,
                Speed: 35
            },
            {
                pokemon_id: 323,
                HP: 70,
                Attack: 100,
                Sp_Attack: 105,
                Deff: 70,
                Sp_Deff: 75,
                Speed: 40
            },
            {
                pokemon_id: 324,
                HP: 70,
                Attack: 85,
                Sp_Attack: 80,
                Deff: 70,
                Sp_Deff: 70,
                Speed: 20
            },
            {
                pokemon_id: 325,
                HP: 60,
                Attack: 60,
                Sp_Attack: 60,
                Deff: 40,
                Sp_Deff: 75,
                Speed: 65
            },
            {
                pokemon_id: 326,
                HP: 80,
                Attack: 80,
                Sp_Attack: 60,
                Deff: 60,
                Sp_Deff: 120,
                Speed: 75
            },
            {
                pokemon_id: 327,
                HP: 60,
                Attack: 60,
                Sp_Attack: 60,
                Deff: 60,
                Sp_Deff: 60,
                Speed: 60
            },
            {
                pokemon_id: 328,
                HP: 45,
                Attack: 100,
                Sp_Attack: 45,
                Deff: 50,
                Sp_Deff: 50,
                Speed: 10
            },
            {
                pokemon_id: 329,
                HP: 50,
                Attack: 70,
                Sp_Attack: 50,
                Deff: 50,
                Sp_Deff: 50,
                Speed: 70
            },
            {
                pokemon_id: 330,
                HP: 80,
                Attack: 100,
                Sp_Attack: 80,
                Deff: 80,
                Sp_Deff: 80,
                Speed: 100
            },
            {
                pokemon_id: 331,
                HP: 50,
                Attack: 65,
                Sp_Attack: 60,
                Deff: 35,
                Sp_Deff: 35,
                Speed: 40
            },
            {
                pokemon_id: 332,
                HP: 70,
                Attack: 105,
                Sp_Attack: 105,
                Deff: 75,
                Sp_Deff: 75,
                Speed: 95
            },
            {
                pokemon_id: 333,
                HP: 45,
                Attack: 40,
                Sp_Attack: 40,
                Deff: 60,
                Sp_Deff: 75,
                Speed: 50
            },
            {
                pokemon_id: 334,
                HP: 75,
                Attack: 70,
                Sp_Attack: 90,
                Deff: 90,
                Sp_Deff: 105,
                Speed: 80
            },
            {
                pokemon_id: 335,
                HP: 73,
                Attack: 115,
                Sp_Attack: 58,
                Deff: 60,
                Sp_Deff: 58,
                Speed: 90
            },
            {
                pokemon_id: 336,
                HP: 73,
                Attack: 100,
                Sp_Attack: 100,
                Deff: 60,
                Sp_Deff: 60,
                Speed: 65
            },
            {
                pokemon_id: 337,
                HP: 90,
                Attack: 55,
                Sp_Attack: 85,
                Deff: 65,
                Sp_Deff: 95,
                Speed: 70
            },
            {
                pokemon_id: 338,
                HP: 90,
                Attack: 95,
                Sp_Attack: 55,
                Deff: 85,
                Sp_Deff: 65,
                Speed: 70
            },
            {
                pokemon_id: 339,
                HP: 50,
                Attack: 48,
                Sp_Attack: 51,
                Deff: 43,
                Sp_Deff: 43,
                Speed: 64
            },
            {
                pokemon_id: 340,
                HP: 110,
                Attack: 78,
                Sp_Attack: 76,
                Deff: 73,
                Sp_Deff: 71,
                Speed: 80
            },
            {
                pokemon_id: 341,
                HP: 43,
                Attack: 80,
                Sp_Attack: 50,
                Deff: 65,
                Sp_Deff: 35,
                Speed: 35
            },
            {
                pokemon_id: 342,
                HP: 73,
                Attack: 120,
                Sp_Attack: 85,
                Deff: 85,
                Sp_Deff: 55,
                Speed: 60
            },
            {
                pokemon_id: 343,
                HP: 60,
                Attack: 60,
                Sp_Attack: 75,
                Deff: 75,
                Sp_Deff: 75,
                Speed: 55
            },
            {
                pokemon_id: 344,
                HP: 80,
                Attack: 110,
                Sp_Attack: 120,
                Deff: 130,
                Sp_Deff: 90,
                Speed: 70
            },
            {
                pokemon_id: 345,
                HP: 66,
                Attack: 41,
                Sp_Attack: 61,
                Deff: 77,
                Sp_Deff: 87,
                Speed: 23
            },
            {
                pokemon_id: 346,
                HP: 86,
                Attack: 51,
                Sp_Attack: 81,
                Deff: 97,
                Sp_Deff: 107,
                Speed: 43
            },
            {
                pokemon_id: 347,
                HP: 45,
                Attack: 95,
                Sp_Attack: 40,
                Deff: 50,
                Sp_Deff: 50,
                Speed: 75
            },
            {
                pokemon_id: 348,
                HP: 75,
                Attack: 125,
                Sp_Attack: 70,
                Deff: 100,
                Sp_Deff: 80,
                Speed: 80
            },
            {
                pokemon_id: 349,
                HP: 20,
                Attack: 15,
                Sp_Attack: 20,
                Deff: 20,
                Sp_Deff: 105,
                Speed: 80
            },
            {
                pokemon_id: 350,
                HP: 95,
                Attack: 60,
                Sp_Attack: 100,
                Deff: 79,
                Sp_Deff: 125,
                Speed: 81
            },
            {
                pokemon_id: 351, // Castform (Normal Form)
                HP: 70,
                Attack: 70,
                Sp_Attack: 70,
                Deff: 70,
                Sp_Deff: 70,
                Speed: 70
            },
            {
                pokemon_id: 352,
                HP: 60,
                Attack: 90,
                Sp_Attack: 90,
                Deff: 70,
                Sp_Deff: 70,
                Speed: 80
            },
            {
                pokemon_id: 353,
                HP: 44,
                Attack: 75,
                Sp_Attack: 63,
                Deff: 35,
                Sp_Deff: 33,
                Speed: 45
            },
            {
                pokemon_id: 354,
                HP: 64,
                Attack: 115,
                Sp_Attack: 83,
                Deff: 45,
                Sp_Deff: 63,
                Speed: 65
            },
            {
                pokemon_id: 355,
                HP: 20,
                Attack: 40,
                Sp_Attack: 40,
                Deff: 90,
                Sp_Deff: 90,
                Speed: 25
            },
            {
                pokemon_id: 356,
                HP: 45,
                Attack: 50,
                Sp_Attack: 60,
                Deff: 135,
                Sp_Deff: 135,
                Speed: 30
            },
            {
                pokemon_id: 357,
                HP: 100,
                Attack: 70,
                Sp_Attack: 80,
                Deff: 80,
                Sp_Deff: 80,
                Speed: 90
            },
            {
                pokemon_id: 358,
                HP: 75,
                Attack: 80,
                Sp_Attack: 105,
                Deff: 70,
                Sp_Deff: 95,
                Speed: 65
            },
            {
                pokemon_id: 359,
                HP: 65,
                Attack: 130,
                Sp_Attack: 75,
                Deff: 60,
                Sp_Deff: 60,
                Speed: 100
            },
            {
                pokemon_id: 360,
                HP: 95,
                Attack: 23,
                Sp_Attack: 23,
                Deff: 48,
                Sp_Deff: 48,
                Speed: 23
            },
            {
                pokemon_id: 361,
                HP: 50,
                Attack: 50,
                Sp_Attack: 50,
                Deff: 50,
                Sp_Deff: 50,
                Speed: 50
            },
            {
                pokemon_id: 362,
                HP: 80,
                Attack: 80,
                Sp_Attack: 80,
                Deff: 80,
                Sp_Deff: 80,
                Speed: 50
            },
            {
                pokemon_id: 363,
                HP: 70,
                Attack: 40,
                Sp_Attack: 55,
                Deff: 50,
                Sp_Deff: 50,
                Speed: 25
            },
            {
                pokemon_id: 364,
                HP: 90,
                Attack: 60,
                Sp_Attack: 75,
                Deff: 70,
                Sp_Deff: 70,
                Speed: 40
            },
            {
                pokemon_id: 365,
                HP: 110,
                Attack: 80,
                Sp_Attack: 95,
                Deff: 90,
                Sp_Deff: 90,
                Speed: 65
            },
            {
                pokemon_id: 366,
                HP: 35,
                Attack: 64,
                Sp_Attack: 54,
                Deff: 85,
                Sp_Deff: 75,
                Speed: 32
            },
            {
                pokemon_id: 367,
                HP: 55,
                Attack: 104,
                Sp_Attack: 94,
                Deff: 105,
                Sp_Deff: 95,
                Speed: 52
            },
            {
                pokemon_id: 368,
                HP: 55,
                Attack: 84,
                Sp_Attack: 114,
                Deff: 105,
                Sp_Deff: 95,
                Speed: 52
            },
            {
                pokemon_id: 369,
                HP: 100,
                Attack: 90,
                Sp_Attack: 65,
                Deff: 130,
                Sp_Deff: 65,
                Speed: 55
            },
            {
                pokemon_id: 370,
                HP: 65,
                Attack: 55,
                Sp_Attack: 65,
                Deff: 45,
                Sp_Deff: 45,
                Speed: 95
            },
            {
                pokemon_id: 371,
                HP: 45,
                Attack: 75,
                Sp_Attack: 40,
                Deff: 60,
                Sp_Deff: 30,
                Speed: 50
            },
            {
                pokemon_id: 372,
                HP: 65,
                Attack: 95,
                Sp_Attack: 60,
                Deff: 100,
                Sp_Deff: 50,
                Speed: 50
            },
            {
                pokemon_id: 373,
                HP: 95,
                Attack: 135,
                Sp_Attack: 110,
                Deff: 80,
                Sp_Deff: 80,
                Speed: 100
            },
            {
                pokemon_id: 374,
                HP: 40,
                Attack: 55,
                Sp_Attack: 50,
                Deff: 80,
                Sp_Deff: 60,
                Speed: 30
            },
            {
                pokemon_id: 375,
                HP: 60,
                Attack: 75,
                Sp_Attack: 70,
                Deff: 100,
                Sp_Deff: 80,
                Speed: 50
            },
            {
                pokemon_id: 376,
                HP: 80,
                Attack: 135,
                Sp_Attack: 95,
                Deff: 130,
                Sp_Deff: 90,
                Speed: 70
            },
            {
                pokemon_id: 377,
                HP: 80,
                Attack: 100,
                Sp_Attack: 75,
                Deff: 150,
                Sp_Deff: 65,
                Speed: 50
            },
            {
                pokemon_id: 378,
                HP: 80,
                Attack: 50,
                Sp_Attack: 100,
                Deff: 65,
                Sp_Deff: 150,
                Speed: 50
            },
            {
                pokemon_id: 379,
                HP: 80,
                Attack: 75,
                Sp_Attack: 100,
                Deff: 100,
                Sp_Deff: 150,
                Speed: 50
            },
            {
                pokemon_id: 380,
                HP: 80,
                Attack: 80,
                Sp_Attack: 110,
                Deff: 90,
                Sp_Deff: 130,
                Speed: 110
            },
            {
                pokemon_id: 381,
                HP: 80,
                Attack: 130,
                Sp_Attack: 90,
                Deff: 110,
                Sp_Deff: 80,
                Speed: 110
            },
            {
                pokemon_id: 382,
                HP: 100,
                Attack: 150,
                Sp_Attack: 150,
                Deff: 90,
                Sp_Deff: 90,
                Speed: 90
            },
            {
                pokemon_id: 383,
                HP: 100,
                Attack: 150,
                Sp_Attack: 150,
                Deff: 90,
                Sp_Deff: 90,
                Speed: 90
            },
            {
                pokemon_id: 384,
                HP: 105,
                Attack: 150,
                Sp_Attack: 150,
                Deff: 90,
                Sp_Deff: 90,
                Speed: 95
            },
            {
                pokemon_id: 385,
                HP: 100,
                Attack: 100,
                Sp_Attack: 100,
                Deff: 100,
                Sp_Deff: 100,
                Speed: 100
            },
            {
                pokemon_id: 386,
                HP: 50,
                Attack: 150,
                Sp_Attack: 150,
                Deff: 50,
                Sp_Deff: 50,
                Speed: 150
            }
        ]

        for (let stat of stats) {
            await pool.query(`
                INSERT INTO stats (pokemon_id, HP, Attack, Sp_Attack, Deff, Sp_Deff, Speed) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
                [stat.pokemon_id, stat.HP, stat.Attack, stat.Sp_Attack, stat.Deff, stat.Sp_Deff, stat.Speed])
        }

        console.log("Berhasil Membuat Stats Pokemon Gen 3")
    }
    catch (err) {
        console.log("Gagal Membuat stats Pokemon, Error: ", err.message)
    }
}

module.exports = statsGen3Seeder