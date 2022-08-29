import { openDb } from "../database/config.js";


export default async function Data(req,res){
    const db = await openDb()
    try {
        const itens = await db.all('SELECT * FROM Itens')
        res.send(itens)
    } catch (error) {
        res.send('Database Error')
        
    }

}