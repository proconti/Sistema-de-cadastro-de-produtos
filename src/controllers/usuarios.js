
import { openDb } from "../database/config.js";



export async function newUsuario(req, res) {
    const formItem = req.body

    const db = await openDb()
    try {
        await db.run(`INSERT INTO Usuarios (name,password) values ('${formItem.name}','${formItem.password}')`);
        const itens = await db.all('SELECT * FROM Usuarios')
        res.redirect(307,'/usuarios/all')
        db.close();
    } catch (e) {

        res.send('Erro ao adicionar item')

    }

}


export async function seeUserItens(req, res) { 
    const db = await openDb();
    try {
        const itens = await db.all('SELECT * FROM Usuarios')
        res.render('users',{itens})
    } catch {
        res.send('erro no banco de dados')
    }

}

export async function deleteUsuario(req, res) {
    const db = await openDb();
    try {
        const id = req.params.id
        await db.run(`DELETE FROM Usuarios WHERE usuario_id ="${id}"`)
        const itens = await db.all('SELECT * FROM Usuarios')
        res.render('users', { itens: itens })
        db.close();
    } catch {
        res.send('erro no banco de dados')
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