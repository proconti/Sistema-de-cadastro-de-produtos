import { openDb } from "../database/config.js";


export default async function createTable(){
   var db =  await openDb()
   db.exec(`CREATE TABLE IF NOT EXISTS Itens(
       item_id INTEGER PRIMARY KEY AUTOINCREMENT,
       item VARCHAR(30) NOT NULL,
       embalagem VARCHAR(30) NOT NULL,
       quantidade iNT DEFAULT 0
   )`)

   // db.exec(`CREATE TABLE IF NOT EXISTS Usuarios(
   //     usuario_id INTEGER PRIMARY KEY AUTOINCREMENT,
   //     name VARCHAR(30) NOT NULL UNIQUE,
   //     password VARCHAR(30) NOT NULL
   // )`)
   
}



