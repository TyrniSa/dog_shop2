const { DB } = require('./config.js');
const Pool = require('pg').Pool;

const pool = new Pool({
  user: DB.PGUSER,
  host: DB.PGHOST,
  database: DB.PGDATABASE,
  password: DB.PGPASSWORD,
  port: DB.PGPORT
});

module.exports = pool;