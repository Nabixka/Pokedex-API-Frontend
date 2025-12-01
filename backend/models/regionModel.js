const pool = require("../db")

const createRegion = async (data) => {
    const {name} = data

    const create = await pool.query(
        `INSERT INTO region (name) VALUES ($1) RETURNING *`,
        [name]
    )

    const isi = create.rows[0].id

    const result = await pool.query(`
        SELECT * FROM region WHERE id = $1`,
    [isi])

    return result.rows[0]
}

const getAllRegion = async () => {
    const result = await pool.query(
        `SELECT * FROM region ORDER BY id`
    )

    return result.rows
}

const getRegionById = async (id) => {
    const result = await pool.query(
        `SELECT * FROM region WHERE id = $1`,
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

const updateRegion = async (id, name) => {
    const update = await pool.query(
        `UPDATE region SET name = $1 WHERE id = $2 RETURNING *`,
        [name, id]
    )

    const isi = update.rows[0].id

    const result = await pool.query(`
        SELECT * FROM region WHERE id = $1`,
    [isi])
    return result.rows[0]
}

module.exports = {createRegion, getAllRegion, getRegionById, deleteRegion, updateRegion}