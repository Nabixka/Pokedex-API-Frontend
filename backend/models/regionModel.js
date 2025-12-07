const pool = require("../db")

const createRegion = async (data) => {
    const {name, gen_id} = data

    const create = await pool.query(
        `INSERT INTO region (name, gen_id) VALUES ($1, $2) RETURNING *`,
        [name, gen_id]
    )

    const isi = create.rows[0].id

    const result = await pool.query(`
        SELECT
        r.id,
        r.name,
        json_build_object(
        'id', g.id,
        'no', g.no
        ) AS generation

        FROM region r 
        LEFT JOIN gen g ON r.gen_id = g.id
        WHERE r.id = $1`,
    [isi])

    return result.rows[0]
}

const getAllRegion = async () => {
    const result = await pool.query(
        `SELECT 
        r.id,
        r.name,
        json_build_object(
            'id', g.id,
            'no', g.no
        ) AS generation

        FROM region r
        LEFT JOIN gen g ON r.gen_id = g.id
    `)

    return result.rows
}

const getRegionById = async (id) => {
    const result = await pool.query(
        `SELECT
        r.id,
        r.name,
        json_build_object(
        'id', g.id,
        'no', g.no
        ) AS generation
        
        FROM region r
        LEFT JOIN gen g ON r.gen_id = g.id 
        WHERE r.id = $1
        `,
        [id]
    )

    return result.rows[0]
}

const deleteRegion = async (id) => {
    const result = await pool.query(
        `DELETE FROM region WHERE id = $1 RETURNING *`,
        [id]
    )

    return result.rows[0]
}

const updateRegion = async (id, data) => {
    const { name, gen_id } = data
    const update = await pool.query(
        `UPDATE region SET name = $1, gen_id = $2 WHERE id = $3 RETURNING *`,
        [name, gen_id, id]
    )

    const isi = update.rows[0].id

    const result = await pool.query(`
        SELECT
        r.id,
        r.name,
        json_build_object(
        'id', g.id,
        'no', g.no
        ) AS generation
         
        FROM region r
        LEFT JOIN gen g ON r.gen_id = g.id 
        WHERE r.id = $1`,

    [isi])
    return result.rows[0]
}

module.exports = {createRegion, getAllRegion, getRegionById, deleteRegion, updateRegion}