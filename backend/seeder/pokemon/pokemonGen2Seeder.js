const pool = require("../../db")

async function pokemonGen2Seeder() {
    try {
        const poke = [
            {
                name: "Chikorita",
                description: "A sweet aroma gently wafts from the leaf on its head.",
                height: 0.9,
                weight: 6.4,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/chikorita.png",
                pokedex_id: 152,
                type1: 3,
                type2: null,
                generation: 2
            },
            {
                name: "Bayleef",
                description: "The scent of spices comes from around its neck.",
                height: 1.2,
                weight: 15.8,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/bayleef.png",
                pokedex_id: 153,
                type1: 3,
                type2: null,
                generation: 2
            },
            {
                name: "Meganium",
                description: "Its breath has the power to revive dead grass and plants.",
                height: 1.8,
                weight: 100.5,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/meganium.png",
                pokedex_id: 154,
                type1: 3,
                type2: null,
                generation: 2
            },

            {
                name: "Cyndaquil",
                description: "It is timid and always curls itself up.",
                height: 0.5,
                weight: 7.9,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/cyndaquil.png",
                pokedex_id: 155,
                type1: 1,
                type2: null,
                generation: 2
            },
            {
                name: "Quilava",
                description: "It intimidates foes with intense flames.",
                height: 0.9,
                weight: 19.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/quilava.png",
                pokedex_id: 156,
                type1: 1,
                type2: null,
                generation: 2
            },
            {
                name: "Typhlosion",
                description: "It can hide behind a shimmering heat haze.",
                height: 1.7,
                weight: 79.5,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/typhlosion.png",
                pokedex_id: 157,
                type1: 1,
                type2: null,
                generation: 2
            },

            {
                name: "Totodile",
                description: "Its powerful jaws snap with a force capable of crushing anything.",
                height: 0.6,
                weight: 9.5,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/totodile.png",
                pokedex_id: 158,
                type1: 2,
                type2: null,
                generation: 2
            },
            {
                name: "Croconaw",
                description: "Once it bites down, it won’t let go until it loses its fangs.",
                height: 1.1,
                weight: 25.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/croconaw.png",
                pokedex_id: 159,
                type1: 2,
                type2: null,
                generation: 2
            },
            {
                name: "Feraligatr",
                description: "It opens its powerful jaws wide and charges in.",
                height: 2.3,
                weight: 88.8,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/feraligatr.png",
                pokedex_id: 160,
                type1: 2,
                type2: null,
                generation: 2
            },

            {
                name: "Sentret",
                description: "It stands on its tail to see far away.",
                height: 0.8,
                weight: 6.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/sentret.png",
                pokedex_id: 161,
                type1: 18,
                type2: null,
                generation: 2
            },
            {
                name: "Furret",
                description: "A very slim Pokémon that can squeeze through narrow spaces.",
                height: 1.8,
                weight: 32.5,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/furret.png",
                pokedex_id: 162,
                type1: 18,
                type2: null,
                generation: 2
            },

            {
                name: "Hoothoot",
                description: "It has an internal organ that senses the earth’s rotation.",
                height: 0.7,
                weight: 21.2,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/hoothoot.png",
                pokedex_id: 163,
                type1: 18,
                type2: 9,
                generation: 2
            },
            {
                name: "Noctowl",
                description: "Its eyes are specially adapted to see in the dark.",
                height: 1.6,
                weight: 40.8,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/noctowl.png",
                pokedex_id: 164,
                type1: 18,
                type2: 9,
                generation: 2
            },

            {
                name: "Ledyba",
                description: "It is timid and clusters together with others of its kind.",
                height: 1.0,
                weight: 10.8,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/ledyba.png",
                pokedex_id: 165,
                type1: 11,
                type2: 9,
                generation: 2
            },
            {
                name: "Ledian",
                description: "The star patterns on its back grow larger in bright light.",
                height: 1.4,
                weight: 35.6,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/ledian.png",
                pokedex_id: 166,
                type1: 11,
                type2: 9,
                generation: 2
            },

            {
                name: "Spinarak",
                description: "A web spun by it can be considered a work of art.",
                height: 0.5,
                weight: 8.5,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/spinarak.png",
                pokedex_id: 167,
                type1: 11,
                type2: 7,
                generation: 2
            },
            {
                name: "Ariados",
                description: "It spins string not only from its rear but also from its mouth.",
                height: 1.1,
                weight: 33.5,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/ariados.png",
                pokedex_id: 168,
                type1: 11,
                type2: 7,
                generation: 2
            },

            {
                name: "Crobat",
                description: "It flies quietly and strikes unexpectedly.",
                height: 1.8,
                weight: 75.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/crobat.png",
                pokedex_id: 169,
                type1: 7,
                type2: 9,
                generation: 2
            },

            {
                name: "Chinchou",
                description: "It shoots positive and negative electricity between the tips of its antennae.",
                height: 0.5,
                weight: 12.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/chinchou.png",
                pokedex_id: 170,
                type1: 2,
                type2: 4,
                generation: 2
            },
            {
                name: "Lanturn",
                description: "The light it emits is so bright that it can illuminate the sea’s surface.",
                height: 1.2,
                weight: 22.5,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/lanturn.png",
                pokedex_id: 171,
                type1: 2,
                type2: 4,
                generation: 2
            },

            {
                name: "Pichu",
                description: "It is still inept at controlling its electricity.",
                height: 0.3,
                weight: 2.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/pichu.png",
                pokedex_id: 172,
                type1: 4,
                type2: null,
                generation: 2
            },

            {
                name: "Cleffa",
                description: "It is often seen when shooting stars fill the night skies.",
                height: 0.3,
                weight: 3.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/cleffa.png",
                pokedex_id: 173,
                type1: 17,
                type2: null,
                generation: 2
            },

            {
                name: "Igglybuff",
                description: "Its body is soft and bouncy like a balloon.",
                height: 0.3,
                weight: 1.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/igglybuff.png",
                pokedex_id: 174,
                type1: 17,
                type2: 18,
                generation: 2
            },

            {
                name: "Togepi",
                description: "The shell seems to be filled with joy.",
                height: 0.3,
                weight: 1.5,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/togepi.png",
                pokedex_id: 175,
                type1: 17,
                type2: null,
                generation: 2
            },
            {
                name: "Togetic",
                description: "It is said to appear before kindhearted people.",
                height: 0.6,
                weight: 3.2,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/togetic.png",
                pokedex_id: 176,
                type1: 17,
                type2: 9,
                generation: 2
            },

            {
                name: "Natu",
                description: "It picks food from cactus plants.",
                height: 0.2,
                weight: 2.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/natu.png",
                pokedex_id: 177,
                type1: 10,
                type2: 9,
                generation: 2
            },
            {
                name: "Xatu",
                description: "It is known to stand motionless all day long.",
                height: 1.5,
                weight: 15.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/xatu.png",
                pokedex_id: 178,
                type1: 10,
                type2: 9,
                generation: 2
            },

            {
                name: "Mareep",
                description: "Its fleece grows continuously.",
                height: 0.6,
                weight: 7.8,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/mareep.png",
                pokedex_id: 179,
                type1: 4,
                type2: null,
                generation: 2
            },
            {
                name: "Flaaffy",
                description: "Its fleece quality changes to generate electricity.",
                height: 0.8,
                weight: 13.3,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/flaaffy.png",
                pokedex_id: 180,
                type1: 4,
                type2: null,
                generation: 2
            },
            {
                name: "Ampharos",
                description: "Its tail shines bright enough to be seen from space.",
                height: 1.4,
                weight: 61.5,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/ampharos.png",
                pokedex_id: 181,
                type1: 4,
                type2: null,
                generation: 2
            },

            {
                name: "Bellossom",
                description: "When it dances, its petals rub together to create a pleasant sound.",
                height: 0.4,
                weight: 5.8,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/bellossom.png",
                pokedex_id: 182,
                type1: 3,
                type2: null,
                generation: 2
            },

            {
                name: "Marill",
                description: "The oil-filled tail helps it float.",
                height: 0.4,
                weight: 8.5,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/marill.png",
                pokedex_id: 183,
                type1: 2,
                type2: 17,
                generation: 2
            },
            {
                name: "Azumarill",
                description: "Its long ears provide excellent hearing.",
                height: 0.8,
                weight: 28.5,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/azumarill.png",
                pokedex_id: 184,
                type1: 2,
                type2: 17,
                generation: 2
            },

            {
                name: "Sudowoodo",
                description: "It disguises itself as a tree to avoid attack.",
                height: 1.2,
                weight: 38.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/sudowoodo.png",
                pokedex_id: 185,
                type1: 12,
                type2: null,
                generation: 2
            },

            {
                name: "Politoed",
                description: "The curled hair shows its status among Poliwag and Poliwhirl.",
                height: 1.1,
                weight: 33.9,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/politoed.png",
                pokedex_id: 186,
                type1: 2,
                type2: null,
                generation: 2
            },

            {
                name: "Hoppip",
                description: "It drifts on the wind.",
                height: 0.4,
                weight: 0.5,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/hoppip.png",
                pokedex_id: 187,
                type1: 3,
                type2: 9,
                generation: 2
            },
            {
                name: "Skiploom",
                description: "It blooms when exposed to warm sunlight.",
                height: 0.6,
                weight: 1.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/skiploom.png",
                pokedex_id: 188,
                type1: 3,
                type2: 9,
                generation: 2
            },
            {
                name: "Jumpluff",
                description: "It rides warm southern winds.",
                height: 0.8,
                weight: 3.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/jumpluff.png",
                pokedex_id: 189,
                type1: 3,
                type2: 9,
                generation: 2
            },

            {
                name: "Aipom",
                description: "Its tail is so dexterous that it can use it to gather food.",
                height: 0.8,
                weight: 11.5,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/aipom.png",
                pokedex_id: 190,
                type1: 18,
                type2: null,
                generation: 2
            },

            {
                name: "Sunkern",
                description: "It lives by drinking only dew.",
                height: 0.3,
                weight: 1.8,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/sunkern.png",
                pokedex_id: 191,
                type1: 3,
                type2: null,
                generation: 2
            },
            {
                name: "Sunflora",
                description: "It gets energy from sunlight.",
                height: 0.8,
                weight: 8.5,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/sunflora.png",
                pokedex_id: 192,
                type1: 3,
                type2: null,
                generation: 2
            },

            {
                name: "Yanma",
                description: "It can see all around without moving its eyes.",
                height: 1.2,
                weight: 38.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/yanma.png",
                pokedex_id: 193,
                type1: 11,
                type2: 9,
                generation: 2
            },

            {
                name: "Wooper",
                description: "A mucous membrane protects its body.",
                height: 0.4,
                weight: 8.5,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/wooper.png",
                pokedex_id: 194,
                type1: 2,
                type2: 8,
                generation: 2
            },
            {
                name: "Quagsire",
                description: "It has a carefree nature.",
                height: 1.4,
                weight: 75.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/quagsire.png",
                pokedex_id: 195,
                type1: 2,
                type2: 8,
                generation: 2
            },

            {
                name: "Espeon",
                description: "It can predict the weather by sensing air currents.",
                height: 0.9,
                weight: 26.5,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/espeon.png",
                pokedex_id: 196,
                type1: 10,
                type2: null,
                generation: 2
            },
            {
                name: "Umbreon",
                description: "It lurks in darkness and strikes from the shadows.",
                height: 1.0,
                weight: 27.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/umbreon.png",
                pokedex_id: 197,
                type1: 15,
                type2: null,
                generation: 2
            },

            {
                name: "Murkrow",
                description: "It is feared as a messenger of misfortune.",
                height: 0.5,
                weight: 2.1,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/murkrow.png",
                pokedex_id: 198,
                type1: 15,
                type2: 9,
                generation: 2
            },

            {
                name: "Slowking",
                description: "Every time it yawns, it gains more knowledge.",
                height: 2.0,
                weight: 79.5,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/slowking.png",
                pokedex_id: 199,
                type1: 2,
                type2: 10,
                generation: 2
            },

            {
                name: "Misdreavus",
                description: "It likes playing mischievous tricks.",
                height: 0.7,
                weight: 1.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/misdreavus.png",
                pokedex_id: 200,
                type1: 13,
                type2: null,
                generation: 2
            },

            {
                name: "Unown",
                description: "Its shape resembles ancient writing.",
                height: 0.5,
                weight: 5.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/unown.png",
                pokedex_id: 201,
                type1: 10,
                type2: null,
                generation: 2
            },

            {
                name: "Wobbuffet",
                description: "It hates light and shock.",
                height: 1.3,
                weight: 28.5,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/wobbuffet.png",
                pokedex_id: 202,
                type1: 10,
                type2: null,
                generation: 2
            },

            {
                name: "Girafarig",
                description: "Its tail has a mind of its own.",
                height: 1.5,
                weight: 41.5,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/girafarig.png",
                pokedex_id: 203,
                type1: 18,
                type2: 10,
                generation: 2
            },

            {
                name: "Pineco",
                description: "It sticks tree bark to itself with adhesive.",
                height: 0.6,
                weight: 7.2,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/pineco.png",
                pokedex_id: 204,
                type1: 11,
                type2: null,
                generation: 2
            },
            {
                name: "Forretress",
                description: "It loads up on more shells as it grows.",
                height: 1.2,
                weight: 125.8,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/forretress.png",
                pokedex_id: 205,
                type1: 11,
                type2: 16,
                generation: 2
            },

            {
                name: "Dunsparce",
                description: "It makes its nest in complex caves.",
                height: 1.5,
                weight: 14.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/dunsparce.png",
                pokedex_id: 206,
                type1: 18,
                type2: null,
                generation: 2
            },

            {
                name: "Gligar",
                description: "It glides using the membrane between its arms.",
                height: 1.1,
                weight: 64.8,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/gligar.png",
                pokedex_id: 207,
                type1: 8,
                type2: 9,
                generation: 2
            },

            {
                name: "Steelix",
                description: "It lives even deeper underground than Onix.",
                height: 9.2,
                weight: 400.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/steelix.png",
                pokedex_id: 208,
                type1: 16,
                type2: 12,
                generation: 2
            },

            {
                name: "Snubbull",
                description: "It has an active, playful personality.",
                height: 0.6,
                weight: 7.8,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/snubbull.png",
                pokedex_id: 209,
                type1: 17,
                type2: null,
                generation: 2
            },
            {
                name: "Granbull",
                description: "It has a surprisingly timid nature.",
                height: 1.4,
                weight: 48.7,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/granbull.png",
                pokedex_id: 210,
                type1: 17,
                type2: null,
                generation: 2
            },

            {
                name: "Qwilfish",
                description: "The small spikes covering its body can be fired like missiles.",
                height: 0.5,
                weight: 3.9,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/qwilfish.png",
                pokedex_id: 211,
                type1: 2,
                type2: 7,
                generation: 2
            },

            {
                name: "Scizor",
                description: "Its steel body won't be scratched easily.",
                height: 1.8,
                weight: 118.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/scizor.png",
                pokedex_id: 212,
                type1: 11,
                type2: 16,
                generation: 2
            },

            {
                name: "Shuckle",
                description: "It stores berries inside its shell.",
                height: 0.6,
                weight: 20.5,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/shuckle.png",
                pokedex_id: 213,
                type1: 11,
                type2: 12,
                generation: 2
            },

            {
                name: "Heracross",
                description: "Its claws allow it to dig into the ground.",
                height: 1.5,
                weight: 54.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/heracross.png",
                pokedex_id: 214,
                type1: 6,
                type2: 11,
                generation: 2
            },

            {
                name: "Sneasel",
                description: "Its claws are sharp and quick.",
                height: 0.9,
                weight: 28.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/sneasel.png",
                pokedex_id: 215,
                type1: 15,
                type2: 5,
                generation: 2
            },

            {
                name: "Teddiursa",
                description: "It licks its palms that are sweet with honey.",
                height: 0.6,
                weight: 8.8,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/teddiursa.png",
                pokedex_id: 216,
                type1: 18,
                type2: null,
                generation: 2
            },
            {
                name: "Ursaring",
                description: "It is skilled at climbing trees.",
                height: 1.8,
                weight: 125.8,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/ursaring.png",
                pokedex_id: 217,
                type1: 18,
                type2: null,
                generation: 2
            },

            {
                name: "Slugma",
                description: "Its body is made of magma.",
                height: 0.7,
                weight: 35.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/slugma.png",
                pokedex_id: 218,
                type1: 1,
                type2: null,
                generation: 2
            },
            {
                name: "Magcargo",
                description: "Its shell is as hard as hardened lava.",
                height: 0.8,
                weight: 55.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/magcargo.png",
                pokedex_id: 219,
                type1: 1,
                type2: 12,
                generation: 2
            },

            {
                name: "Swinub",
                description: "It rubs its snout on the ground to find food.",
                height: 0.4,
                weight: 6.5,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/swinub.png",
                pokedex_id: 220,
                type1: 5,
                type2: 8,
                generation: 2
            },
            {
                name: "Piloswine",
                description: "Its shaggy fur makes it hard to see.",
                height: 1.1,
                weight: 55.8,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/piloswine.png",
                pokedex_id: 221,
                type1: 5,
                type2: 8,
                generation: 2
            },

            {
                name: "Corsola",
                description: "It grows in warm southern seas.",
                height: 0.6,
                weight: 5.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/corsola.png",
                pokedex_id: 222,
                type1: 2,
                type2: 12,
                generation: 2
            },

            {
                name: "Remoraid",
                description: "It uses water pressure to shoot down flying prey.",
                height: 0.6,
                weight: 12.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/remoraid.png",
                pokedex_id: 223,
                type1: 2,
                type2: null,
                generation: 2
            },
            {
                name: "Octillery",
                description: "It traps enemies with its suction cups.",
                height: 0.9,
                weight: 28.5,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/octillery.png",
                pokedex_id: 224,
                type1: 2,
                type2: null,
                generation: 2
            },

            {
                name: "Delibird",
                description: "It carries food bundled in its tail.",
                height: 0.9,
                weight: 16.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/delibird.png",
                pokedex_id: 225,
                type1: 9,
                type2: 5,
                generation: 2
            },

            {
                name: "Mantine",
                description: "It swims gracefully through the ocean.",
                height: 2.1,
                weight: 220.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/mantine.png",
                pokedex_id: 226,
                type1: 2,
                type2: 9,
                generation: 2
            },

            {
                name: "Skarmory",
                description: "Its body is covered with metal-like feathers.",
                height: 1.7,
                weight: 50.5,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/skarmory.png",
                pokedex_id: 227,
                type1: 16,
                type2: 9,
                generation: 2
            },

            {
                name: "Houndour",
                description: "It communicates with others using barks.",
                height: 0.6,
                weight: 10.8,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/houndour.png",
                pokedex_id: 228,
                type1: 15,
                type2: 1,
                generation: 2
            },
            {
                name: "Houndoom",
                description: "If you are burned by its flames, the pain never goes away.",
                height: 1.4,
                weight: 35.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/houndoom.png",
                pokedex_id: 229,
                type1: 15,
                type2: 1,
                generation: 2
            },

            {
                name: "Kingdra",
                description: "It lives quietly in deep-sea trenches.",
                height: 1.8,
                weight: 152.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/kingdra.png",
                pokedex_id: 230,
                type1: 2,
                type2: 14,
                generation: 2
            },

            {
                name: "Phanpy",
                description: "It is loyal and friendly.",
                height: 0.5,
                weight: 33.5,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/phanpy.png",
                pokedex_id: 231,
                type1: 8,
                type2: null,
                generation: 2
            },
            {
                name: "Donphan",
                description: "It has tough skin like armor.",
                height: 1.1,
                weight: 120.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/donphan.png",
                pokedex_id: 232,
                type1: 8,
                type2: null,
                generation: 2
            },

            {
                name: "Porygon2",
                description: "It was upgraded using the latest technology.",
                height: 0.6,
                weight: 32.5,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/porygon2.png",
                pokedex_id: 233,
                type1: 18,
                type2: null,
                generation: 2
            },

            {
                name: "Stantler",
                description: "Its antlers can hypnotize people.",
                height: 1.4,
                weight: 71.2,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/stantler.png",
                pokedex_id: 234,
                type1: 18,
                type2: null,
                generation: 2
            },

            {
                name: "Smeargle",
                description: "It marks its territory using a paint-like fluid.",
                height: 1.2,
                weight: 58.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/smeargle.png",
                pokedex_id: 235,
                type1: 18,
                type2: null,
                generation: 2
            },

            {
                name: "Tyrogue",
                description: "It becomes stressed if it doesn't train every day.",
                height: 0.7,
                weight: 21.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/tyrogue.png",
                pokedex_id: 236,
                type1: 6,
                type2: null,
                generation: 2
            },

            {
                name: "Hitmontop",
                description: "It spins like a top while attacking.",
                height: 1.4,
                weight: 48.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/hitmontop.png",
                pokedex_id: 237,
                type1: 6,
                type2: null,
                generation: 2
            },

            {
                name: "Smoochum",
                description: "It explores the world by touching everything with its lips.",
                height: 0.4,
                weight: 6.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/smoochum.png",
                pokedex_id: 238,
                type1: 5,
                type2: 10,
                generation: 2
            },

            {
                name: "Elekid",
                description: "It generates electricity by spinning its arms.",
                height: 0.6,
                weight: 23.5,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/elekid.png",
                pokedex_id: 239,
                type1: 4,
                type2: null,
                generation: 2
            },

            {
                name: "Magby",
                description: "Its body temperature is around 600°C.",
                height: 0.7,
                weight: 21.4,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/magby.png",
                pokedex_id: 240,
                type1: 1,
                type2: null,
                generation: 2
            },

            {
                name: "Miltank",
                description: "Its milk is enjoyed by children and adults alike.",
                height: 1.2,
                weight: 75.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/miltank.png",
                pokedex_id: 241,
                type1: 18,
                type2: null,
                generation: 2
            },

            {
                name: "Blissey",
                description: "It senses sadness and comforts sufferers.",
                height: 1.5,
                weight: 46.8,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/blissey.png",
                pokedex_id: 242,
                type1: 17,
                type2: null,
                generation: 2
            },

            {
                name: "Raikou",
                description: "It embodies the speed of lightning.",
                height: 1.9,
                weight: 178.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/raikou.png",
                pokedex_id: 243,
                type1: 4,
                type2: null,
                generation: 2
            },
            {
                name: "Entei",
                description: "It is said that a volcano erupts when Entei barks.",
                height: 2.1,
                weight: 198.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/entei.png",
                pokedex_id: 244,
                type1: 1,
                type2: null,
                generation: 2
            },
            {
                name: "Suicune",
                description: "It travels the world purifying dirty water.",
                height: 2.0,
                weight: 187.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/suicune.png",
                pokedex_id: 245,
                type1: 2,
                type2: null,
                generation: 2
            },

            {
                name: "Larvitar",
                description: "It is born deep underground.",
                height: 0.6,
                weight: 72.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/larvitar.png",
                pokedex_id: 246,
                type1: 12,
                type2: 8,
                generation: 2
            },
            {
                name: "Pupitar",
                description: "Its body is hard as steel.",
                height: 1.2,
                weight: 152.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/pupitar.png",
                pokedex_id: 247,
                type1: 12,
                type2: 8,
                generation: 2
            },
            {
                name: "Tyranitar",
                description: "Its body can't be harmed by any physical attack.",
                height: 2.0,
                weight: 202.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/tyranitar.png",
                pokedex_id: 248,
                type1: 12,
                type2: 15,
                generation: 2
            },

            {
                name: "Lugia",
                description: "It sleeps in deep-sea trenches.",
                height: 5.2,
                weight: 216.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/lugia.png",
                pokedex_id: 249,
                type1: 10,
                type2: 9,
                generation: 2
            },

            {
                name: "Ho-oh",
                description: "Its feathers glow in seven colors depending on the angle.",
                height: 3.8,
                weight: 199.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/hooh.png",
                pokedex_id: 250,
                type1: 1,
                type2: 9,
                generation: 2
            },

            {
                name: "Celebi",
                description: "It has the power to travel across time.",
                height: 0.6,
                weight: 5.0,
                region_id: 2,
                image: "http://localhost:3000/uploads/pokemon/celebi.png",
                pokedex_id: 251,
                type1: 3,
                type2: 10,
                generation: 2
            }
        ]

        for (let pokemon of poke) {
            await pool.query(`
                INSERT INTO pokemon (name, description, height, weight, region_id, image, pokedex_id, type1, type2, generation) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) ON CONFLICT (name) DO NOTHING`,
                [pokemon.name, pokemon.description, pokemon.height, pokemon.weight, pokemon.region_id, pokemon.image, pokemon.pokedex_id, pokemon.type1, pokemon.type2, pokemon.generation])
        }

        console.log("Berhasil Membuat Pokemon Gen 2")
    }
    catch (err) {
        console.log("Gagal Membuat Pokemon, Error: ", err.message)
    }
}


module.exports = pokemonGen2Seeder