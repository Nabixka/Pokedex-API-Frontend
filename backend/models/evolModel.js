const pool = require("../db")

const getEvol = async () => {
    const result = await pool.query(`
        SELECT 
        e.id,

        json_build_object(
        'id', p1.id,
        'name', p1.name,
        'pokedex_id', p1.pokedex_id) AS pre_stage,
        
        json_build_object(
        'id', p2.id,
        'name', p2.name,
        'pokedex_id', p2.pokedex_id) AS post_stage,
    
        e.method

        FROM evolution e
        LEFT JOIN pokemon p1 ON e.pre_stage = p1.id
        LEFT JOIN pokemon p2 ON e.post_stage = p2.id
    `)

    return result.rows
}

const deleteEvol = async (id) => {
    const result = await pool.query(`
        DELETE FROM evolution WHERE id = $1`,
        [id])

    return result.rows[0]
}

const createEvol = async (data) => {
    const { pre_stage, post_stage, method } = data

    const create = await pool.query(`
        INSERT INTO evolution (pre_stage, post_stage, method) VALUES ($1, $2, $3) RETURNING id`,
        [pre_stage, post_stage, method])

    const newId = create.rows[0].id

    const result = await pool.query(`
        SELECT 
        e.id,

        json_build_object(
        'id', p1.id,
        'name', p1.name,
        'pokedex_id', p1.pokedex_id) AS pre_stage,
        
        json_build_object(
        'id', p2.id,
        'name', p2.name,
        'pokedex_id', p2.pokedex_id) AS post_stage,
    
        e.method

        FROM evolution e
        LEFT JOIN pokemon p1 ON e.pre_stage = p1.id
        LEFT JOIN pokemon p2 ON e.post_stage = p2.id
        WHERE e.id = $1
        
        `, [newId])

    return result.rows[0]
}

const updateEvol = async (data, id) => {
    const { pre_stage, post_stage, method } = data
    const update = await pool.query(`
        UPDATE evolution SET pre_stage = $1, post_stage = $2, method = $3 WHERE id = $4 RETURNING id`,
        [pre_stage, post_stage, method, id])

    const newId = update.rows[0].id

    const result = await pool.query(`
        SELECT 
        e.id,

        json_build_object(
        'id', p1.id,
        'name', p1.name,
        'pokedex_id', p1.pokedex_id) AS pre_stage,
        
        json_build_object(
        'id', p2.id,
        'name', p2.name,
        'pokedex_id', p2.pokedex_id) AS post_stage,
    
        e.method

        FROM evolution e
        LEFT JOIN pokemon p1 ON e.pre_stage = p1.id
        LEFT JOIN pokemon p2 ON e.post_stage = p2.id
        WHERE e.id = $1
    
    `, [newId])

    return result.rows[0]

}

const getEvolById = async (id) => {
    const result = await pool.query(`
        SELECT 
        e.id,

        json_build_object(
        'id', p1.id,
        'name', p1.name,
        'pokedex_id', p1.pokedex_id) AS pre_stage,
        
        json_build_object(
        'id', p2.id,
        'name', p2.name,
        'pokedex_id', p2.pokedex_id) AS post_stage,
    
        e.method

        FROM evolution e
        LEFT JOIN pokemon p1 ON e.pre_stage = p1.id
        LEFT JOIN pokemon p2 ON e.post_stage = p2.id
        WHERE e.id = $1
    
        `, [id])

    return result.rows[0]
}


const getEvolutionChain = async (pokedex_id) => {
    const result = await pool.query(`
        WITH RECURSIVE

        start_pokemon AS (
            SELECT id, name, pokedex_id, image
            FROM pokemon
            WHERE pokedex_id = $1
        ),

        ancestors AS (
            SELECT p.id, p.name, p.pokedex_id, p.image
            FROM pokemon p
            JOIN start_pokemon sp ON p.id = sp.id

            UNION

            SELECT p2.id, p2.name, p2.pokedex_id, p2.image
            FROM evolution e
            JOIN ancestors a ON e.post_stage = a.id
            JOIN pokemon p2 ON e.pre_stage = p2.id
        ),

        base AS (
            SELECT *
            FROM ancestors
            WHERE id NOT IN (SELECT post_stage FROM evolution)
            LIMIT 1
        ),

        descendants AS (
            SELECT 
                e.pre_stage,
                e.post_stage,
                e.method
            FROM evolution e
            JOIN base b ON e.pre_stage = b.id

            UNION ALL

            SELECT 
                e.pre_stage,
                e.post_stage,
                e.method
            FROM evolution e
            JOIN descendants d ON e.pre_stage = d.post_stage
        )

        SELECT 
            b.id AS base_id,
            b.name AS base_name,
            b.pokedex_id AS base_pokedex,
            b.image AS base_image,

            p1.id AS pre_id,
            p1.name AS pre_name,
            p1.pokedex_id AS pre_pokedex,
            p1.image AS pre_image,

            p2.id AS post_id,
            p2.name AS post_name,
            p2.pokedex_id AS post_pokedex,
            p2.image AS post_image,

            d.method
        FROM base b
        LEFT JOIN descendants d ON true
        LEFT JOIN pokemon p1 ON d.pre_stage = p1.id
        LEFT JOIN pokemon p2 ON d.post_stage = p2.id
    `, [pokedex_id])

    if (result.rows.length === 0) return null

    const base = {
        id: result.rows[0].base_id,
        name: result.rows[0].base_name,
        pokedex_id: result.rows[0].base_pokedex,
        image: result.rows[0].base_image
    }

    const edges = result.rows
        .filter(r => r.post_id)
        .map(r => ({
            pre_id: r.pre_id,
            post_id: r.post_id,
            post_name: r.post_name,
            post_pokedex: r.post_pokedex,
            post_image: r.post_image,
            method: r.method
        }))

    const buildTree = (id) => {
        return edges
            .filter(e => e.pre_id === id)
            .map(e => ({
                id: e.post_id,
                name: e.post_name,
                pokedex_id: e.post_pokedex,
                image: e.post_image,
                method: e.method,
                evolves_to: buildTree(e.post_id)
            }))
    }

    return {
        base,
        chain: buildTree(base.id)
    }
}


module.exports = { getEvol, deleteEvol, updateEvol, getEvolById, createEvol, getEvolutionChain }