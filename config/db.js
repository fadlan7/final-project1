const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'cobaFinalProject1',
  password: 'admin',
  port: '5432',
});

module.exports = pool;
