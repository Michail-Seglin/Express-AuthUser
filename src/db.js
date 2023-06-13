const { Pool } = require('pg');

const pool = new Pool({
    password: "Javascript23",
    port: 5432,
    host: "localhost",
    database: "contacts",
    user: "postgres"
});

module.exports = pool;
