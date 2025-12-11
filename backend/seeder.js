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
const statsGen1Seeder = require("./seeder/stats/statsGen1Seeder")
const statsGen2Seeder = require("./seeder/stats/statsGen2Seeder")
const statsGen3Seeder = require("./seeder/stats/statsGen3Seeder")
const statsGen4Seeder = require("./seeder/stats/statsGen4Seeder")
const statsGen5Seeder = require("./seeder/stats/statsGen5Seeder")
const evolutionGen1Seeder = require("./seeder/evolution/evolutionGen1Seeder")


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
        await statsGen1Seeder()
        await statsGen2Seeder()
        await statsGen3Seeder()
        await statsGen4Seeder()
        await statsGen5Seeder()
        await evolutionGen1Seeder()
    

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