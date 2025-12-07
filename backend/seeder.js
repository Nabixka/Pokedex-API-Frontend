const typeSeeder = require("./seeder/typeSeeder")
const genSeeder = require("./seeder/genSeeder")
const regionSeeder = require("./seeder/regionSeeder")
const abilitySeeder = require("./seeder/abilitySeeder")

async function seeder(){
    try{
        console.log("Sedang Menambahkan Data")
        await typeSeeder()
        await genSeeder()
        await regionSeeder()
        await abilitySeeder()

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