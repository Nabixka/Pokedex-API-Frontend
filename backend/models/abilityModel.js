const pool = require("../db")

const getAllAbility = async () => {
    const result = await pool.query(`
        SELECT * FROM ability ORDER BY id`)

    return result.rows
}

const getAbilityById = async (id) => {
    const result = await pool.query(`
        SELECT * FROM ability WHERE id = $1`,
    [id])

    return result.rows[0]
}

const createAbility = async (data) => {
    const {name, description} = data
    
    const result = await pool.query(`
        INSERT INTO ability (name, description) VALUES ($1, $2) RETURNING *`,
    [name, description]
    )

    return result.rows[0]
}

const updateAbility = async (id, data) =>{
    const {name, description} = data
    
    const result = await pool.query(`
        UPDATE ability set name = $1, description = $2 WHERE id = $3 RETURNING *
        `,
    [name, description, id])

    return result.rows[0]
}

const deleteAbility = async (id) => {
    const result = await pool.query(`
        DELETE FROM ability WHERE id = $1 RETURNING *
        `, [id])

    return result.rows[0]
}

module.exports = { getAllAbility, getAbilityById, createAbility, updateAbility, deleteAbility }