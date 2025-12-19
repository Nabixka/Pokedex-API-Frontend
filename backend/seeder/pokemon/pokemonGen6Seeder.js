const pool = require("../../db")

async function pokemonGen6Seeder() {
    try {
        const pokemons = [
            { name: "Chespin", description: "A spiny Pokémon that can repel attacks with its tough shell.", height: 0.4, weight: 9.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/chespin.png", pokedex_id: 650, type1: 3, type2: null, generation: 6 },
            { name: "Quilladin", description: "The quills on its head are usually soft but become sharp when flexed.", height: 0.7, weight: 29.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/quilladin.png", pokedex_id: 651, type1: 3, type2: null, generation: 6 },
            { name: "Chesnaught", description: "It protects its allies with its sturdy shell.", height: 1.6, weight: 90.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/chesnaught.png", pokedex_id: 652, type1: 3, type2: 6, generation: 6 },

            { name: "Fennekin", description: "It releases hot air hotter than 390°F from its ears.", height: 0.4, weight: 9.4, region_id: 6, image: "http://localhost:3000/uploads/pokemon/fennekin.png", pokedex_id: 653, type1: 1, type2: null, generation: 6 },
            { name: "Braixen", description: "It ignites the twig from its tail to create fire.", height: 1.0, weight: 14.5, region_id: 6, image: "http://localhost:3000/uploads/pokemon/braixen.png", pokedex_id: 654, type1: 1, type2: null, generation: 6 },
            { name: "Delphox", description: "It peers into the future using flames.", height: 1.5, weight: 39.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/delphox.png", pokedex_id: 655, type1: 1, type2: 10, generation: 6 },

            { name: "Froakie", description: "Its bubbles reduce damage it would otherwise take.", height: 0.3, weight: 7.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/froakie.png", pokedex_id: 656, type1: 2, type2: null, generation: 6 },
            { name: "Frogadier", description: "It throws bubble-covered pebbles with precision.", height: 0.6, weight: 10.9, region_id: 6, image: "http://localhost:3000/uploads/pokemon/frogadier.png", pokedex_id: 657, type1: 2, type2: null, generation: 6 },
            { name: "Greninja", description: "It creates throwing stars from compressed water.", height: 1.5, weight: 40.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/greninja.png", pokedex_id: 658, type1: 2, type2: 15, generation: 6 },

            { name: "Bunnelby", description: "It digs holes with its ears.", height: 0.4, weight: 5.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/bunnelby.png", pokedex_id: 659, type1: 18, type2: null, generation: 6 },
            { name: "Diggersby", description: "Its ears are powerful enough to lift boulders.", height: 1.0, weight: 42.4, region_id: 6, image: "http://localhost:3000/uploads/pokemon/diggersby.png", pokedex_id: 660, type1: 18, type2: 8, generation: 6 },

            { name: "Fletchling", description: "It calmly observes its surroundings.", height: 0.3, weight: 1.7, region_id: 6, image: "http://localhost:3000/uploads/pokemon/fletchling.png", pokedex_id: 661, type1: 18, type2: 9, generation: 6 },
            { name: "Fletchinder", description: "It scatters embers when battling.", height: 0.7, weight: 16.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/fletchinder.png", pokedex_id: 662, type1: 1, type2: 9, generation: 6 },
            { name: "Talonflame", description: "It attacks with blazing speed.", height: 1.2, weight: 24.5, region_id: 6, image: "http://localhost:3000/uploads/pokemon/talonflame.png", pokedex_id: 663, type1: 1, type2: 9, generation: 6 },

            { name: "Scatterbug", description: "It protects itself with powder.", height: 0.3, weight: 2.5, region_id: 6, image: "http://localhost:3000/uploads/pokemon/scatterbug.png", pokedex_id: 664, type1: 11, type2: null, generation: 6 },
            { name: "Spewpa", description: "It hides itself under fallen leaves.", height: 0.3, weight: 8.4, region_id: 6, image: "http://localhost:3000/uploads/pokemon/spewpa.png", pokedex_id: 665, type1: 11, type2: null, generation: 6 },
            { name: "Vivillon", description: "Its wings display many patterns.", height: 1.2, weight: 17.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/vivillon.png", pokedex_id: 666, type1: 11, type2: 9, generation: 6 },

            { name: "Litleo", description: "The stronger Litleo leads the pride.", height: 0.6, weight: 13.5, region_id: 6, image: "http://localhost:3000/uploads/pokemon/litleo.png", pokedex_id: 667, type1: 1, type2: 18, generation: 6 },
            { name: "Pyroar", description: "The male with the largest mane leads the pride.", height: 1.5, weight: 81.5, region_id: 6, image: "http://localhost:3000/uploads/pokemon/pyroar.png", pokedex_id: 668, type1: 1, type2: 18, generation: 6 },

            { name: "Flabébé", description: "It draws power from flowers.", height: 0.1, weight: 0.1, region_id: 6, image: "http://localhost:3000/uploads/pokemon/flabebe.png", pokedex_id: 669, type1: 17, type2: null, generation: 6 },
            { name: "Floette", description: "It flutters around gardens.", height: 0.2, weight: 0.9, region_id: 6, image: "http://localhost:3000/uploads/pokemon/floette.png", pokedex_id: 670, type1: 17, type2: null, generation: 6 },
            { name: "Florges", description: "It controls flowers with elegance.", height: 1.1, weight: 10.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/florges.png", pokedex_id: 671, type1: 17, type2: null, generation: 6 },

            { name: "Skiddo", description: "It can run for days without tiring.", height: 0.9, weight: 31.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/skiddo.png", pokedex_id: 672, type1: 3, type2: null, generation: 6 },
            { name: "Gogoat", description: "It can read its trainer's mind.", height: 1.7, weight: 91.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/gogoat.png", pokedex_id: 673, type1: 3, type2: null, generation: 6 },

            { name: "Pancham", description: "It tries to act tough.", height: 0.6, weight: 8.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/pancham.png", pokedex_id: 674, type1: 6, type2: null, generation: 6 },
            { name: "Pangoro", description: "It uses brute strength and strategy.", height: 2.1, weight: 136.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/pangoro.png", pokedex_id: 675, type1: 6, type2: 15, generation: 6 },

            { name: "Furfrou", description: "Its fur can be styled in many ways.", height: 1.2, weight: 28.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/furfrou.png", pokedex_id: 676, type1: 18, type2: null, generation: 6 },

            { name: "Espurr", description: "It struggles to control its psychic power.", height: 0.3, weight: 3.5, region_id: 6, image: "http://localhost:3000/uploads/pokemon/espurr.png", pokedex_id: 677, type1: 10, type2: null, generation: 6 },
            { name: "Meowstic", description: "It emits psychic waves.", height: 0.6, weight: 8.5, region_id: 6, image: "http://localhost:3000/uploads/pokemon/meowstic.png", pokedex_id: 678, type1: 10, type2: null, generation: 6 },

            { name: "Honedge", description: "A sword possessed by a spirit.", height: 0.8, weight: 2.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/honedge.png", pokedex_id: 679, type1: 16, type2: 13, generation: 6 },
            { name: "Doublade", description: "Two swords share a single scabbard.", height: 0.8, weight: 4.5, region_id: 6, image: "http://localhost:3000/uploads/pokemon/doublade.png", pokedex_id: 680, type1: 16, type2: 13, generation: 6 },
            { name: "Aegislash", description: "It can switch between offense and defense.", height: 1.7, weight: 53.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/aegislash.png", pokedex_id: 681, type1: 16, type2: 13, generation: 6 },

            { name: "Spritzee", description: "It emits a perfume-like scent.", height: 0.2, weight: 0.5, region_id: 6, image: "http://localhost:3000/uploads/pokemon/spritzee.png", pokedex_id: 682, type1: 17, type2: null, generation: 6 },
            { name: "Aromatisse", description: "It spreads fragrant aromas.", height: 0.8, weight: 15.5, region_id: 6, image: "http://localhost:3000/uploads/pokemon/aromatisse.png", pokedex_id: 683, type1: 17, type2: null, generation: 6 },

            { name: "Swirlix", description: "Its body is made of cotton candy.", height: 0.4, weight: 3.5, region_id: 6, image: "http://localhost:3000/uploads/pokemon/swirlix.png", pokedex_id: 684, type1: 17, type2: null, generation: 6 },
            { name: "Slurpuff", description: "It has an extremely sensitive sense of smell.", height: 0.8, weight: 5.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/slurpuff.png", pokedex_id: 685, type1: 17, type2: null, generation: 6 },

            { name: "Inkay", description: "It confuses foes by flashing lights.", height: 0.4, weight: 3.5, region_id: 6, image: "http://localhost:3000/uploads/pokemon/inkay.png", pokedex_id: 686, type1: 15, type2: 10, generation: 6 },
            { name: "Malamar", description: "It controls minds with hypnosis.", height: 1.5, weight: 47.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/malamar.png", pokedex_id: 687, type1: 15, type2: 10, generation: 6 },

            { name: "Binacle", description: "Two Binacle live together on one rock.", height: 0.5, weight: 31.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/binacle.png", pokedex_id: 688, type1: 12, type2: 2, generation: 6 },
            { name: "Barbaracle", description: "It has seven Binacle working together.", height: 1.3, weight: 96.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/barbaracle.png", pokedex_id: 689, type1: 12, type2: 2, generation: 6 },

            { name: "Skrelp", description: "It looks like rotting seaweed.", height: 0.5, weight: 7.3, region_id: 6, image: "http://localhost:3000/uploads/pokemon/skrelp.png", pokedex_id: 690, type1: 7, type2: 2, generation: 6 },
            { name: "Dragalge", description: "It uses poison to hunt prey.", height: 1.8, weight: 81.5, region_id: 6, image: "http://localhost:3000/uploads/pokemon/dragalge.png", pokedex_id: 691, type1: 7, type2: 14, generation: 6 },

            { name: "Clauncher", description: "It shoots water from its claw.", height: 0.5, weight: 8.3, region_id: 6, image: "http://localhost:3000/uploads/pokemon/clauncher.png", pokedex_id: 692, type1: 2, type2: null, generation: 6 },
            { name: "Clawitzer", description: "Its claw is a powerful cannon.", height: 1.3, weight: 35.3, region_id: 6, image: "http://localhost:3000/uploads/pokemon/clawitzer.png", pokedex_id: 693, type1: 2, type2: null, generation: 6 },

            { name: "Helioptile", description: "It generates electricity using solar power.", height: 0.5, weight: 6.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/helioptile.png", pokedex_id: 694, type1: 4, type2: 18, generation: 6 },
            { name: "Heliolisk", description: "It produces electricity by basking in sunlight.", height: 1.0, weight: 21.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/heliolisk.png", pokedex_id: 695, type1: 4, type2: 18, generation: 6 },

            { name: "Tyrunt", description: "Its jaws can shatter boulders.", height: 0.8, weight: 26.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/tyrunt.png", pokedex_id: 696, type1: 12, type2: 14, generation: 6 },
            { name: "Tyrantrum", description: "The king of ancient Pokémon.", height: 2.5, weight: 270.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/tyrantrum.png", pokedex_id: 697, type1: 12, type2: 14, generation: 6 },

            { name: "Amaura", description: "It lived in ancient snowy regions.", height: 1.3, weight: 25.2, region_id: 6, image: "http://localhost:3000/uploads/pokemon/amaura.png", pokedex_id: 698, type1: 12, type2: 5, generation: 6 },
            { name: "Aurorus", description: "It freezes the surrounding area.", height: 2.7, weight: 225.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/aurorus.png", pokedex_id: 699, type1: 12, type2: 5, generation: 6 },

            { name: "Sylveon", description: "It emits calming fairy auras.", height: 1.0, weight: 23.5, region_id: 6, image: "http://localhost:3000/uploads/pokemon/sylveon.png", pokedex_id: 700, type1: 17, type2: null, generation: 6 },

            { name: "Hawlucha", description: "It uses wrestling techniques.", height: 0.8, weight: 21.5, region_id: 6, image: "http://localhost:3000/uploads/pokemon/hawlucha.png", pokedex_id: 701, type1: 6, type2: 9, generation: 6 },

            { name: "Dedenne", description: "It communicates using electric waves.", height: 0.2, weight: 2.2, region_id: 6, image: "http://localhost:3000/uploads/pokemon/dedenne.png", pokedex_id: 702, type1: 4, type2: 17, generation: 6 },

            { name: "Carbink", description: "Born from the pressure of the earth.", height: 0.3, weight: 5.7, region_id: 6, image: "http://localhost:3000/uploads/pokemon/carbink.png", pokedex_id: 703, type1: 12, type2: 17, generation: 6 },

            { name: "Goomy", description: "The weakest Dragon Pokémon.", height: 0.3, weight: 2.8, region_id: 6, image: "http://localhost:3000/uploads/pokemon/goomy.png", pokedex_id: 704, type1: 14, type2: null, generation: 6 },
            { name: "Sliggoo", description: "It lives near water.", height: 0.8, weight: 17.5, region_id: 6, image: "http://localhost:3000/uploads/pokemon/sliggoo.png", pokedex_id: 705, type1: 14, type2: null, generation: 6 },
            { name: "Goodra", description: "The strongest Dragon Pokémon.", height: 2.0, weight: 150.5, region_id: 6, image: "http://localhost:3000/uploads/pokemon/goodra.png", pokedex_id: 706, type1: 14, type2: null, generation: 6 },

            { name: "Klefki", description: "It collects keys.", height: 0.2, weight: 3.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/klefki.png", pokedex_id: 707, type1: 16, type2: 17, generation: 6 },

            { name: "Phantump", description: "A spirit inhabiting a tree stump.", height: 0.4, weight: 7.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/phantump.png", pokedex_id: 708, type1: 13, type2: 3, generation: 6 },
            { name: "Trevenant", description: "It controls trees.", height: 1.5, weight: 71.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/trevenant.png", pokedex_id: 709, type1: 13, type2: 3, generation: 6 },

            { name: "Pumpkaboo", description: "It is born from spirits.", height: 0.4, weight: 5.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/pumpkaboo.png", pokedex_id: 710, type1: 13, type2: 3, generation: 6 },
            { name: "Gourgeist", description: "It sings eerily.", height: 0.9, weight: 12.5, region_id: 6, image: "http://localhost:3000/uploads/pokemon/gourgeist.png", pokedex_id: 711, type1: 13, type2: 3, generation: 6 },

            { name: "Bergmite", description: "It freezes its body.", height: 1.0, weight: 99.5, region_id: 6, image: "http://localhost:3000/uploads/pokemon/bergmite.png", pokedex_id: 712, type1: 5, type2: null, generation: 6 },
            { name: "Avalugg", description: "Its body is made of ice.", height: 2.0, weight: 505.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/avalugg.png", pokedex_id: 713, type1: 5, type2: null, generation: 6 },

            { name: "Noibat", description: "It uses ultrasonic waves.", height: 0.5, weight: 8.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/noibat.png", pokedex_id: 714, type1: 9, type2: 14, generation: 6 },
            { name: "Noivern", description: "It flies using sound waves.", height: 1.5, weight: 85.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/noivern.png", pokedex_id: 715, type1: 9, type2: 14, generation: 6 },

            { name: "Xerneas", description: "The Pokémon of life.", height: 3.0, weight: 215.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/xerneas.png", pokedex_id: 716, type1: 17, type2: null, generation: 6 },
            { name: "Yveltal", description: "The Pokémon of destruction.", height: 5.8, weight: 203.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/yveltal.png", pokedex_id: 717, type1: 15, type2: 9, generation: 6 },
            { name: "Zygarde", description: "It monitors the ecosystem.", height: 5.0, weight: 305.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/zygarde.png", pokedex_id: 718, type1: 14, type2: 8, generation: 6 },

            { name: "Diancie", description: "A sudden mutation of Carbink.", height: 0.7, weight: 8.8, region_id: 6, image: "http://localhost:3000/uploads/pokemon/diancie.png", pokedex_id: 719, type1: 12, type2: 17, generation: 6 },
            { name: "Hoopa", description: "It summons things through rings.", height: 0.5, weight: 9.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/hoopa.png", pokedex_id: 720, type1: 10, type2: 15, generation: 6 },
            { name: "Volcanion", description: "It uses steam explosions.", height: 1.7, weight: 195.0, region_id: 6, image: "http://localhost:3000/uploads/pokemon/volcanion.png", pokedex_id: 721, type1: 1, type2: 2, generation: 6 }
        ]


        for (let pokemon of pokemons) {
            await pool.query(`
                INSERT INTO pokemon (name, description, height, weight, region_id, image, pokedex_id, type1, type2, generation) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) ON CONFLICT (name) DO NOTHING`,
                [pokemon.name, pokemon.description, pokemon.height, pokemon.weight, pokemon.region_id, pokemon.image, pokemon.pokedex_id, pokemon.type1, pokemon.type2, pokemon.generation])
        }

        console.log("Berhasil Membuat Pokemon Gen 6")
    }
    catch (err) {
        console.log("Gagal Membuat Pokemon Gen 6, Error: ", err.message)
    }
}

module.exports = pokemonGen6Seeder