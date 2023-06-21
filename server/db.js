const Pool = require('pg').Pool;

const pool = new Pool({
  user: "admin",
  password: "admin",
  host: "127.0.0.1",
  database: "todo",
  port: 5432,
  idleTimeoutMillis: 0,
  connectionTimeoutMillis: 0,
})


module.exports = pool;