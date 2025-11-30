const pool = require("./db");

const createTables = async () => {
    try{
        await pool.query(`
            CREATE TABLE IF NOT EXISTS region (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL
            )
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS type (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL
            )
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS ability (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            description TEXT  NOT NULL
            )
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS move (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            description TEXT NOT NULL,
            power INTEGER NOT NULL, 
            accuracy INTEGER NOT NULL 
            )
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS pokemon (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            description TEXT NOT NULL,
            height INT NOT NULL,
            weight INT NOT NULL,
            region_id INT NOT NULL,

            FOREIGN KEY (region_id) REFERENCES region(id)
            )
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS pokemon_type (
            id SERIAL PRIMARY KEY,
            pokemon_id INTEGER NOT NULL,
            type_id INTEGER NOT NULL,
            
            FOREIGN KEY (pokemon_id) REFERENCES pokemon(id) ON DELETE CASCADE,
            FOREIGN KEY (type_id) REFERENCES type(id)
            )
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS pokemon_ability (
            id SERIAL PRIMARY KEY,
            pokemon_id INTEGER NOT NULL,
            ability_id INTEGER NOT NULL,
            
            FOREIGN KEY (pokemon_id) REFERENCES pokemon(id) ON DELETE CASCADE,
            FOREIGN KEY (ability_id) REFERENCES ability(id)
            )
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS pokemon_move (
            id SERIAL PRIMARY KEY NOT NULL,
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
              CREATE TYPE category AS ENUM ('berry', 'potion', 'TM', 'HM', 'battle');
            END IF;
          END
          $$;
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS items(
            id SERIAL PRIMARY KEY,
            name VARCHAR (100) NOT NULL,
            description text NOT NULL,
            category category NOT NULL
            )
            `)

        await pool.query(`
            CREATE TABLE IF NOT EXISTS evolution(
            id SERIAL PRIMARY KEY,
            stage1 INT NOT NULL,
            stage2 INT ,
            stage3 INT,

            FOREIGN KEY (stage1) REFERENCES pokemon(id),
            FOREIGN KEY (stage2) REFERENCES pokemon(id),
            FOREIGN KEY (stage3) REFERENCES pokemon(id)
            )`)

        console.log("Berhasil membuat table")
    }
    catch (err){
        console.error("ERROR, gagal membuat table: ", err.message)
    }
    finally{
        pool.end();
    }
};

createTables();