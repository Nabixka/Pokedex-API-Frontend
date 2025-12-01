const pool = require("../db")

const getAllType = async () => {
    const result = await pool.query(`
        SELECT * FROM type type ORDER BY id    
    `)
    return result.rows
}

const getTypeById = async (id) => {
    const result = await pool.query(`
        SELECT * FROM type WHERE id = $1`,
        [id]
    )
    
    return result.rows[0]
}

const createType = async (data) => {
    const {name} = data
    const insert = await pool.query(`
        INSERT INTO type (name) VALUES ($1) RETURNING *`,
        [name]
    )

    const isi = insert.rows[0].id

    const result = await pool.query(`
        SELECT * FROM type WHERE id = $1`,
    [isi])

    return result.rows[0]
}

const deleteType = async (id) => {
    const result = await pool.query(`
        DELETE FROM type WHERE id = $1 RETURNING *`,
    [id])

    return result.rows[0]
}

const updateType = async (id, name) => {
    const update = await pool.query(`UPDATE type SET name = $1 WHERE id = $2 RETURNING *`,
    [name, id])

    const isi = update.rows[0].id

    const result = await pool.query(`SELECT * FROM type WHERE id = $1`,
        [isi]
    )

    return result.rows[0]
}

module.exports = {getAllType, getTypeById, createType, deleteType, updateType}