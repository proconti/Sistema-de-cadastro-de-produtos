const tabelaPrincipal = window.document.querySelector('tbody')


for (let index = 0; index < 5; index++) {
    tabelaPrincipal.innerHTML += `
<tr id="principal_table">
<td>
<select class="form_select" id='${index}' value=' ' aria-label="Default select example">
    <option>Selecione o item</option>
        
        </select>
        <td class="codigo" >
             <p>Codigo aqui</p>
        </td>
        <td class="embalagem">
            <p>Embalagem aqui</p>
        <td style="width: 10%;">
        <input type="number" class="input_form">
        </td>
        <td></td>
        
        </td>
        </tr>
        `
    
    
}

// https://proconsistema.herokuapp.com/itens

function getDataFromRouter() {
    fetch('http://localhost:3000/itens').then((promise) => {
        const selects = window.document.querySelectorAll('.form_select')
        promise.json().then((data) => {
            selects.forEach((item)=>{
                data.forEach((newData)=>{
                    item.innerHTML += `<option>
                        ${newData.item}
                    </option>`
                })

            })
            
        })
    })
}
getDataFromRouter();

const options = window.document.querySelectorAll('select');

options.forEach((item)=>{
    item.addEventListener('change',(e)=>{
        console.log(e.target.value)
        const codigo =  window.document.querySelectorAll('.codigo')[e.target.id]
        const embalagem = window.document.querySelectorAll('.embalagem')[e.target.id]
        console.log(codigo)
        fetch('http://localhost:3000/itens').then((promise)=>{
            promise.json().then((data)=>{
                data.forEach((newData)=>{
                    if(newData.item == e.target.value){
                        codigo.innerHTML = `<p>ME-00${newData.item_id}</p>`
                        embalagem.innerHTML = `<p>${newData.embalagem}</p>`

                    }

                })

            })
            
        })
        
    })
   
})

