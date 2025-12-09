const pool = require("../db")

const getGame = async () => {
    const result = await pool.query(`
        SELECT
        gm.id,
        gm.name,
        gm.image,
        json_build_object(
        'id', g.id,
        'no', g.no) AS generation,
        gm.console,
        gm.developer
        
        FROM games gm
        LEFT JOIN gen g ON gm.gen_id = g.id`)

    return result.rows
}

const getGameById = async (id) => {
    const result = await pool.query(`
        SELECT 
        gm.id,
        gm.name,
        gm.image,
        json_build_object(
        'id', g.id,
        'no', g.no) AS generation,
        gm.console,
        gm.developer
        
        FROM games gm
        LEFT JOIN gen g ON gm.gen_id = g.id WHERE gm.id = $1`, 
        [id])

    return result.rows[0]
}

const deleteGame = async (id) => {
    const result = await pool.query(`
        DELETE FROM games WHERE id = $1`,
    [id])

    return result.rows[0]
}

const createGame = async (data) => {
    const {name, image, gen_id} = data

    const create = await pool.query(`
        INSERT INTO games (name, image, gen_id) VALUES ($1, $2, $3) RETURNING id`,
    [name, image, gen_id])

    const newId = create.rows[0].id
    
    const result = await pool.query(`
        SELECT
        gm.id,
        gm.name,
        gm.image,
        json_build_object(
        'id', g.id,
        'no', g.no) AS generation,
        gm.console,
        gm.developer
        
        FROM games gm
        LEFT JOIN gen g ON gm.gen_id = g.id WHERE gm.id = $1`,
    [newId])

    return result.rows[0]
}

const updateGame = async (id, data) => {
    const {name, image, gen_id, console, developer} = data

    const update = await pool.query(`
        UPDATE games SET name = $1, image = $2, gen_id = $3, console = $5, developer = $6 WHERE id = $4 RETURNING *`,
    [name, image, gen_id, id, console, developer])

    const newId = update.rows[0].id
    const result = await pool.query(`
        SELECT 
        gm.id,
        gm.name,
        gm.image,
        json_build_object(
        'id', g.id,
        'no', g.no) AS generation,
        gm.console,
        gm.developer
        
        FROM games gm
        LEFT JOIN gen g ON gm.gen_id = g.id WHERE gm.id = $1`,
    [newId])

    return result.rows[0]
}

const getGameName = async (name) => {
    const result = await pool.query(`
        SELECT
        gm.id,
        gm.name,
        gm.image,
        json_build_object(
        'id', g.id,
        'no', g.no) AS generation,
        gm.console,
        gm.developer
        
        FROM games gm
        LEFT JOIN gen g ON gm.id = g.id WHERE name = $1`,
    [name])

    return result.rows[0]
}

module.exports = { getGame, getGameById, createGame, updateGame, deleteGame, getGameName }