const pool = require("../db")

const createPokemon = async (data) => {
    const { name, description, weight, height, region_id, image, pokedex_id, type1, type2} = data

    const create = await pool.query(
        `INSERT INTO pokemon (name, description, weight, height, region_id, image, pokedex_id, type1, type2) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
        [name, description, weight, height, region_id, image, pokedex_id, type1, type2]
    )

    const isi = create.rows[0].id

    const result = await pool.query(
       `SELECT 
            p.id,
            p.name,
            p.description,
            p.height,
            p.weight,
            p.image,
            p.pokedex_id,
            json_build_object(
                'id', r.id,
                'name', r.name
            ) AS region,
            json_build_object(
                'id', t1.id,
                'name', t1.name
            ) AS type1,
            json_build_object(
                'id', t2.id,
                'name', t2.name
            ) AS type2

        FROM pokemon p
        LEFT JOIN region r ON p.region_id = r.id 
        LEFT JOIN type t1 ON p.type1 = t1.id 
        LEFT JOIN type t2 ON p.type2 = t2.id
        WHERE p.id = $1`,
        [isi])

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
            p.image,
            p.pokedex_id,
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
            p.image,
            p.pokedex_id,
            json_build_object(
                'id', r.id,
                'name', r.name
            ) AS region,
            json_build_object(
                'id', t1.id,
                'name', t1.name
            ) AS type1,
            json_build_object(
                'id', t2.id,
                'name', t2.name
            ) AS type2

        FROM pokemon p
        LEFT JOIN region r ON p.region_id = r.id 
        LEFT JOIN type t1 ON p.type1 = t1.id 
        LEFT JOIN type t2 ON p.type2 = t2.id
        ORDER BY pokedex_id` 
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

const updatePokemon = async (id, data) => {
    const { name, description, weight, height, region_id, image, pokedex_id, type1, type2} = data
    const update = await pool.query(
        `UPDATE pokemon SET name = $1, description = $2, weight = $3, height = $4, region_id = $5, image = $6, pokedex_id = $7, type1 = $8, type2 = $9 WHERE id = $10 RETURNING *`,
        [name, description, weight, height, region_id, image, pokedex_id, type1, type2, id]
    )

    const isi = update.rows[0].id

    const result = await pool.query(
       `SELECT 
            p.id,
            p.name,
            p.description,
            p.height,
            p.weight,
            p.image,
            p.pokedex_id,
            json_build_object(
                'id', r.id,
                'name', r.name
            ) AS region,
            json_build_object(
                'id', t1.id,
                'name', t1.name
            ) AS type1,
            json_build_object(
                'id', t2.id,
                'name', t2.name
            ) AS type2

        FROM pokemon p
        LEFT JOIN region r ON p.region_id = r.id 
        LEFT JOIN type t1 ON p.type1 = t1.id 
        LEFT JOIN type t2 ON p.type2 = t2.id
        WHERE p.id = $1`,
        [isi])

    return result.rows[0]
}

module.exports = { getAllPokemon, getPokemonById, createPokemon, deletePokemon, updatePokemon
}