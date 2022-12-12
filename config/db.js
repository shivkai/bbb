const mysql = require('mysql')

const db = mysql.createConnection({
host: "sql6.freesqldatabase.com",
user: "sql6584110",
password: "3LTPJg8hEk",
database:"sql6584110" 
})

module.exports = db;