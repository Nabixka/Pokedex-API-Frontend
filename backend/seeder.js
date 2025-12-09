const typeSeeder = require("./seeder/typeSeeder")
const genSeeder = require("./seeder/genSeeder")
const regionSeeder = require("./seeder/regionSeeder")
const abilitySeeder = require("./seeder/abilitySeeder")
const pokemonGen1Seeder = require("./seeder/pokemon/pokemonGen1Seeder")
const pokemonGen2Seeder = require("./seeder/pokemon/pokemonGen2Seeder")
const pokemonGen3Seeder = require("./seeder/pokemon/pokemonGen3Seeder")
const pokemonGen4Seeder = require("./seeder/pokemon/pokemonGen4Seeder")
const pokemonGen5Seeder = require("./seeder/pokemon/pokemonGen5Seeder")
const gameSeeder = require("./seeder/gameSeeder")
const statsSeeder = require("./seeder/statsSeeder")

async function seeder(){
    try{
        console.log("Sedang Menambahkan Data")
        await genSeeder()
        await regionSeeder()
        await typeSeeder()
        await abilitySeeder()
        await pokemonGen1Seeder()
        await pokemonGen2Seeder()
        await pokemonGen3Seeder()
        await pokemonGen4Seeder()
        await pokemonGen5Seeder()
        await gameSeeder()
        await statsSeeder()

        console.log("Seeder Selesai")
    }
    catch(err){
        console.log("Gagal Menambahkan, Error:", err.message)
    }
    finally{
        process.exit(0)
    }
}

seeder()