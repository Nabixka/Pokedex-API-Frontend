const pool = require("./db");

const createTables = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS gen(
            id SERIAL PRIMARY KEY,
            no INT UNIQUE
            )
        `)

        await pool.query(`
            CREATE TABLE IF NOT EXISTS region (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) UNIQUE NOT NULL,
            gen_id INTEGER,

            FOREIGN KEY (gen_id) REFERENCES gen(id)
            )
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS type (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) UNIQUE NOT NULL
            )
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS ability (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) UNIQUE NOT NULL,
            description TEXT  NOT NULL
            )
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS move (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) UNIQUE NOT NULL,
            description TEXT NOT NULL,
            power INTEGER, 
            accuracy INTEGER,
            move_type INTEGER,

            FOREIGN KEY (move_type) REFERENCES type(id)
            )
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS pokemon (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) UNIQUE NOT NULL,
            description TEXT NOT NULL,
            height REAL NOT NULL,
            weight REAL NOT NULL,
            region_id INT NOT NULL,
            image TEXT NOT NULL,
            pokedex_id INT NOT NULL,
            type1 INT NOT NULL,
            type2 INT,
            generation INT,

            FOREIGN KEY (generation) REFERENCES gen(id),
            FOREIGN KEY (region_id) REFERENCES region(id),
            FOREIGN KEY (type1) REFERENCES type(id),
            FOREIGN KEY (type2) REFERENCES type(id)
            )
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS pokemon_weakness(
            id SERIAL PRIMARY KEY,
            pokemon_id INTEGER NOT NULL,
            pokemon_weakness INTEGER NOT NULL,
            
            FOREIGN KEY (pokemon_id) REFERENCES pokemon(id),
            FOREIGN KEY (pokemon_weakness) REFERENCES type(id)
            )
        `);



        await pool.query(`
            CREATE TABLE IF NOT EXISTS pokemon_move (
            id SERIAL PRIMARY KEY,
            pokemon_id INTEGER NOT NULL,
            move_id INTEGER NOT NULL,
            
            FOREIGN KEY (pokemon_id) REFERENCES pokemon(id) ON DELETE CASCADE,
            FOREIGN KEY (move_id) REFERENCES move(id)
            )
        `);

        await pool.query(`
          DO $$
          BEGIN
            IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'category') THEN
              CREATE TYPE category AS ENUM ('Berry', 'Potion', 'TM', 'HM', 'Battle', 'Key');
            END IF;
          END
          $$;
        `);

        await pool.query(`
            CREATE TYPE format AS ENUM ('GB', 'GBC', 'GBA', 'NDS', '3DS', 'NSP' )`)

        await pool.query(`
            CREATE TABLE IF NOT EXISTS items(
            id SERIAL PRIMARY KEY,
            name VARCHAR (100) UNIQUE NOT NULL,
            description text,
            category category
            )
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS evolution(
            id SERIAL PRIMARY KEY,
            pre_stage INT,
            post_stage INT,
            method VARCHAR,

            FOREIGN KEY (pre_stage) REFERENCES pokemon(id),
            FOREIGN KEY (post_stage) REFERENCES pokemon(id)
            )`)


        await pool.query(`
            CREATE TABLE IF NOT EXISTS games(
            id SERIAL PRIMARY KEY,
            name VARCHAR UNIQUE,
            image TEXT,
            console VARCHAR,
            developer VARCHAR,
            format format,
            file TEXT,
            gen_id INT,
            
            FOREIGN KEY (gen_id) REFERENCES gen(id)
            )
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS stats(
            id SERIAL PRIMARY KEY,
            pokemon_id INT NOT NULL,
            HP INT NOT NULL,
            Attack INT NOT NULL,
            Sp_Attack INT NOT NULL,
            Deff INT NOT NULL,
            Sp_Deff INT NOT NULL,
            Speed INT NOT NULL,
            
            FOREIGN KEY (pokemon_id) REFERENCES pokemon(id)
            )
        `)

        console.log("Berhasil membuat table")
    }
    catch (err) {
        console.error("ERROR, gagal membuat table: ", err.message)
    }
    finally {
        pool.end();
    }
};

createTables();