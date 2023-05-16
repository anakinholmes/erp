const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Mr.221b326",
  host: "localhost",
  port: 5432,
  database: "users"
});

module.exports = pool;