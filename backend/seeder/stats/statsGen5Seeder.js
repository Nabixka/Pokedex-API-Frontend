const pool = require("../../db")

async function statsGen5Seeder() {
    try {
        const stats = [
            {
                pokemon_id: 494,
                HP: 100,
                Attack: 100,
                Sp_Attack: 100,
                Deff: 100,
                Sp_Deff: 100,
                Speed: 100
            },
            {
                pokemon_id: 495,
                HP: 45,
                Attack: 45,
                Sp_Attack: 45,
                Deff: 55,
                Sp_Deff: 55,
                Speed: 45
            },
            {
                pokemon_id: 496,
                HP: 60,
                Attack: 60,
                Sp_Attack: 60,
                Deff: 75,
                Sp_Deff: 75,
                Speed: 60
            },
            {
                pokemon_id: 497,
                HP: 75,
                Attack: 75,
                Sp_Attack: 75,
                Deff: 105,
                Sp_Deff: 95,
                Speed: 110
            },
            {
                pokemon_id: 498,
                HP: 65,
                Attack: 63,
                Sp_Attack: 45,
                Deff: 48,
                Sp_Deff: 45,
                Speed: 47
            },
            {
                pokemon_id: 499,
                HP: 85,
                Attack: 88,
                Sp_Attack: 70,
                Deff: 75,
                Sp_Deff: 70,
                Speed: 60
            },
            {
                pokemon_id: 500,
                HP: 95,
                Attack: 123,
                Sp_Attack: 100,
                Deff: 65,
                Sp_Deff: 70,
                Speed: 65
            },
            {
                pokemon_id: 501,
                HP: 55,
                Attack: 66,
                Sp_Attack: 44,
                Deff: 44,
                Sp_Deff: 50,
                Speed: 50
            },
            {
                pokemon_id: 502,
                HP: 75,
                Attack: 86,
                Sp_Attack: 54,
                Deff: 64,
                Sp_Deff: 60,
                Speed: 60
            },
            {
                pokemon_id: 503,
                HP: 95,
                Attack: 116,
                Sp_Attack: 108,
                Deff: 85,
                Sp_Deff: 70,
                Speed: 70
            },
            {
                pokemon_id: 504,
                HP: 38,
                Attack: 56,
                Sp_Attack: 34,
                Deff: 35,
                Sp_Deff: 35,
                Speed: 72
            },
            {
                pokemon_id: 505,
                HP: 77,
                Attack: 85,
                Sp_Attack: 45,
                Deff: 70,
                Sp_Deff: 70,
                Speed: 106
            },
            {
                pokemon_id: 506,
                HP: 45,
                Attack: 60,
                Sp_Attack: 30,
                Deff: 45,
                Sp_Deff: 45,
                Speed: 55
            },
            {
                pokemon_id: 507,
                HP: 65,
                Attack: 80,
                Sp_Attack: 35,
                Deff: 65,
                Sp_Deff: 65,
                Speed: 60
            },
            {
                pokemon_id: 508,
                HP: 85,
                Attack: 110,
                Sp_Attack: 60,
                Deff: 90,
                Sp_Deff: 90,
                Speed: 80
            },
            {
                pokemon_id: 509,
                HP: 41,
                Attack: 50,
                Sp_Attack: 36,
                Deff: 37,
                Sp_Deff: 36,
                Speed: 66
            },
            {
                pokemon_id: 510,
                HP: 64,
                Attack: 88,
                Sp_Attack: 68,
                Deff: 50,
                Sp_Deff: 50,
                Speed: 106
            },
            {
                pokemon_id: 511,
                HP: 50,
                Attack: 53,
                Sp_Attack: 53,
                Deff: 48,
                Sp_Deff: 48,
                Speed: 64
            },
            {
                pokemon_id: 512,
                HP: 60,
                Attack: 83,
                Sp_Attack: 83,
                Deff: 63,
                Sp_Deff: 63,
                Speed: 86
            },
            {
                pokemon_id: 513,
                HP: 50,
                Attack: 53,
                Sp_Attack: 53,
                Deff: 48,
                Sp_Deff: 48,
                Speed: 64
            },
            {
                pokemon_id: 514,
                HP: 60,
                Attack: 83,
                Sp_Attack: 83,
                Deff: 63,
                Sp_Deff: 63,
                Speed: 86
            },
            {
                pokemon_id: 515,
                HP: 50,
                Attack: 53,
                Sp_Attack: 53,
                Deff: 48,
                Sp_Deff: 48,
                Speed: 64
            },
            {
                pokemon_id: 516,
                HP: 60,
                Attack: 83,
                Sp_Attack: 83,
                Deff: 63,
                Sp_Deff: 63,
                Speed: 86
            },
            {
                pokemon_id: 517,
                HP: 60,
                Attack: 25,
                Sp_Attack: 75,
                Deff: 45,
                Sp_Deff: 85,
                Speed: 40
            },
            {
                pokemon_id: 518,
                HP: 76,
                Attack: 55,
                Sp_Attack: 103,
                Deff: 65,
                Sp_Deff: 85,
                Speed: 29
            },
            {
                pokemon_id: 519,
                HP: 50,
                Attack: 55,
                Sp_Attack: 36,
                Deff: 50,
                Sp_Deff: 30,
                Speed: 43
            },
            {
                pokemon_id: 520,
                HP: 62,
                Attack: 77,
                Sp_Attack: 50,
                Deff: 62,
                Sp_Deff: 42,
                Speed: 65
            },
            {
                pokemon_id: 521,
                HP: 80,
                Attack: 115,
                Sp_Attack: 65,
                Deff: 80,
                Sp_Deff: 72,
                Speed: 93
            },
            {
                pokemon_id: 522,
                HP: 45,
                Attack: 60,
                Sp_Attack: 50,
                Deff: 32,
                Sp_Deff: 32,
                Speed: 76
            },
            {
                pokemon_id: 523,
                HP: 75,
                Attack: 100,
                Sp_Attack: 80,
                Deff: 63,
                Sp_Deff: 63,
                Speed: 116
            },
            {
                pokemon_id: 524,
                HP: 55,
                Attack: 75,
                Sp_Attack: 25,
                Deff: 85,
                Sp_Deff: 25,
                Speed: 15
            },
            {
                pokemon_id: 525,
                HP: 70,
                Attack: 105,
                Sp_Attack: 50,
                Deff: 105,
                Sp_Deff: 40,
                Speed: 20
            },
            {
                pokemon_id: 526,
                HP: 85,
                Attack: 135,
                Sp_Attack: 60,
                Deff: 130,
                Sp_Deff: 80,
                Speed: 25
            },
            {
                pokemon_id: 527,
                HP: 65,
                Attack: 45,
                Sp_Attack: 55,
                Deff: 43,
                Sp_Deff: 48,
                Speed: 72
            },
            {
                pokemon_id: 528,
                HP: 67,
                Attack: 57,
                Sp_Attack: 103,
                Deff: 55,
                Sp_Deff: 80,
                Speed: 114
            },
            {
                pokemon_id: 529,
                HP: 50,
                Attack: 65,
                Sp_Attack: 40,
                Deff: 50,
                Sp_Deff: 50,
                Speed: 40
            },
            {
                pokemon_id: 530,
                HP: 75,
                Attack: 100,
                Sp_Attack: 65,
                Deff: 80,
                Sp_Deff: 65,
                Speed: 90
            },
            {
                pokemon_id: 531,
                HP: 103,
                Attack: 60,
                Sp_Attack: 60,
                Deff: 86,
                Sp_Deff: 86,
                Speed: 50
            },
            {
                pokemon_id: 532,
                HP: 75,
                Attack: 80,
                Sp_Attack: 40,
                Deff: 55,
                Sp_Deff: 35,
                Speed: 35
            },
            {
                pokemon_id: 533,
                HP: 85,
                Attack: 105,
                Sp_Attack: 65,
                Deff: 85,
                Sp_Deff: 45,
                Speed: 40
            },
            {
                pokemon_id: 534,
                HP: 105,
                Attack: 140,
                Sp_Attack: 65,
                Deff: 95,
                Sp_Deff: 55,
                Speed: 45
            },
            {
                pokemon_id: 535,
                HP: 50,
                Attack: 50,
                Sp_Attack: 50,
                Deff: 40,
                Sp_Deff: 40,
                Speed: 64
            },
            {
                pokemon_id: 536,
                HP: 75,
                Attack: 65,
                Sp_Attack: 65,
                Deff: 55,
                Sp_Deff: 55,
                Speed: 69
            },
            {
                pokemon_id: 537,
                HP: 105,
                Attack: 85,
                Sp_Attack: 85,
                Deff: 75,
                Sp_Deff: 75,
                Speed: 74
            },
            {
                pokemon_id: 538,
                HP: 120,
                Attack: 100,
                Sp_Attack: 55,
                Deff: 85,
                Sp_Deff: 50,
                Speed: 45
            },
            {
                pokemon_id: 539,
                HP: 65,
                Attack: 125,
                Sp_Attack: 30,
                Deff: 85,
                Sp_Deff: 50,
                Speed: 80
            },
            {
                pokemon_id: 540,
                HP: 45,
                Attack: 40,
                Sp_Attack: 40,
                Deff: 60,
                Sp_Deff: 40,
                Speed: 9
            },
            {
                pokemon_id: 541,
                HP: 55,
                Attack: 50,
                Sp_Attack: 50,
                Deff: 90,
                Sp_Deff: 80,
                Speed: 42
            },
            {
                pokemon_id: 542,
                HP: 75,
                Attack: 103,
                Sp_Attack: 70,
                Deff: 80,
                Sp_Deff: 70,
                Speed: 92
            },
            {
                pokemon_id: 543,
                HP: 30,
                Attack: 45,
                Sp_Attack: 30,
                Deff: 59,
                Sp_Deff: 39,
                Speed: 57
            },
            {
                pokemon_id: 544,
                HP: 40,
                Attack: 55,
                Sp_Attack: 40,
                Deff: 99,
                Sp_Deff: 79,
                Speed: 47
            },
            {
                pokemon_id: 545,
                HP: 60,
                Attack: 100,
                Sp_Attack: 55,
                Deff: 89,
                Sp_Deff: 69,
                Speed: 112
            },
            {
                pokemon_id: 546,
                HP: 50,
                Attack: 27,
                Sp_Attack: 55,
                Deff: 60,
                Sp_Deff: 65,
                Speed: 81
            },
            {
                pokemon_id: 547,
                HP: 60,
                Attack: 67,
                Sp_Attack: 75,
                Deff: 85,
                Sp_Deff: 105,
                Speed: 114
            },
            {
                pokemon_id: 548,
                HP: 45,
                Attack: 35,
                Sp_Attack: 50,
                Deff: 50,
                Sp_Deff: 50,
                Speed: 50
            },
            {
                pokemon_id: 549,
                HP: 70,
                Attack: 60,
                Sp_Attack: 110,
                Deff: 75,
                Sp_Deff: 75,
                Speed: 90
            },
            {
                pokemon_id: 550,
                HP: 70,
                Attack: 92,
                Sp_Attack: 65,
                Deff: 65,
                Sp_Deff: 55,
                Speed: 98
            },
            {
                pokemon_id: 551,
                HP: 58,
                Attack: 72,
                Sp_Attack: 40,
                Deff: 35,
                Sp_Deff: 35,
                Speed: 86
            },
            {
                pokemon_id: 552,
                HP: 69,
                Attack: 92,
                Sp_Attack: 50,
                Deff: 50,
                Sp_Deff: 48,
                Speed: 98
            },
            {
                pokemon_id: 553,
                HP: 92,
                Attack: 124,
                Sp_Attack: 57,
                Deff: 80,
                Sp_Deff: 70,
                Speed: 105
            },
            {
                pokemon_id: 554,
                HP: 70,
                Attack: 97,
                Sp_Attack: 60,
                Deff: 66,
                Sp_Deff: 64,
                Speed: 97
            },
            {
                pokemon_id: 555,
                HP: 95,
                Attack: 117,
                Sp_Attack: 105,
                Deff: 80,
                Sp_Deff: 80,
                Speed: 93
            },
            {
                pokemon_id: 556,
                HP: 75,
                Attack: 103,
                Sp_Attack: 103,
                Deff: 67,
                Sp_Deff: 67,
                Speed: 46
            },
            {
                pokemon_id: 557,
                HP: 50,
                Attack: 65,
                Sp_Attack: 35,
                Deff: 85,
                Sp_Deff: 35,
                Speed: 55
            },
            {
                pokemon_id: 558,
                HP: 70,
                Attack: 125,
                Sp_Attack: 75,
                Deff: 105,
                Sp_Deff: 75,
                Speed: 45
            },
            {
                pokemon_id: 559,
                HP: 50,
                Attack: 75,
                Sp_Attack: 45,
                Deff: 70,
                Sp_Deff: 50,
                Speed: 48
            },
            {
                pokemon_id: 560,
                HP: 65,
                Attack: 95,
                Sp_Attack: 65,
                Deff: 115,
                Sp_Deff: 105,
                Speed: 58
            },
            {
                pokemon_id: 561,
                HP: 72,
                Attack: 58,
                Sp_Attack: 103,
                Deff: 80,
                Sp_Deff: 80,
                Speed: 97
            },
            {
                pokemon_id: 562,
                HP: 38,
                Attack: 30,
                Sp_Attack: 55,
                Deff: 85,
                Sp_Deff: 95,
                Speed: 30
            },
            {
                pokemon_id: 563,
                HP: 58,
                Attack: 50,
                Sp_Attack: 95,
                Deff: 145,
                Sp_Deff: 105,
                Speed: 30
            },
            {
                pokemon_id: 564,
                HP: 54,
                Attack: 78,
                Sp_Attack: 74,
                Deff: 103,
                Sp_Deff: 83,
                Speed: 20
            },
            {
                pokemon_id: 565,
                HP: 74,
                Attack: 108,
                Sp_Attack: 112,
                Deff: 133,
                Sp_Deff: 113,
                Speed: 32
            },
            {
                pokemon_id: 566,
                HP: 75,
                Attack: 123,
                Sp_Attack: 70,
                Deff: 67,
                Sp_Deff: 55,
                Speed: 98
            },
            {
                pokemon_id: 567,
                HP: 100,
                Attack: 135,
                Sp_Attack: 110,
                Deff: 75,
                Sp_Deff: 70,
                Speed: 80
            },
            {
                pokemon_id: 568,
                HP: 50,
                Attack: 73,
                Sp_Attack: 40,
                Deff: 62,
                Sp_Deff: 62,
                Speed: 65
            },
            {
                pokemon_id: 569,
                HP: 80,
                Attack: 98,
                Sp_Attack: 40,
                Deff: 120,
                Sp_Deff: 80,
                Speed: 82
            },
            {
                pokemon_id: 570,
                HP: 40,
                Attack: 65,
                Sp_Attack: 60,
                Deff: 40,
                Sp_Deff: 40,
                Speed: 70
            },
            {
                pokemon_id: 571,
                HP: 85,
                Attack: 105,
                Sp_Attack: 80,
                Deff: 60,
                Sp_Deff: 60,
                Speed: 105
            },
            {
                pokemon_id: 572,
                HP: 55,
                Attack: 50,
                Sp_Attack: 40,
                Deff: 40,
                Sp_Deff: 40,
                Speed: 85
            },
            {
                pokemon_id: 573,
                HP: 75,
                Attack: 95,
                Sp_Attack: 70,
                Deff: 70,
                Sp_Deff: 65,
                Speed: 116
            },
            {
                pokemon_id: 574,
                HP: 43,
                Attack: 40,
                Sp_Attack: 74,
                Deff: 50,
                Sp_Deff: 60,
                Speed: 45
            },
            {
                pokemon_id: 575,
                HP: 58,
                Attack: 55,
                Sp_Attack: 99,
                Deff: 65,
                Sp_Deff: 85,
                Speed: 58
            },
            {
                pokemon_id: 576,
                HP: 83,
                Attack: 80,
                Sp_Attack: 135,
                Deff: 85,
                Sp_Deff: 105,
                Speed: 72
            },
            {
                pokemon_id: 577,
                HP: 45,
                Attack: 30,
                Sp_Attack: 55,
                Deff: 40,
                Sp_Deff: 40,
                Speed: 30
            },
            {
                pokemon_id: 578,
                HP: 60,
                Attack: 45,
                Sp_Attack: 85,
                Deff: 55,
                Sp_Deff: 65,
                Speed: 40
            },
            {
                pokemon_id: 579,
                HP: 80,
                Attack: 75,
                Sp_Attack: 125,
                Deff: 95,
                Sp_Deff: 115,
                Speed: 30
            },
            {
                pokemon_id: 580,
                HP: 62,
                Attack: 44,
                Sp_Attack: 63,
                Deff: 55,
                Sp_Deff: 45,
                Speed: 76
            },
            {
                pokemon_id: 581,
                HP: 84,
                Attack: 86,
                Sp_Attack: 104,
                Deff: 69,
                Sp_Deff: 69,
                Speed: 98
            },
            {
                pokemon_id: 582,
                HP: 36,
                Attack: 50,
                Sp_Attack: 65,
                Deff: 30,
                Sp_Deff: 45,
                Speed: 44
            },
            {
                pokemon_id: 583,
                HP: 51,
                Attack: 65,
                Sp_Attack: 80,
                Deff: 48,
                Sp_Deff: 60,
                Speed: 59
            },
            {
                pokemon_id: 584,
                HP: 71,
                Attack: 95,
                Sp_Attack: 110,
                Deff: 85,
                Sp_Deff: 95,
                Speed: 79
            },
            {
                pokemon_id: 585,
                HP: 60,
                Attack: 60,
                Sp_Attack: 40,
                Deff: 50,
                Sp_Deff: 50,
                Speed: 75
            },
            {
                pokemon_id: 586,
                HP: 80,
                Attack: 100,
                Sp_Attack: 60,
                Deff: 70,
                Sp_Deff: 70,
                Speed: 95
            },
            {
                pokemon_id: 587,
                HP: 75,
                Attack: 55,
                Sp_Attack: 95,
                Deff: 60,
                Sp_Deff: 60,
                Speed: 103
            },
            {
                pokemon_id: 588,
                HP: 50,
                Attack: 40,
                Sp_Attack: 40,
                Deff: 85,
                Sp_Deff: 45,
                Speed: 60
            },
            {
                pokemon_id: 589,
                HP: 70,
                Attack: 135,
                Sp_Attack: 60,
                Deff: 105,
                Sp_Deff: 105,
                Speed: 20
            },
            {
                pokemon_id: 590,
                HP: 69,
                Attack: 55,
                Sp_Attack: 55,
                Deff: 45,
                Sp_Deff: 55,
                Speed: 15
            },
            {
                pokemon_id: 591,
                HP: 114,
                Attack: 85,
                Sp_Attack: 123,
                Deff: 83,
                Sp_Deff: 83,
                Speed: 33
            },
            {
                pokemon_id: 592,
                HP: 58,
                Attack: 40,
                Sp_Attack: 40,
                Deff: 45,
                Sp_Deff: 55,
                Speed: 85
            },
            {
                pokemon_id: 593,
                HP: 100,
                Attack: 60,
                Sp_Attack: 85,
                Deff: 70,
                Sp_Deff: 80,
                Speed: 45
            },
            {
                pokemon_id: 594,
                HP: 165,
                Attack: 75,
                Sp_Attack: 85,
                Deff: 80,
                Sp_Deff: 80,
                Speed: 30
            },
            {
                pokemon_id: 595,
                HP: 50,
                Attack: 47,
                Sp_Attack: 57,
                Deff: 50,
                Sp_Deff: 50,
                Speed: 45
            },
            {
                pokemon_id: 596,
                HP: 70,
                Attack: 77,
                Sp_Attack: 97,
                Deff: 60,
                Sp_Deff: 60,
                Speed: 108
            },
            {
                pokemon_id: 597,
                HP: 44,
                Attack: 50,
                Sp_Attack: 50,
                Deff: 91,
                Sp_Deff: 86,
                Speed: 10
            },
            {
                pokemon_id: 598,
                HP: 74,
                Attack: 94,
                Sp_Attack: 94,
                Deff: 131,
                Sp_Deff: 116,
                Speed: 20
            },
            {
                pokemon_id: 599,
                HP: 30,
                Attack: 52,
                Sp_Attack: 40,
                Deff: 70,
                Sp_Deff: 60,
                Speed: 42
            },
            {
                pokemon_id: 600,
                HP: 60,
                Attack: 80,
                Sp_Attack: 50,
                Deff: 100,
                Sp_Deff: 70,
                Speed: 50
            },
            {
                pokemon_id: 601,
                HP: 80,
                Attack: 135,
                Sp_Attack: 60,
                Deff: 130,
                Sp_Deff: 90,
                Speed: 70
            },
            {
                pokemon_id: 602,
                HP: 48,
                Attack: 70,
                Sp_Attack: 80,
                Deff: 43,
                Sp_Deff: 43,
                Speed: 45
            },
            {
                pokemon_id: 603,
                HP: 62,
                Attack: 85,
                Sp_Attack: 105,
                Deff: 60,
                Sp_Deff: 60,
                Speed: 74
            },
            {
                pokemon_id: 604,
                HP: 80,
                Attack: 110,
                Sp_Attack: 135,
                Deff: 75,
                Sp_Deff: 75,
                Speed: 52
            },
            {
                pokemon_id: 605,
                HP: 55,
                Attack: 55,
                Sp_Attack: 85,
                Deff: 55,
                Sp_Deff: 85,
                Speed: 30
            },
            {
                pokemon_id: 606,
                HP: 75,
                Attack: 75,
                Sp_Attack: 125,
                Deff: 75,
                Sp_Deff: 95,
                Speed: 40
            },
            {
                pokemon_id: 607,
                HP: 50,
                Attack: 73,
                Sp_Attack: 83,
                Deff: 55,
                Sp_Deff: 55,
                Speed: 40
            },
            {
                pokemon_id: 608,
                HP: 60,
                Attack: 90,
                Sp_Attack: 125,
                Deff: 85,
                Sp_Deff: 85,
                Speed: 80
            },
            {
                pokemon_id: 609,
                HP: 60,
                Attack: 105,
                Sp_Attack: 140,
                Deff: 60,
                Sp_Deff: 75,
                Speed: 80
            },
            {
                pokemon_id: 610,
                HP: 46,
                Attack: 65,
                Sp_Attack: 30,
                Deff: 50,
                Sp_Deff: 50,
                Speed: 40
            },
            {
                pokemon_id: 611,
                HP: 60,
                Attack: 105,
                Sp_Attack: 50,
                Deff: 70,
                Sp_Deff: 60,
                Speed: 77
            },
            {
                pokemon_id: 612,
                HP: 76,
                Attack: 147,
                Sp_Attack: 120,
                Deff: 90,
                Sp_Deff: 70,
                Speed: 97
            },
            {
                pokemon_id: 613,
                HP: 55,
                Attack: 70,
                Sp_Attack: 60,
                Deff: 40,
                Sp_Deff: 45,
                Speed: 40
            },
            {
                pokemon_id: 614,
                HP: 95,
                Attack: 110,
                Sp_Attack: 70,
                Deff: 80,
                Sp_Deff: 80,
                Speed: 50
            },
            {
                pokemon_id: 615,
                HP: 80,
                Attack: 80,
                Sp_Attack: 100,
                Deff: 70,
                Sp_Deff: 125,
                Speed: 135
            },
            {
                pokemon_id: 616,
                HP: 50,
                Attack: 63,
                Sp_Attack: 43,
                Deff: 62,
                Sp_Deff: 49,
                Speed: 47
            },
            {
                pokemon_id: 617,
                HP: 75,
                Attack: 95,
                Sp_Attack: 95,
                Deff: 75,
                Sp_Deff: 75,
                Speed: 100
            },
            {
                pokemon_id: 618,
                HP: 109,
                Attack: 81,
                Sp_Attack: 74,
                Deff: 99,
                Sp_Deff: 84,
                Speed: 32
            },
            {
                pokemon_id: 619,
                HP: 50,
                Attack: 65,
                Sp_Attack: 50,
                Deff: 45,
                Sp_Deff: 50,
                Speed: 64
            },
            {
                pokemon_id: 620,
                HP: 75,
                Attack: 125,
                Sp_Attack: 105,
                Deff: 65,
                Sp_Deff: 65,
                Speed: 95
            },
            {
                pokemon_id: 621,
                HP: 77,
                Attack: 120,
                Sp_Attack: 60,
                Deff: 90,
                Sp_Deff: 60,
                Speed: 48
            },
            {
                pokemon_id: 622,
                HP: 59,
                Attack: 74,
                Sp_Attack: 50,
                Deff: 50,
                Sp_Deff: 50,
                Speed: 35
            },
            {
                pokemon_id: 623,
                HP: 89,
                Attack: 124,
                Sp_Attack: 85,
                Deff: 80,
                Sp_Deff: 80,
                Speed: 55
            },
            {
                pokemon_id: 624,
                HP: 47,
                Attack: 85,
                Sp_Attack: 24,
                Deff: 50,
                Sp_Deff: 50,
                Speed: 57
            },
            {
                pokemon_id: 625,
                HP: 63,
                Attack: 124,
                Sp_Attack: 54,
                Deff: 91,
                Sp_Deff: 50,
                Speed: 86
            },
            {
                pokemon_id: 626,
                HP: 95,
                Attack: 110,
                Sp_Attack: 40,
                Deff: 105,
                Sp_Deff: 105,
                Speed: 75
            },
            {
                pokemon_id: 627,
                HP: 70,
                Attack: 83,
                Sp_Attack: 37,
                Deff: 50,
                Sp_Deff: 50,
                Speed: 60
            },
            {
                pokemon_id: 628,
                HP: 100,
                Attack: 123,
                Sp_Attack: 57,
                Deff: 75,
                Sp_Deff: 75,
                Speed: 80
            },
            {
                pokemon_id: 629,
                HP: 70,
                Attack: 55,
                Sp_Attack: 55,
                Deff: 75,
                Sp_Deff: 65,
                Speed: 60
            },
            {
                pokemon_id: 630,
                HP: 110,
                Attack: 65,
                Sp_Attack: 85,
                Deff: 130,
                Sp_Deff: 95,
                Speed: 80
            },
            {
                pokemon_id: 631,
                HP: 85,
                Attack: 97,
                Sp_Attack: 105,
                Deff: 66,
                Sp_Deff: 66,
                Speed: 65
            },
            {
                pokemon_id: 632,
                HP: 58,
                Attack: 109,
                Sp_Attack: 48,
                Deff: 112,
                Sp_Deff: 48,
                Speed: 109
            },
            {
                pokemon_id: 633,
                HP: 55,
                Attack: 65,
                Sp_Attack: 30,
                Deff: 70,
                Sp_Deff: 50,
                Speed: 42
            },
            {
                pokemon_id: 634,
                HP: 72,
                Attack: 85,
                Sp_Attack: 60,
                Deff: 70,
                Sp_Deff: 50,
                Speed: 58
            },
            {
                pokemon_id: 635,
                HP: 92,
                Attack: 105,
                Sp_Attack: 125,
                Deff: 90,
                Sp_Deff: 90,
                Speed: 98
            },
            {
                pokemon_id: 636,
                HP: 55,
                Attack: 85,
                Sp_Attack: 50,
                Deff: 60,
                Sp_Deff: 50,
                Speed: 89
            },
            {
                pokemon_id: 637,
                HP: 85,
                Attack: 105,
                Sp_Attack: 135,
                Deff: 79,
                Sp_Deff: 105,
                Speed: 100
            },
            {
                pokemon_id: 638,
                HP: 91,
                Attack: 90,
                Sp_Attack: 80,
                Deff: 129,
                Sp_Deff: 85,
                Speed: 108
            },
            {
                pokemon_id: 639,
                HP: 91,
                Attack: 129,
                Sp_Attack: 72,
                Deff: 90,
                Sp_Deff: 72,
                Speed: 108
            },
            {
                pokemon_id: 640,
                HP: 91,
                Attack: 72,
                Sp_Attack: 129,
                Deff: 90,
                Sp_Deff: 90,
                Speed: 108
            },
            {
                pokemon_id: 641,
                HP: 79,
                Attack: 115,
                Sp_Attack: 125,
                Deff: 69,
                Sp_Deff: 80,
                Speed: 111
            },
            {
                pokemon_id: 642,
                HP: 79,
                Attack: 105,
                Sp_Attack: 145,
                Deff: 71,
                Sp_Deff: 80,
                Speed: 101
            },
            {
                pokemon_id: 643,
                HP: 100,
                Attack: 150,
                Sp_Attack: 120,
                Deff: 120,
                Sp_Deff: 100,
                Speed: 90
            },
            {
                pokemon_id: 644,
                HP: 100,
                Attack: 120,
                Sp_Attack: 150,
                Deff: 100,
                Sp_Deff: 120,
                Speed: 90
            },
            {
                pokemon_id: 645,
                HP: 89,
                Attack: 125,
                Sp_Attack: 115,
                Deff: 90,
                Sp_Deff: 80,
                Speed: 101
            },
            {
                pokemon_id: 646,
                HP: 125,
                Attack: 130,
                Sp_Attack: 130,
                Deff: 90,
                Sp_Deff: 90,
                Speed: 95
            },
            {
                pokemon_id: 647,
                HP: 91,
                Attack: 72,
                Sp_Attack: 129,
                Deff: 90,
                Sp_Deff: 90,
                Speed: 108
            },
            {
                pokemon_id: 648,
                HP: 100,
                Attack: 77,
                Sp_Attack: 128,
                Deff: 77,
                Sp_Deff: 128,
                Speed: 90
            },
            {
                pokemon_id: 649,
                HP: 71,
                Attack: 120,
                Sp_Attack: 120,
                Deff: 95,
                Sp_Deff: 95,
                Speed: 99
            }
        ]

        for (let stat of stats) {
            await pool.query(`
                INSERT INTO stats (pokemon_id, HP, Attack, Sp_Attack, Deff, Sp_Deff, Speed) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
                [stat.pokemon_id, stat.HP, stat.Attack, stat.Sp_Attack, stat.Deff, stat.Sp_Deff, stat.Speed])
        }

        console.log("Berhasil Membuat Stats Pokemon Gen 5")
    }
    catch (err) {
        console.log("Gagal Membuat stats Pokemon, Error: ", err.message)
    }
}

module.exports = statsGen5Seeder