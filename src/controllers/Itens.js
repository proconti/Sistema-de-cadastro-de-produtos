import { openDb } from "../database/config.js";


export default async function createTable(){
   const db =  await openDb()
   db.exec(`CREATE TABLE IF NOT EXISTS Itens(
       item_id INTEGER PRIMARY KEY AUTOINCREMENT,
       item VARCHAR(30) NOT NULL,
       embalagem VARCHAR(30) NOT NULL,
       quantidade iNT DEFAULT 0
   )`)
}



