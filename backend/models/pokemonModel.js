const pool = require("../db")

const createPokemon = async (data) => {
    const { name, description, weight, height, region_id} = data

    const result = await pool.query(
        `INSERT INTO pokemon (name, description, weight, height, region_id) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [name, description, weight, height, region_id]
    )

    return result.rows[0]
}

const getPokemonById = async (id) => {
    const result = await pool.query(
        `SELECT 
            p.id,
            p.name,
            p.description,
            p.height,
            p.weight,
            json_build_object(
                'id', r.id,
                'name', r.name
            ) AS region
        FROM pokemon p
        LEFT JOIN region r ON p.region_id = r.id WHERE p.id = $1`,
        [id]
    )

    return result.rows[0]
}

const getAllPokemon = async () => {
    const result = await pool.query(
        `SELECT 
            p.id,
            p.name,
            p.description,
            p.height,
            p.weight,
            json_build_object(
                'id', r.id,
                'name', r.name
            ) AS region
        FROM pokemon p
        LEFT JOIN region r ON p.region_id = r.id ORDER BY id`
    )
    return result.rows
}

const deletePokemon = async (id) => {
    const result = await pool.query(
        `DELETE FROM pokemon WHERE id = $1 RETURNING *`,
        [id]
    )
    return result.rows[0]
}

const updatePokemon = async (id, name, description, weight, height, region_id) => {
    const result = await pool.query(
        `UPDATE pokemon SET name = $1, description = $2, weight = $3, height = $4, region_id = $5 WHERE id = $6 RETURNING *`,
        [name, description, weight, height, region_id, id]
    )
    return result.rows[0]
}

module.exports = {
    getAllPokemon,
    getPokemonById,
    createPokemon,
    deletePokemon,
    updatePokemon
}