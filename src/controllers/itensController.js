
import { openDb } from "../database/config.js";



export async function newItem(req, res) {
    const formItem = req.body

    const db = await openDb()
    try {
        await db.run(`INSERT INTO Itens (item,embalagem,quantidade) values ('${formItem.item}','${formItem.embalagem}','${formItem.quantidade}')`);


        const itens = await db.all('SELECT * FROM Itens')
        res.render('FormCadastro', { itens: itens })
        db.close();
    } catch (e) {
        console.log(e)
        res.send('Erro ao adicionar item')
        res.render('FormCadastro')

    }

}

export async function seeItens(req, res) {
    const db = await openDb();
    try {
        const itens = await db.all('SELECT * FROM Itens')
        res.render('home', { itens: itens })
    } catch {
        res.render('erro no banco de dados')
    }

}
export async function deleteItens(req, res) {
    const db = await openDb();
    try {
        const id = req.params.id
        await db.run(`DELETE FROM Itens WHERE item_id ="${id}"`)
        const itens = await db.all('SELECT * FROM Itens')
        res.render('FormCadastro', { itens: itens })
        db.close();
    } catch {
        res.render('erro no banco de dados')
    }

}

export async function updateItens(req,res){
    const db = await openDb();
    try{
        const id = req.params.id
        const item = req.body
        console.log(item.embalagem)
        db.run(`UPDATE Itens SET 
        item = '${item.item}',
        embalagem ='${item.embalagem}',
        quantidade = '${item.quantidade}'
        WHERE item_id=${id}`)
        const itens = await db.all('SELECT * FROM Itens')
        res.render('FormCadastro', { itens: itens })
        db.close();
    }catch(e){ 
        res.render('erro no banco de dados')
}




}