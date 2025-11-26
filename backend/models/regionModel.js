const pool = require("../db")

const createRegion = async (data) => {
    const {name} = data

    const result = await pool.query(
        `INSERT INTO region (name) VALUES ($1) RETURNING *`,
        [name]
    )

    return result.rows[0]
}

const getAllRegion = async () => {
    const result = await pool.query(
        `SELECT * FROM region`
    )

    return result.rows
}

const getRegionById = async (id) => {
    const result = await pool.query(
        `SELECT * FROM region WHERE id = $id`,
        [id]
    )

    return result.rows[0]
}


module.exports = {createRegion, getAllRegion, getRegionById}