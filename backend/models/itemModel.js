const pool = require("../db")

const getAllItem = async() => {
    const result = await pool.query(`
        SELECT * FROM items ORDER BY id
        `)
    return result.rows
}

const createItem = async (data) => {
    const { name, description, category } = data

    const create = await pool.query(`
        INSERT INTO items (name, description, category) VALUES ($1, $2, $3) RETURNING *
        `,
    [name, description, category])

    const isi = create.rows[0].id

    const result = await pool.query(`
        SELECT * FROM items WHERE id = $1`,
    [isi])


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

const updateItem = async (id, data) => {
    const { name, description, category} = data

    const update = await pool.query(`
        UPDATE items SET name = $1, description = $2, category = $3 RETURNING *`,
    [name, description, category])

    const isi = update.rows[0].id

    const result = await pool.query(`
        SELECT * FROM items WHERE id = $1`,
    [isi])

    return result.rows[0]
}

module.exports = { getAllItem, createItem, getItemById, deleteItem, updateItem }