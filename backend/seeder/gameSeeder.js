const pool = require("../db")

async function gameSeeder(){
    try{
        const games = [
            {
                name: "Pokemon Red",
                image: "http://localhost:3000/uploads/game/image/pokemon_red.jpg",
                gen_id: 1,
                console: "Game Boy Color",
                format: "GB",
                file: "http://localhost:3000/uploads/game/download/pokemon_red.gb",
                developer: "Game Freak"
            },
            {
                name: "Pokemon Blue",
                image: "http://localhost:3000/uploads/game/image/pokemon_blue.jpg",
                gen_id: 1,
                console: "Game Boy Color",
                format: "GB",
                file: "http://localhost:3000/uploads/game/download/pokemon_blue.gb",
                developer: "Game Freak"
            },
            {
                name: "Pokemon Yellow",
                image: "http://localhost:3000/uploads/game/image/pokemon_yellow.jpg",
                gen_id: 1,
                console: "Game Boy Color",
                format: "GB",
                file: "http://localhost:3000/uploads/game/download/pokemon_yellow.gb",
                developer: "Game Freak"
            },
            {
                name: "Pokemon Gold",
                image: "http://localhost:3000/uploads/game/image/pokemon_gold.jpg",
                gen_id: 2,
                console: "Game Boy Color",
                format: 'GBC',
                file: "http://localhost:3000/uploads/game/download/pokemon_gold.gbc",
                developer: "Game Freak"
            },
            {
                name: "Pokemon Silver",
                image: "http://localhost:3000/uploads/game/image/pokemon_silver.jpg",
                gen_id: 2,
                console: "Game Boy Color",
                format: "GBC",
                file: "http://localhost:3000/uploads/game/download/pokemon_silver.gbc",
                developer: "Game Freak"
            },
            {
                name: "Pokemon Crystal",
                image: "http://localhost:3000/uploads/game/image/pokemon_crystal.jpg",
                gen_id: 2,
                console: "Game Boy Color",
                format: "GBC",
                file: "http://localhost:3000/uploads/game/download/pokemon_crystal.gbc",
                developer: "Game Freak"
            },
            {
                name: "Pokemon Ruby",
                image: "http://localhost:3000/uploads/game/image/pokemon_ruby.jpg",
                gen_id: 3,
                console: "Game Boy Advance",
                format: "GBA",
                file: "http://localhost:3000/uploads/game/download/pokemon_ruby.gba",
                developer: "Game Freak"
            },
            {
                name: "Pokemon Sapphire",
                image: "http://localhost:3000/uploads/game/image/pokemon_sapphire.jpg",
                gen_id: 3,
                console: "Game Boy Advance",
                format: "GBA",
                file: "http://localhost:3000/uploads/game/download/pokemon_sapphire.gba",
                developer: "Game Freak"
            },
            {
                name: "Pokemon Emerald",
                image: "http://localhost:3000/uploads/game/image/pokemon_emerald.jpg",
                gen_id: 3,
                console: "Game Boy Advance",
                format: "GBA",
                file: "http://localhost:3000/uploads/game/download/pokemon_emerald.gba",
                developer: "Game Freak"
            }
        ]

        for(let game of games){
            await pool.query(`INSERT INTO games (name, image, gen_id, console, developer, format, file) VALUES ($1, $2, $3, $4, $5, $6::format, $7)`, 
                [game.name, game.image, game.gen_id, game.console, game.developer, game.format, game.file])
        }
        console.log("Berhasil Membuat Game")
    }
    catch(err){
        console.log("Gagal Membuat Game, Error: ", err.message)
    }
}

module.exports = gameSeeder