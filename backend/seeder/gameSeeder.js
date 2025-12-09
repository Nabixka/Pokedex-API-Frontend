const pool = require("../db")

async function gameSeeder(){
    try{
        const games = [
            {
                name: "Pokemon Red",
                image: "http://localhost:3000/uploads/game/pokemon_red.jpg",
                gen_id: 1,
                console: "Game Boy Color",
                developer: "Game Freak"
            },
            {
                name: "Pokemon Blue",
                image: "http://localhost:3000/uploads/game/pokemon_blue.jpg",
                gen_id: 1,
                console: "Game Boy Color",
                developer: "Game Freak"
            },
            {
                name: "Pokemon Yellow",
                image: "http://localhost:3000/uploads/game/pokemon_yellow.jpg",
                gen_id: 1,
                console: "Game Boy Color",
                developer: "Game Freak"
            },
            {
                name: "Pokemon Gold",
                image: "http://localhost:3000/uploads/game/pokemon_gold.jpg",
                gen_id: 2,
                console: "Game Boy Color",
                developer: "Game Freak"
            },
            {
                name: "Pokemon Silver",
                image: "http://localhost:3000/uploads/game/pokemon_silver.jpg",
                gen_id: 2,
                console: "Game Boy Color",
                developer: "Game Freak"
            },
            {
                name: "Pokemon Crystal",
                image: "http://localhost:3000/uploads/game/pokemon_crystal.jpg",
                gen_id: 2,
                console: "Game Boy Color",
                developer: "Game Freak"
            },
            {
                name: "Pokemon Ruby",
                image: "http://localhost:3000/uploads/game/pokemon_ruby.jpg",
                gen_id: 3,
                console: "Game Boy Advance",
                developer: "Game Freak"
            },
            {
                name: "Pokemon Sapphire",
                image: "http://localhost:3000/uploads/game/pokemon_sapphire.jpg",
                gen_id: 3,
                console: "Game Boy Advance",
                developer: "Game Freak"
            },
            {
                name: "Pokemon Emerald",
                image: "http://localhost:3000/uploads/game/pokemon_emerald.jpg",
                gen_id: 3,
                console: "Game Boy Advance",
                developer: "Game Freak"
            }
        ]

        for(let game of games){
            await pool.query(`INSERT INTO games (name, image, gen_id, console, developer) VALUES ($1, $2, $3, $4, $5)`, 
                [game.name, game.image, game.gen_id, game.console, game.developer])
        }
        console.log("Berhasil Membuat Game")
    }
    catch(err){
        console.log("Gagal Membuat Game")
    }
}

module.exports = gameSeeder