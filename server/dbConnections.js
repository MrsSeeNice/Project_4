import mysql from 'mysql2'

const db = mysql.createConnection ( {
  host: 'localhost',
  user: 'root',
  password: 'SNcn123!@#',
  database: 'FavoriteColors'
})

db.connect ((err)=> {
  if (err) {
    console.log ("Error on DB connect:", err)
    return;
  }
  console.log ("Connected to FavoriteColors")
})

export default db;