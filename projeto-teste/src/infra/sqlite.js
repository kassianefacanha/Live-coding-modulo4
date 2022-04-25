const sqlite3 = require('sqlite3').verbose();//importação sqlite3
const db = new sqlite3.Database('./src/infra/database.db')

module.exports = db