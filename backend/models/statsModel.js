const pool = require("../db")

const getAllStats = async () => {
    const result = await pool.query(`
        SELECT
        s.id,
        json_build_object(
        'id', p.id,
        'name', p.name) AS pokemon,
        s.HP,
        s.Attack,
        s.Sp_Attack,
        s.Deff,
        s.Sp_Deff,
        s.Speed,
        (s.HP + s.Attack + s.Sp_Attack + s.Deff + s.Sp_Deff + s.Speed) AS total
        
        FROM stats s
        LEFT JOIN pokemon p ON s.pokemon_id = p.id`)

        return result.rows
}

const getStatsById = async (pokemon_id) => {
    const result = await pool.query(`
        SELECT
        s.id,
        json_build_object(
        'id', p.id,
        'name', p.name) AS pokemon,
        s.HP,
        s.Attack,
        s.Sp_Attack,
        s.Deff,
        s.Sp_Deff,
        s.Speed,
        (s.HP + s.Attack + s.Sp_Attack + s.Deff + s.Sp_Deff + s.Speed) AS total
        
        FROM stats s
        LEFT JOIN pokemon p ON s.pokemon_id = p.id 
        WHERE s.pokemon_id = $1`, [pokemon_id] 
    )

    return result.rows[0]

} 

module.exports = { getAllStats, getStatsById }