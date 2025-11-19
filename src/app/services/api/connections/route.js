// /lib/db.js
import mysql from 'mysql2/promise';

let connection;

export default async function getDB() {
  if (!connection) {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    });
  } else {
    console.error("Error Connections");    
  }
  return connection;
}
