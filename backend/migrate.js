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
            description TEXT 
            )
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS move (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            description TEXT,
            power INTEGER, 
            accuracy INTEGER 
            )
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS pokemon (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            description TEXT,
            height INT,
            weight INT,
            region_id INT,

            FOREIGN KEY (region_id) REFERENCES region(id)
            )
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS pokemon_type (
            id SERIAL PRIMARY KEY,
            pokemon_id INTEGER,
            type_id INTEGER,
            
            FOREIGN KEY (pokemon_id) REFERENCES pokemon(id) ON DELETE CASCADE,
            FOREIGN KEY (type_id) REFERENCES type(id)
            )
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS pokemon_ability (
            id SERIAL PRIMARY KEY,
            pokemon_id INTEGER,
            ability_id INTEGER,
            
            FOREIGN KEY (pokemon_id) REFERENCES pokemon(id) ON DELETE CASCADE,
            FOREIGN KEY (ability_id) REFERENCES ability(id)
            )
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS pokemon_move (
            id SERIAL PRIMARY KEY,
            pokemon_id INTEGER,
            move_id INTEGER,
            
            FOREIGN KEY (pokemon_id) REFERENCES pokemon(id) ON DELETE CASCADE,
            FOREIGN KEY (move_id) REFERENCES move(id)
            )
        `);

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