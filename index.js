import express from 'express'
import createTable from './src/controllers/Itens.js'
import { deleteItens, newItem,seeItens,updateItens } from './src/controllers/itensController.js';
import { openDb } from "./src/database/config.js";
import data from './src/middlewares/Data.js'
import neatCsv from 'neat-csv';
import fs from 'fs'


const app = express();
createTable()

const port = process.env.PORT || 3000



// fs.readFile('./data.csv', async (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(await neatCsv(data))
// })





app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))
app.set('view engine','ejs')


app.get('/cadastro',(req,res)=>{
    res.render('FormLogin')
});


app.post('/cadastro/login', async (req,res)=>{
    const db = await openDb();

    const formdata = req.body
    if(((formdata.userName =='taciana' && formdata.pass =='a123456#') || (formdata.userName =='procon' && formdata.pass =='@Procon#2022!'))){
        try{
            const itens = await db.all('SELECT * FROM Itens')
            res.render('FormCadastro',{itens:itens})
        }catch{
            res.render('erro no banco de dados')
        }
    }else{
        res.redirect('/cadastro')
    }

})

app.get('/',seeItens)


app.post('/cadastro/new',newItem);

app.get('/delete/:id',deleteItens);
app.post('/update/:id',updateItens)

app.get('/itens',data)

app.listen(port,()=>{
    console.log('connection Ok');
});