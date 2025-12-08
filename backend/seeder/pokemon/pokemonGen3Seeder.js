const pool = require("../../db")

async function pokemonGen3Seeder() {
  try {
    const poke = [
      {
        name: "Treecko",
        description: "It quickly scales even vertical walls. It senses humidity with its tail.",
        height: 0.5,
        weight: 5.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/treecko.png",
        pokedex_id: 252,
        type1: 3,
        type2: null,
        generation: 3
      },
      {
        name: "Grovyle",
        description: "It lives in dense jungles. It leaps from branch to branch with ease.",
        height: 0.9,
        weight: 21.6,
        region_id: 3,
        image: "http://localhost:3000/uploads/grovyle.png",
        pokedex_id: 253,
        type1: 3,
        type2: null,
        generation: 3
      },
      {
        name: "Sceptile",
        description: "It is said to care for the forest with its sharp leaves.",
        height: 1.7,
        weight: 52.2,
        region_id: 3,
        image: "http://localhost:3000/uploads/sceptile.png",
        pokedex_id: 254,
        type1: 3,
        type2: null,
        generation: 3
      },

      {
        name: "Torchic",
        description: "It has a flame sac inside its belly. It shoots fireballs of 1,800 degrees F.",
        height: 0.4,
        weight: 2.5,
        region_id: 3,
        image: "http://localhost:3000/uploads/torchic.png",
        pokedex_id: 255,
        type1: 1, // Fire
        type2: null,
        generation: 3
      },
      {
        name: "Combusken",
        description: "Its kicks are powerful. It can double-kick opponents with blazing speed.",
        height: 0.9,
        weight: 19.5,
        region_id: 3,
        image: "http://localhost:3000/uploads/combusken.png",
        pokedex_id: 256,
        type1: 1,
        type2: 6,
        generation: 3
      },
      {
        name: "Blaziken",
        description: "Flames burst from its wrists. Its powerful kicks can destroy boulders.",
        height: 1.9,
        weight: 52.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/blaziken.png",
        pokedex_id: 257,
        type1: 1,
        type2: 6,
        generation: 3
      },

      {
        name: "Mudkip",
        description: "Its fin acts as a radar. Mudkip is strong enough to lift boulders.",
        height: 0.4,
        weight: 7.6,
        region_id: 3,
        image: "http://localhost:3000/uploads/mudkip.png",
        pokedex_id: 258,
        type1: 2,
        type2: null,
        generation: 3
      },
      {
        name: "Marshtomp",
        description: "Its sturdy legs allow it to move freely through mud.",
        height: 0.7,
        weight: 28.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/marshtomp.png",
        pokedex_id: 259,
        type1: 2,
        type2: 8,
        generation: 3
      },
      {
        name: "Swampert",
        description: "It can predict storms. Its strength allows it to drag large rocks.",
        height: 1.5,
        weight: 81.9,
        region_id: 3,
        image: "http://localhost:3000/uploads/swampert.png",
        pokedex_id: 260,
        type1: 2,
        type2: 8,
        generation: 3
      },

      {
        name: "Poochyena",
        description: "It chases after prey until the victim becomes exhausted.",
        height: 0.5,
        weight: 13.6,
        region_id: 3,
        image: "http://localhost:3000/uploads/poochyena.png",
        pokedex_id: 261,
        type1: 15,
        type2: null,
        generation: 3
      },
      {
        name: "Mightyena",
        description: "It lives in a pack and obeys its leader's orders.",
        height: 1.0,
        weight: 37.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/mightyena.png",
        pokedex_id: 262,
        type1: 15,
        type2: null,
        generation: 3
      },

      {
        name: "Zigzagoon",
        description: "It is curious and restlessly wanders everywhere.",
        height: 0.4,
        weight: 17.5,
        region_id: 3,
        image: "http://localhost:3000/uploads/zigzagoon.png",
        pokedex_id: 263,
        type1: 18,
        type2: null,
        generation: 3
      },
      {
        name: "Linoone",
        description: "It runs at full speed in straight lines.",
        height: 0.5,
        weight: 32.5,
        region_id: 3,
        image: "http://localhost:3000/uploads/linoone.png",
        pokedex_id: 264,
        type1: 18,
        type2: null,
        generation: 3
      },

      {
        name: "Wurmple",
        description: "It sticks to trees with its suction feet while eating leaves.",
        height: 0.3,
        weight: 3.6,
        region_id: 3,
        image: "http://localhost:3000/uploads/wurmple.png",
        pokedex_id: 265,
        type1: 11,
        type2: null,
        generation: 3
      },
      {
        name: "Silcoon",
        description: "It prepares for evolution by wrapping its body in silk.",
        height: 0.6,
        weight: 10.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/silcoon.png",
        pokedex_id: 266,
        type1: 11,
        type2: null,
        generation: 3
      },
      {
        name: "Beautifly",
        description: "Despite its beauty, it has an aggressive nature.",
        height: 1.0,
        weight: 28.4,
        region_id: 3,
        image: "http://localhost:3000/uploads/beautifly.png",
        pokedex_id: 267,
        type1: 11,
        type2: 9,
        generation: 3
      },

      {
        name: "Cascoon",
        description: "It hardens its shell to protect itself while evolving.",
        height: 0.7,
        weight: 11.5,
        region_id: 3,
        image: "http://localhost:3000/uploads/cascoon.png",
        pokedex_id: 268,
        type1: 11,
        type2: null,
        generation: 3
      },
      {
        name: "Dustox",
        description: "It scatters toxic powder and is attracted to bright light.",
        height: 1.2,
        weight: 31.6,
        region_id: 3,
        image: "http://localhost:3000/uploads/dustox.png",
        pokedex_id: 269,
        type1: 11,
        type2: 7,
        generation: 3
      },

      {
        name: "Lotad",
        description: "It lives in ponds and carries a leaf on its back.",
        height: 0.5,
        weight: 2.6,
        region_id: 3,
        image: "http://localhost:3000/uploads/lotad.png",
        pokedex_id: 270,
        type1: 2,
        type2: 3,
        generation: 3
      },
      {
        name: "Lombre",
        description: "It mischievously plays tricks on people.",
        height: 1.2,
        weight: 32.5,
        region_id: 3,
        image: "http://localhost:3000/uploads/lombre.png",
        pokedex_id: 271,
        type1: 2,
        type2: 3,
        generation: 3
      },
      {
        name: "Ludicolo",
        description: "It becomes more powerful when it hears festive music.",
        height: 1.5,
        weight: 55.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/ludicolo.png",
        pokedex_id: 272,
        type1: 2,
        type2: 3,
        generation: 3
      },

      {
        name: "Seedot",
        description: "It hangs from branches and absorbs nutrients.",
        height: 0.5,
        weight: 4.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/seedot.png",
        pokedex_id: 273,
        type1: 3,
        type2: null,
        generation: 3
      },
      {
        name: "Nuzleaf",
        description: "It lives in forests and intimidates others by playing its leaf flute.",
        height: 1.0,
        weight: 28.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/nuzleaf.png",
        pokedex_id: 274,
        type1: 3,
        type2: 15,
        generation: 3
      },
      {
        name: "Shiftry",
        description: "It can create powerful wind gusts with its fans.",
        height: 1.3,
        weight: 59.6,
        region_id: 3,
        image: "http://localhost:3000/uploads/shiftry.png",
        pokedex_id: 275,
        type1: 3,
        type2: 15,
        generation: 3
      },

      {
        name: "Taillow",
        description: "It bravely stands up to larger foes.",
        height: 0.3,
        weight: 2.3,
        region_id: 3,
        image: "http://localhost:3000/uploads/taillow.png",
        pokedex_id: 276,
        type1: 18,
        type2: 9,
        generation: 3
      },
      {
        name: "Swellow",
        description: "It dives at high speeds to attack its prey.",
        height: 0.7,
        weight: 19.8,
        region_id: 3,
        image: "http://localhost:3000/uploads/swellow.png",
        pokedex_id: 277,
        type1: 18,
        type2: 9,
        generation: 3
      },
      {
        name: "Wingull",
        description: "It soars high in the sky, using its long wings to glide.",
        height: 0.6,
        weight: 9.5,
        region_id: 3,
        image: "http://localhost:3000/uploads/wingull.png",
        pokedex_id: 278,
        type1: 2,
        type2: 9,
        generation: 3
      },
      {
        name: "Pelipper",
        description: "It carries small Pokémon and items in its large beak.",
        height: 1.2,
        weight: 28.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/pelipper.png",
        pokedex_id: 279,
        type1: 2,
        type2: 9,
        generation: 3
      },

      {
        name: "Ralts",
        description: "It senses the emotions of people and Pokémon.",
        height: 0.4,
        weight: 6.6,
        region_id: 3,
        image: "http://localhost:3000/uploads/ralts.png",
        pokedex_id: 280,
        type1: 10,
        type2: 17,
        generation: 3
      },
      {
        name: "Kirlia",
        description: "It uses its psychic powers to create mirages and see the future.",
        height: 0.8,
        weight: 20.2,
        region_id: 3,
        image: "http://localhost:3000/uploads/kirlia.png",
        pokedex_id: 281,
        type1: 10,
        type2: 17,
        generation: 3
      },
      {
        name: "Gardevoir",
        description: "It will protect its trainer even at the cost of its own life.",
        height: 1.6,
        weight: 48.4,
        region_id: 3,
        image: "http://localhost:3000/uploads/gardevoir.png",
        pokedex_id: 282,
        type1: 10,
        type2: 17,
        generation: 3
      },

      {
        name: "Surskit",
        description: "It glides across the water surface as if skating.",
        height: 0.5,
        weight: 1.7,
        region_id: 3,
        image: "http://localhost:3000/uploads/surskit.png",
        pokedex_id: 283,
        type1: 11,
        type2: 2,
        generation: 3
      },
      {
        name: "Masquerain",
        description: "It intimidates enemies with its eye-like antenna patterns.",
        height: 0.8,
        weight: 3.6,
        region_id: 3,
        image: "http://localhost:3000/uploads/masquerain.png",
        pokedex_id: 284,
        type1: 11,
        type2: 9,
        generation: 3
      },

      {
        name: "Shroomish",
        description: "It lives in damp soil and scatters spores when threatened.",
        height: 0.4,
        weight: 4.5,
        region_id: 3,
        image: "http://localhost:3000/uploads/shroomish.png",
        pokedex_id: 285,
        type1: 3,
        type2: null,
        generation: 3
      },
      {
        name: "Breloom",
        description: "Its punches are fast and toxic spores burst from its cap.",
        height: 1.2,
        weight: 39.2,
        region_id: 3,
        image: "http://localhost:3000/uploads/breloom.png",
        pokedex_id: 286,
        type1: 3,
        type2: 6,
        generation: 3
      },

      {
        name: "Slakoth",
        description: "It sleeps for more than 20 hours a day.",
        height: 0.8,
        weight: 24.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/slakoth.png",
        pokedex_id: 287,
        type1: 18,
        type2: null,
        generation: 3
      },
      {
        name: "Vigoroth",
        description: "It cannot sit still due to its extreme energy.",
        height: 1.4,
        weight: 46.5,
        region_id: 3,
        image: "http://localhost:3000/uploads/vigoroth.png",
        pokedex_id: 288,
        type1: 18,
        type2: null,
        generation: 3
      },
      {
        name: "Slaking",
        description: "It is the world's laziest Pokémon, but its power is unmatched.",
        height: 2.0,
        weight: 130.5,
        region_id: 3,
        image: "http://localhost:3000/uploads/slaking.png",
        pokedex_id: 289,
        type1: 18,
        type2: null,
        generation: 3
      },

      {
        name: "Nincada",
        description: "It lives underground and avoids sunlight.",
        height: 0.5,
        weight: 5.5,
        region_id: 3,
        image: "http://localhost:3000/uploads/nincada.png",
        pokedex_id: 290,
        type1: 11,
        type2: 8,
        generation: 3
      },
      {
        name: "Ninjask",
        description: "It moves so quickly that it is nearly invisible.",
        height: 0.8,
        weight: 12.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/ninjask.png",
        pokedex_id: 291,
        type1: 11,
        type2: 9,
        generation: 3
      },
      {
        name: "Shedinja",
        description: "It is a discarded shell that mysteriously came to life.",
        height: 0.8,
        weight: 1.2,
        region_id: 3,
        image: "http://localhost:3000/uploads/shedinja.png",
        pokedex_id: 292,
        type1: 11,
        type2: 13,
        generation: 3
      },

      {
        name: "Whismur",
        description: "Its cries are as loud as a jet plane.",
        height: 0.6,
        weight: 16.3,
        region_id: 3,
        image: "http://localhost:3000/uploads/whismur.png",
        pokedex_id: 293,
        type1: 18,
        type2: null,
        generation: 3
      },
      {
        name: "Loudred",
        description: "Its stomping generates powerful sound waves.",
        height: 1.0,
        weight: 40.5,
        region_id: 3,
        image: "http://localhost:3000/uploads/loudred.png",
        pokedex_id: 294,
        type1: 18,
        type2: null,
        generation: 3
      },
      {
        name: "Exploud",
        description: "It can unleash sound waves powerful enough to topple buildings.",
        height: 1.5,
        weight: 84.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/exploud.png",
        pokedex_id: 295,
        type1: 18,
        type2: null,
        generation: 3
      },

      {
        name: "Makuhita",
        description: "It trains tirelessly to become strong.",
        height: 1.0,
        weight: 86.4,
        region_id: 3,
        image: "http://localhost:3000/uploads/makuhita.png",
        pokedex_id: 296,
        type1: 6,
        type2: null,
        generation: 3
      },
      {
        name: "Hariyama",
        description: "It loves to challenge strong opponents to sumo matches.",
        height: 2.3,
        weight: 253.8,
        region_id: 3,
        image: "http://localhost:3000/uploads/hariyama.png",
        pokedex_id: 297,
        type1: 6,
        type2: null,
        generation: 3
      },

      {
        name: "Azurill",
        description: "It bounces on its large tail to move quickly.",
        height: 0.2,
        weight: 2.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/azurill.png",
        pokedex_id: 298,
        type1: 17,
        type2: 2,
        generation: 3
      },

      {
        name: "Nosepass",
        description: "Its magnetic nose constantly points north.",
        height: 1.0,
        weight: 97.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/nosepass.png",
        pokedex_id: 299,
        type1: 12,
        type2: null,
        generation: 3
      },

      {
        name: "Skitty",
        description: "It gets distracted easily and chases moving things.",
        height: 0.6,
        weight: 11.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/skitty.png",
        pokedex_id: 300,
        type1: 18,
        type2: null,
        generation: 3
      },
      {
        name: "Delcatty",
        description: "It dislikes dirty places and avoids conflict.",
        height: 1.1,
        weight: 32.6,
        region_id: 3,
        image: "http://localhost:3000/uploads/delcatty.png",
        pokedex_id: 301,
        type1: 18,
        type2: null,
        generation: 3
      },

      {
        name: "Sableye",
        description: "It eats gemstones and lurks in the shadows.",
        height: 0.5,
        weight: 11.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/sableye.png",
        pokedex_id: 302,
        type1: 15,
        type2: 13,
        generation: 3
      },

      {
        name: "Mawile",
        description: "It uses its giant jaws to intimidate and attack.",
        height: 0.6,
        weight: 11.5,
        region_id: 3,
        image: "http://localhost:3000/uploads/mawile.png",
        pokedex_id: 303,
        type1: 16,
        type2: 17,
        generation: 3
      },

      {
        name: "Aron",
        description: "It feeds on iron ore and can demolish steel bridges.",
        height: 0.4,
        weight: 60.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/aron.png",
        pokedex_id: 304,
        type1: 16,
        type2: 12,
        generation: 3
      },
      {
        name: "Lairon",
        description: "It strengthens its body by eating iron-rich soil.",
        height: 0.9,
        weight: 120.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/lairon.png",
        pokedex_id: 305,
        type1: 16,
        type2: 12,
        generation: 3
      },
      {
        name: "Aggron",
        description: "It protects its mountain home fiercely.",
        height: 2.1,
        weight: 360.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/aggron.png",
        pokedex_id: 306,
        type1: 16,
        type2: 12,
        generation: 3
      },

      {
        name: "Meditite",
        description: "It meditates tirelessly to heighten its spiritual energy.",
        height: 0.6,
        weight: 11.2,
        region_id: 3,
        image: "http://localhost:3000/uploads/meditite.png",
        pokedex_id: 307,
        type1: 6,
        type2: 10,
        generation: 3
      },
      {
        name: "Medicham",
        description: "Through yoga training, it gained the ability to predict moves.",
        height: 1.3,
        weight: 31.5,
        region_id: 3,
        image: "http://localhost:3000/uploads/medicham.png",
        pokedex_id: 308,
        type1: 6,
        type2: 10,
        generation: 3
      },

      {
        name: "Electrike",
        description: "It stores electricity in its fur and can unleash lightning.",
        height: 0.6,
        weight: 15.2,
        region_id: 3,
        image: "http://localhost:3000/uploads/electrike.png",
        pokedex_id: 309,
        type1: 4,
        type2: null,
        generation: 3
      },
      {
        name: "Manectric",
        description: "It discharges powerful electricity from its mane.",
        height: 1.5,
        weight: 40.2,
        region_id: 3,
        image: "http://localhost:3000/uploads/manectric.png",
        pokedex_id: 310,
        type1: 4,
        type2: null,
        generation: 3
      },

      {
        name: "Plusle",
        description: "It cheers its teammates with sparks from its body.",
        height: 0.4,
        weight: 4.2,
        region_id: 3,
        image: "http://localhost:3000/uploads/plusle.png",
        pokedex_id: 311,
        type1: 4,
        type2: null,
        generation: 3
      },
      {
        name: "Minun",
        description: "It encourages allies by creating lightning sparks.",
        height: 0.4,
        weight: 4.2,
        region_id: 3,
        image: "http://localhost:3000/uploads/minun.png",
        pokedex_id: 312,
        type1: 4,
        type2: null,
        generation: 3
      },

      {
        name: "Volbeat",
        description: "It communicates with others by flashing the light on its tail.",
        height: 0.7,
        weight: 17.7,
        region_id: 3,
        image: "http://localhost:3000/uploads/volbeat.png",
        pokedex_id: 313,
        type1: 11,
        type2: null,
        generation: 3
      },
      {
        name: "Illumise",
        description: "It guides Volbeat with its sweet fragrance.",
        height: 0.6,
        weight: 17.7,
        region_id: 3,
        image: "http://localhost:3000/uploads/illumise.png",
        pokedex_id: 314,
        type1: 11,
        type2: null,
        generation: 3
      },

      {
        name: "Roselia",
        description: "It emits a soothing fragrance from its flowers.",
        height: 0.3,
        weight: 2.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/roselia.png",
        pokedex_id: 315,
        type1: 3,
        type2: 7,
        generation: 3
      },

      {
        name: "Gulpin",
        description: "It swallows anything whole thanks to its elastic stomach.",
        height: 0.4,
        weight: 10.3,
        region_id: 3,
        image: "http://localhost:3000/uploads/gulpin.png",
        pokedex_id: 316,
        type1: 7,
        type2: null,
        generation: 3
      },
      {
        name: "Swalot",
        description: "Its body is highly flexible and can stretch to swallow anything.",
        height: 1.7,
        weight: 80.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/swalot.png",
        pokedex_id: 317,
        type1: 7,
        type2: null,
        generation: 3
      },

      {
        name: "Carvanha",
        description: "Its razor-sharp fangs and aggressive nature make it dangerous.",
        height: 0.8,
        weight: 20.8,
        region_id: 3,
        image: "http://localhost:3000/uploads/carvanha.png",
        pokedex_id: 318,
        type1: 2,
        type2: 15,
        generation: 3
      },
      {
        name: "Sharpedo",
        description: "It can swim at speeds of over 70 mph.",
        height: 1.8,
        weight: 88.8,
        region_id: 3,
        image: "http://localhost:3000/uploads/sharpedo.png",
        pokedex_id: 319,
        type1: 2,
        type2: 15,
        generation: 3
      },

      {
        name: "Wailmer",
        description: "Its bouncy body lets it bounce like a ball.",
        height: 2.0,
        weight: 130.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/wailmer.png",
        pokedex_id: 320,
        type1: 2,
        type2: null,
        generation: 3
      },
      {
        name: "Wailord",
        description: "It is one of the largest Pokémon ever discovered.",
        height: 14.5,
        weight: 398.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/wailord.png",
        pokedex_id: 321,
        type1: 2,
        type2: null,
        generation: 3
      },

      {
        name: "Numel",
        description: "It stores lava in its hump and is slow due to its dull mind.",
        height: 0.7,
        weight: 24.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/numel.png",
        pokedex_id: 322,
        type1: 1,
        type2: 8,
        generation: 3
      },
      {
        name: "Camerupt",
        description: "Its humps contain volcanoes that erupt every 10 years.",
        height: 1.9,
        weight: 220.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/camerupt.png",
        pokedex_id: 323,
        type1: 1,
        type2: 8,
        generation: 3
      },

      {
        name: "Torkoal",
        description: "It burns coal to produce energy and releases black smoke.",
        height: 0.5,
        weight: 80.4,
        region_id: 3,
        image: "http://localhost:3000/uploads/torkoal.png",
        pokedex_id: 324,
        type1: 1,
        type2: null,
        generation: 3
      },

      {
        name: "Spoink",
        description: "It bounces nonstop to keep its heart beating.",
        height: 0.7,
        weight: 30.6,
        region_id: 3,
        image: "http://localhost:3000/uploads/spoink.png",
        pokedex_id: 325,
        type1: 10,
        type2: null,
        generation: 3
      },
      {
        name: "Grumpig",
        description: "It uses black pearls to amplify its psychic power.",
        height: 0.9,
        weight: 71.5,
        region_id: 3,
        image: "http://localhost:3000/uploads/grumpig.png",
        pokedex_id: 326,
        type1: 10,
        type2: null,
        generation: 3
      },

      {
        name: "Spinda",
        description: "Its spot patterns are unique to each individual.",
        height: 1.1,
        weight: 5.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/spinda.png",
        pokedex_id: 327,
        type1: 18,
        type2: null,
        generation: 3
      },

      {
        name: "Trapinch",
        description: "It has jaws powerful enough to crush boulders.",
        height: 0.7,
        weight: 15.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/trapinch.png",
        pokedex_id: 328,
        type1: 8,
        type2: null,
        generation: 3
      },
      {
        name: "Vibrava",
        description: "It generates ultrasonic waves as it vibrates its wings.",
        height: 1.1,
        weight: 15.3,
        region_id: 3,
        image: "http://localhost:3000/uploads/vibrava.png",
        pokedex_id: 329,
        type1: 8,
        type2: 14,
        generation: 3
      },
      {
        name: "Flygon",
        description: "It is known as the elemental spirit of the desert.",
        height: 2.0,
        weight: 82.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/flygon.png",
        pokedex_id: 330,
        type1: 8,
        type2: 14,
        generation: 3
      },

      {
        name: "Cacnea",
        description: "It lives in deserts and attacks using its sharp spines.",
        height: 0.4,
        weight: 51.3,
        region_id: 3,
        image: "http://localhost:3000/uploads/cacnea.png",
        pokedex_id: 331,
        type1: 3,
        type2: null,
        generation: 3
      },
      {
        name: "Cacturne",
        description: "It follows travelers in the desert, waiting for exhaustion.",
        height: 1.3,
        weight: 77.4,
        region_id: 3,
        image: "http://localhost:3000/uploads/cacturne.png",
        pokedex_id: 332,
        type1: 3,
        type2: 15,
        generation: 3
      },
      {
        name: "Swablu",
        description: "It loves to make its cotton-like wings clean and soft.",
        height: 0.4,
        weight: 1.2,
        region_id: 3,
        image: "http://localhost:3000/uploads/swablu.png",
        pokedex_id: 333,
        type1: 18,
        type2: 9,
        generation: 3
      },
      {
        name: "Altaria",
        description: "It sings with a beautiful voice that calms listeners.",
        height: 1.1,
        weight: 20.6,
        region_id: 3,
        image: "http://localhost:3000/uploads/altaria.png",
        pokedex_id: 334,
        type1: 9,
        type2: 14,
        generation: 3
      },

      {
        name: "Zangoose",
        description: "It has a long rivalry with Seviper and slashes with sharp claws.",
        height: 1.3,
        weight: 40.3,
        region_id: 3,
        image: "http://localhost:3000/uploads/zangoose.png",
        pokedex_id: 335,
        type1: 18,
        type2: null,
        generation: 3
      },
      {
        name: "Seviper",
        description: "Its tail blade is filled with deadly venom.",
        height: 2.7,
        weight: 52.5,
        region_id: 3,
        image: "http://localhost:3000/uploads/seviper.png",
        pokedex_id: 336,
        type1: 7,
        type2: null,
        generation: 3
      },

      {
        name: "Lunatone",
        description: "It was discovered at a meteor crash site.",
        height: 1.0,
        weight: 168.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/lunatone.png",
        pokedex_id: 337,
        type1: 12,
        type2: 10,
        generation: 3
      },
      {
        name: "Solrock",
        description: "It releases intense light from its body to overwhelm foes.",
        height: 1.2,
        weight: 154.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/solrock.png",
        pokedex_id: 338,
        type1: 12,
        type2: 10,
        generation: 3
      },

      {
        name: "Barboach",
        description: "Its entire body is coated in a slimy film that protects it.",
        height: 0.4,
        weight: 1.9,
        region_id: 3,
        image: "http://localhost:3000/uploads/barboach.png",
        pokedex_id: 339,
        type1: 2,
        type2: 8,
        generation: 3
      },
      {
        name: "Whiscash",
        description: "It claims a large swamp as its territory.",
        height: 0.9,
        weight: 23.6,
        region_id: 3,
        image: "http://localhost:3000/uploads/whiscash.png",
        pokedex_id: 340,
        type1: 2,
        type2: 8,
        generation: 3
      },

      {
        name: "Corphish",
        description: "It is hardy and can survive in polluted water.",
        height: 0.6,
        weight: 11.5,
        region_id: 3,
        image: "http://localhost:3000/uploads/corphish.png",
        pokedex_id: 341,
        type1: 2,
        type2: null,
        generation: 3
      },
      {
        name: "Crawdaunt",
        description: "It is violent and will attack anything that enters its territory.",
        height: 1.1,
        weight: 32.8,
        region_id: 3,
        image: "http://localhost:3000/uploads/crawdaunt.png",
        pokedex_id: 342,
        type1: 2,
        type2: 15,
        generation: 3
      },

      {
        name: "Baltoy",
        description: "It moves by spinning like a top.",
        height: 0.5,
        weight: 21.5,
        region_id: 3,
        image: "http://localhost:3000/uploads/baltoy.png",
        pokedex_id: 343,
        type1: 12,
        type2: 10,
        generation: 3
      },
      {
        name: "Claydol",
        description: "It was created from clay and has mysterious psychic powers.",
        height: 1.5,
        weight: 108.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/claydol.png",
        pokedex_id: 344,
        type1: 12,
        type2: 10,
        generation: 3
      },

      {
        name: "Lileep",
        description: "It is a fossil Pokémon that once lived in warm seas.",
        height: 1.0,
        weight: 23.8,
        region_id: 3,
        image: "http://localhost:3000/uploads/lileep.png",
        pokedex_id: 345,
        type1: 12,
        type2: 3,
        generation: 3
      },
      // BAGIAN 4 — Dex 346–386

      {
        name: "Cradily",
        description: "It lives in the shallows of warm seas. It uses its tentacles to anchor itself to rocks.",
        height: 1.5,
        weight: 60.4,
        region_id: 3,
        image: "http://localhost:3000/uploads/cradily.png",
        pokedex_id: 346,
        type1: 12,
        type2: 3,
        generation: 3
      },
      {
        name: "Armaldo",
        description: "It lived on land and went into the sea to hunt for prey. It swims by flapping its wings.",
        height: 1.5,
        weight: 68.2,
        region_id: 3,
        image: "http://localhost:3000/uploads/armaldo.png",
        pokedex_id: 347,
        type1: 11,
        type2: 12,
        generation: 3
      },
      {
        name: "Feebas",
        description: "It is a shabby and ugly Pokémon. However, it is very hardy and can survive in any body of water.",
        height: 0.6,
        weight: 7.4,
        region_id: 3,
        image: "http://localhost:3000/uploads/feebas.png",
        pokedex_id: 349,
        type1: 2,
        type2: null,
        generation: 3
      },
      {
        name: "Milotic",
        description: "It is said to live at the bottom of large lakes. Its beauty is legendary.",
        height: 6.2,
        weight: 162.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/milotic.png",
        pokedex_id: 350,
        type1: 2,
        type2: null,
        generation: 3
      },
      {
        name: "Castform",
        description: "It changes form based on the weather. Its cellular structure changes with the climate.",
        height: 0.3,
        weight: 0.8,
        region_id: 3,
        image: "http://localhost:3000/uploads/castform.png",
        pokedex_id: 351,
        type1: 18,
        type2: null,
        generation: 3
      },
      {
        name: "Kecleon",
        description: "It alters its body coloration to blend into its surroundings.",
        height: 1.0,
        weight: 22.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/kecleon.png",
        pokedex_id: 352,
        type1: 18,
        type2: null,
        generation: 3
      },
      {
        name: "Shuppet",
        description: "It feeds on grudges and negative emotions.",
        height: 0.6,
        weight: 2.3,
        region_id: 3,
        image: "http://localhost:3000/uploads/shuppet.png",
        pokedex_id: 353,
        type1: 13,
        type2: null,
        generation: 3
      },
      {
        name: "Banette",
        description: "A doll that became a Pokémon after being abandoned and filled with hatred.",
        height: 1.1,
        weight: 12.5,
        region_id: 3,
        image: "http://localhost:3000/uploads/banette.png",
        pokedex_id: 354,
        type1: 13,
        type2: null,
        generation: 3
      },
      {
        name: "Duskull",
        description: "It loves the crying of children and wanders the night searching for them.",
        height: 0.8,
        weight: 15.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/duskull.png",
        pokedex_id: 355,
        type1: 13,
        type2: null,
        generation: 3
      },
      {
        name: "Dusclops",
        description: "Its body is hollow—inside is a black hole that can swallow anything.",
        height: 1.6,
        weight: 30.6,
        region_id: 3,
        image: "http://localhost:3000/uploads/dusclops.png",
        pokedex_id: 356,
        type1: 13,
        type2: null,
        generation: 3
      },
      {
        name: "Tropius",
        description: "It flies by flapping its broad leaves. Children enjoy the fruit around its neck.",
        height: 2.0,
        weight: 100.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/tropius.png",
        pokedex_id: 357,
        type1: 3,
        type2: 9,
        generation: 3
      },
      {
        name: "Chimecho",
        description: "Its cries echo inside its hollow body and sound like beautiful singing.",
        height: 0.6,
        weight: 1.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/chimecho.png",
        pokedex_id: 358,
        type1: 10,
        type2: null,
        generation: 3
      },
      {
        name: "Absol",
        description: "It senses disasters with its horn and appears before calamities.",
        height: 1.2,
        weight: 47.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/absol.png",
        pokedex_id: 359,
        type1: 15,
        type2: null,
        generation: 3
      },
      {
        name: "Wynaut",
        description: "It grows stronger by pushing its limits in play and combat.",
        height: 0.6,
        weight: 14.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/wynaut.png",
        pokedex_id: 360,
        type1: 10,
        type2: null,
        generation: 3
      },
      {
        name: "Snorunt",
        description: "It is said to bring good fortune to those it visits.",
        height: 0.7,
        weight: 16.8,
        region_id: 3,
        image: "http://localhost:3000/uploads/snorunt.png",
        pokedex_id: 361,
        type1: 5,
        type2: null,
        generation: 3
      },
      {
        name: "Glalie",
        description: "It freezes moisture in the air to create ice armor.",
        height: 1.5,
        weight: 256.5,
        region_id: 3,
        image: "http://localhost:3000/uploads/glalie.png",
        pokedex_id: 362,
        type1: 5,
        type2: null,
        generation: 3
      },
      {
        name: "Spheal",
        description: "It rolls across ice and snow. It is very playful.",
        height: 0.8,
        weight: 39.5,
        region_id: 3,
        image: "http://localhost:3000/uploads/spheal.png",
        pokedex_id: 363,
        type1: 5,
        type2: 2,
        generation: 3
      },
      {
        name: "Sealeo",
        description: "It balances things on its nose and dances playfully on ice.",
        height: 1.1,
        weight: 87.6,
        region_id: 3,
        image: "http://localhost:3000/uploads/sealeo.png",
        pokedex_id: 364,
        type1: 5,
        type2: 2,
        generation: 3
      },
      {
        name: "Walrein",
        description: "It protects its herd with powerful tusks and a thick blubber layer.",
        height: 1.4,
        weight: 150.6,
        region_id: 3,
        image: "http://localhost:3000/uploads/walrein.png",
        pokedex_id: 365,
        type1: 5,
        type2: 2,
        generation: 3
      },
      {
        name: "Clamperl",
        description: "Its pearls are extremely rare and highly valued.",
        height: 0.4,
        weight: 52.5,
        region_id: 3,
        image: "http://localhost:3000/uploads/clamperl.png",
        pokedex_id: 366,
        type1: 2,
        type2: null,
        generation: 3
      },
      {
        name: "Huntail",
        description: "It lives in the deepest parts of the sea and attracts prey with its glowing tail.",
        height: 1.7,
        weight: 27.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/huntail.png",
        pokedex_id: 367,
        type1: 2,
        type2: null,
        generation: 3
      },
      {
        name: "Gorebyss",
        description: "It lives in the southern seas and sucks body fluids from its prey.",
        height: 1.8,
        weight: 22.6,
        region_id: 3,
        image: "http://localhost:3000/uploads/gorebyss.png",
        pokedex_id: 368,
        type1: 2,
        type2: null,
        generation: 3
      },
      {
        name: "Relicanth",
        description: "A rare ancient Pokémon thought to be extinct. It hides in deep-sea trenches.",
        height: 1.0,
        weight: 23.4,
        region_id: 3,
        image: "http://localhost:3000/uploads/relicanth.png",
        pokedex_id: 369,
        type1: 2,
        type2: 12,
        generation: 3
      },
      {
        name: "Luvdisc",
        description: "Its heart-shaped body brings good luck in love.",
        height: 0.6,
        weight: 8.7,
        region_id: 3,
        image: "http://localhost:3000/uploads/luvdisc.png",
        pokedex_id: 370,
        type1: 2,
        type2: null,
        generation: 3
      },
      {
        name: "Bagon",
        description: "It dreams of flying and jumps off cliffs to strengthen its body.",
        height: 0.6,
        weight: 42.1,
        region_id: 3,
        image: "http://localhost:3000/uploads/bagon.png",
        pokedex_id: 371,
        type1: 14,
        type2: null,
        generation: 3
      },
      {
        name: "Shelgon",
        description: "Its shell is extremely hard. It prepares for its final evolution inside.",
        height: 1.1,
        weight: 110.5,
        region_id: 3,
        image: "http://localhost:3000/uploads/shelgon.png",
        pokedex_id: 372,
        type1: 14,
        type2: null,
        generation: 3
      },
      {
        name: "Salamence",
        description: "It finally grows wings and achieves its lifelong dream of flight.",
        height: 1.5,
        weight: 102.6,
        region_id: 3,
        image: "http://localhost:3000/uploads/salamence.png",
        pokedex_id: 373,
        type1: 14,
        type2: 9,
        generation: 3
      },
      {
        name: "Beldum",
        description: "It uses magnetic forces to move and communicate.",
        height: 0.6,
        weight: 95.2,
        region_id: 3,
        image: "http://localhost:3000/uploads/beldum.png",
        pokedex_id: 374,
        type1: 16,
        type2: 10,
        generation: 3
      },
      {
        name: "Metang",
        description: "A fusion of two Beldum. Its mind is linked by a magnetic nervous system.",
        height: 1.2,
        weight: 202.5,
        region_id: 3,
        image: "http://localhost:3000/uploads/metang.png",
        pokedex_id: 375,
        type1: 16,
        type2: 10,
        generation: 3
      },
      {
        name: "Metagross",
        description: "It has four brains that think in sync, giving it incredible intelligence.",
        height: 1.6,
        weight: 550.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/metagross.png",
        pokedex_id: 376,
        type1: 16,
        type2: 10,
        generation: 3
      },
      {
        name: "Regirock",
        description: "A legendary golem made entirely of stone. It repairs itself by adding rocks.",
        height: 1.7,
        weight: 230.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/regirock.png",
        pokedex_id: 377,
        type1: 12,
        type2: null,
        generation: 3
      },
      {
        name: "Regice",
        description: "It was born in an ice age. Its entire body is made of ice from that era.",
        height: 1.8,
        weight: 175.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/regice.png",
        pokedex_id: 378,
        type1: 5,
        type2: null,
        generation: 3
      },
      {
        name: "Registeel",
        description: "Its metal body is harder than any known metal.",
        height: 1.9,
        weight: 205.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/registeel.png",
        pokedex_id: 379,
        type1: 16,
        type2: null,
        generation: 3
      },
      {
        name: "Latias",
        description: "A legendary Pokémon that communicates empathetically with humans.",
        height: 1.4,
        weight: 40.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/latias.png",
        pokedex_id: 380,
        type1: 14,
        type2: 10,
        generation: 3
      },
      {
        name: "Latios",
        description: "It understands human speech and rarely shows itself.",
        height: 2.0,
        weight: 60.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/latios.png",
        pokedex_id: 381,
        type1: 14,
        type2: 10,
        generation: 3
      },
      {
        name: "Kyogre",
        description: "It can expand the oceans and is revered as a sea deity.",
        height: 4.5,
        weight: 352.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/kyogre.png",
        pokedex_id: 382,
        type1: 2,
        type2: null,
        generation: 3
      },
      {
        name: "Groudon",
        description: "It expanded the landmass and is worshipped as a land deity.",
        height: 3.5,
        weight: 950.0,
        region_id: 3,
        image: "http://localhost:3000/uploads/groudon.png",
        pokedex_id: 383,
        type1: 8,
        type2: null,
        generation: 3
      },
      {
        name: "Rayquaza",
        description: "It lived for hundreds of millions of years in the ozone layer.",
        height: 7.0,
        weight: 206.5,
        region_id: 3,
        image: "http://localhost:3000/uploads/rayquaza.png",
        pokedex_id: 384,
        type1: 14,
        type2: 9,
        generation: 3
      },
      {
        name: "Jirachi",
        description: "It grants wishes written on the tags on its head.",
        height: 0.3,
        weight: 1.1,
        region_id: 3,
        image: "http://localhost:3000/uploads/jirachi.png",
        pokedex_id: 385,
        type1: 16,
        type2: 10,
        generation: 3
      },
      {
        name: "Deoxys",
        description: "A virus mutated in space, giving rise to this powerful Pokémon.",
        height: 1.7,
        weight: 60.8,
        region_id: 3,
        image: "http://localhost:3000/uploads/deoxys.png",
        pokedex_id: 386,
        type1: 10,
        type2: null,
        generation: 3
      }


    ]

    for (let pokemon of poke) {
      await pool.query(`
                INSERT INTO pokemon (name, description, height, weight, region_id, image, pokedex_id, type1, type2, generation) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) ON CONFLICT (name) DO NOTHING`,
        [pokemon.name, pokemon.description, pokemon.height, pokemon.weight, pokemon.region_id, pokemon.image, pokemon.pokedex_id, pokemon.type1, pokemon.type2, pokemon.generation])
    }

    console.log("Berhasil Membuat Pokemon Gen 3")
  }
  catch (err) {
    console.log(err.message)
  }
}

module.exports = pokemonGen3Seeder