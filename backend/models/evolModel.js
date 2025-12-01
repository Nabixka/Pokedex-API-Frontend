const pool = require("../db")

const getAllEvol = async () => {
    const result = await pool.query(`
        SELECT 
        e.id,

        json_build_object(
            'id', p1.id,
            'name', p1.name,
            'description', p1.description,
            'height', p1.height,
            'weight', p1.weight,
            'region', json_build_object(
                'id', r1.id,
                'name', r1.name
                )
            ) AS stage1,
        
        json_build_object(
            'id', p2.id,
            'name', p2.name,
            'description', p2.description,
            'height', p2.height,
            'weight', p2.weight,
            'region', json_build_object(
                'id', r2.id,
                'name', r2.name
                )
            ) AS stage2,
        
        json_build_object(
            'id', p3.id,
            'name', p3.name,
            'description', p3.description,
            'height', p3.height,
            'weight', p3.weight,
            'region', json_build_object(
                'id', r3.id,
                'name', r3.name
                )
            ) AS stage3

        FROM evolution e
        LEFT JOIN pokemon p1 ON e.stage1 = p1.id
        LEFT JOIN region r1 ON p1.region_id = r1.id
        
        LEFT JOIN pokemon p2 ON e.stage2 = p2.id
        LEFT JOIN region r2 ON p2.region_id = r2.id
        
        LEFT JOIN pokemon p3 ON e.stage3 = p3.id
        LEFT JOIN region r3 ON p3.region_id = r3.id

        `)

    return result.rows
}

const getEvolById = async (id) => {
    const result = await pool.query(`
        SELECT 
        e.id,

        json_build_object(
            'id', p1.id,
            'name', p1.name,
            'description', p1.description,
            'height', p1.height,
            'weight', p1.weight,
            'region', json_build_object(
                'id', r1.id,
                'name', r1.name
                )
            ) AS stage1,
            
        json_build_object(
            'id', p2.id,
            'name', p2.name,
            'description', p2.description,
            'height', p2.height,
            'weight', p2.weight,
            'region', json_build_object(
                'id', r2.id,
                'name', r2.name
                )
            ) AS stage2,

        json_build_object(
            'id', p3.id,
            'name', p3.name,
            'description', p3.description,
            'height', p3.height,
            'weight', p3.weight,
            'region', json_build_object(
                'id', r3.id,
                'name', r3.name
                )
            ) AS stage3

        FROM evolution e

        LEFT JOIN pokemon p1 ON e.stage1 = p1.id
        LEFT JOIN region r1 ON p1.region_id = r1.id

        LEFT JOIN pokemon p2 ON e.stage2 = p2.id
        LEFT JOIN region r2 ON p2.region_id = r2.id
        
        LEFT JOIN pokemon p3 ON e.stage3 = p3.id
        LEFT JOIN region r3 ON p3.region_id = r3.id
        

         WHERE e.id = $1`,
    [id])

    return result.rows[0]
}

const createEvol = async (data) => {
    const {stage1, stage2, stage3} = data
    const create = await pool.query(`
        INSERT INTO evolution (stage1, stage2, stage3) VALUES ($1, $2, $3) RETURNING *`,
    [stage1, stage2, stage3])

    const isi = create.rows[0].id

    const result = await pool.query(`
        SELECT 
        e.id,

        json_build_object(
            'id', p1.id,
            'name', p1.name,
            'description', p1.description,
            'height', p1.height,
            'weight', p1.weight,
            'region', json_build_object(
                'id', r1.id,
                'name', r1.name
                )
            ) AS stage1,
            
        json_build_object(
            'id', p2.id,
            'name', p2.name,
            'description', p2.description,
            'height', p2.height,
            'weight', p2.weight,
            'region', json_build_object(
                'id', r2.id,
                'name', r2.name
                )
            ) AS stage2,

        json_build_object(
            'id', p3.id,
            'name', p3.name,
            'description', p3.description,
            'height', p3.height,
            'weight', p3.weight,
            'region', json_build_object(
                'id', r3.id,
                'name', r3.name
                )
            ) AS stage3

        FROM evolution e

        LEFT JOIN pokemon p1 ON e.stage1 = p1.id
        LEFT JOIN region r1 ON p1.region_id = r1.id

        LEFT JOIN pokemon p2 ON e.stage2 = p2.id
        LEFT JOIN region r2 ON p2.region_id = r2.id
        
        LEFT JOIN pokemon p3 ON e.stage3 = p3.id
        LEFT JOIN region r3 ON p3.region_id = r3.id
        

         WHERE e.id = $1`, 
         [isi])

    return result.rows[0]
}

const deleteEvol = async (id) => {
    const result = await pool.query(`
        DELETE FROM evolution WHERE id = $1 RETURNING *`,
    [id])

    return result.rows[0]
}

const updateEvol = async (id, data) => {
    const {stage1, stage2, stage3} = data
    
    const update = await pool.query(`
        UPDATE evolution SET stage1 = $1, stage2 = $2, stage3 = $3 WHERE id = $4 RETURNING *`,
    [stage1, stage2, stage3, id])

    const isi = update.rows[0].id

    const result = await pool.query(`
        SELECT 
        e.id,

        json_build_object(
            'id', p1.id,
            'name', p1.name,
            'description', p1.description,
            'height', p1.height,
            'weight', p1.weight,
            'region', json_build_object(
                'id', r1.id,
                'name', r1.name
                )
            ) AS stage1,
            
        json_build_object(
            'id', p2.id,
            'name', p2.name,
            'description', p2.description,
            'height', p2.height,
            'weight', p2.weight,
            'region', json_build_object(
                'id', r2.id,
                'name', r2.name
                )
            ) AS stage2,

        json_build_object(
            'id', p3.id,
            'name', p3.name,
            'description', p3.description,
            'height', p3.height,
            'weight', p3.weight,
            'region', json_build_object(
                'id', r3.id,
                'name', r3.name
                )
            ) AS stage3

        FROM evolution e

        LEFT JOIN pokemon p1 ON e.stage1 = p1.id
        LEFT JOIN region r1 ON p1.region_id = r1.id

        LEFT JOIN pokemon p2 ON e.stage2 = p2.id
        LEFT JOIN region r2 ON p2.region_id = r2.id
        
        LEFT JOIN pokemon p3 ON e.stage3 = p3.id
        LEFT JOIN region r3 ON p3.region_id = r3.id
        

         WHERE e.id = $1`,
    [isi])

    return result.rows[0]
}

module.exports = { getAllEvol, getEvolById, createEvol, deleteEvol, updateEvol }