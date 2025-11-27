const pool = require("../db")

const getAllItem = async() => {
    const result = await pool.query(`
        SELECT * FROM items ORDER BY id
        `)
    return result.rows
}

const createItem = async (data) => {
    const { name, description, category } = data

    const result = await pool.query(`
        INSERT INTO items (name, description, category) VALUES ($1, $2, $3) RETURNING *
        `,
    [name, description, category])

    return result.rows[0]
}

const getItemById = async (id) => {
    const result = await pool.query(`
        SELECT * FROM items WHERE id = $1`,
    [id])

    return result.rows[0]
}

const deleteItem = async (id) => {
    const result = await pool.query(`
        DELETE FROM items where id = $1`,
    [id])

    return result.rows[0]
}

module.exports = { getAllItem, createItem, getItemById, deleteItem }