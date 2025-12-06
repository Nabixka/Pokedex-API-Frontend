const pool = require("../db")

const getAllGen = async () => {
    const result = await pool.query(`
        SELECT * FROM gen ORDER BY no `)

    return result.rows
}

const createGen = async (data) => {
    const { no } = data 

    const create = await pool.query(`
        INSERT INTO gen (no) VALUES ($1) RETURNING *`, 
        [no])

    const isi = create.rows[0].id

    const result = await pool.query(`
        SELECT * FROM gen WHERE id = $1`, 
        [isi])

    return result.rows[0]
}

const getGenByNo = async (no) => {
    const result = await pool.query(`
        SELECT * FROM gen WHERE no = $1`, 
        [no])

    return result.rows[0]
}

const getGenById = async (id) => {
    const result = await pool.query(`
        SELECT * FROM gen WHERE id = $1`, 
        [id])

    return result.rows[0]
}

const deleteGen = async (id) => {
    const result = await pool.query(`
        DELETE FROM gen WHERE id = $1`, 
        [id])
    
    return result.rows[0]
}

const updateGen = async (no, id) => {

    const update = await pool.query(`
        UPDATE gen SET no = $1 WHERE id = $2 RETURNING *`, 
        [no, id])

    const newId = update.rows[0].id
    
    const result = await pool.query(`
        SELECT * FROM gen WHERE id = $1`,
    [newId])

    return result.rows[0]

}


module.exports = { getAllGen, createGen, getGenByNo, getGenById, deleteGen, updateGen }