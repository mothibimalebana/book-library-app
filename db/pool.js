const { Pool } = require("pg");
require("dotenv").config();

module.exports = new Pool({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DATABASE}`,
})