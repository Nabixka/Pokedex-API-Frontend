const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "host",
    database: "pokedex",
    password: "pw",
    port: 5432,
});

module.exports = pool;