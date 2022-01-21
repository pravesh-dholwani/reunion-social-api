const Pool = require('pg').Pool
const pool = new Pool({
  connectionString:"postgres://gvtymtutqatxvd:cdf7d9429ed19ebb0311a186a257e1e1a45360ba48648f0eb029313f855e8144@ec2-18-210-159-154.compute-1.amazonaws.com:5432/dboufqchuerjnp",
  ssl:{
      rejectUnauthorized:false
  }
})

module.exports=pool;