



function mostrar(){
    fetch('/api/gasolineria', {
        method: 'GET'
    }).then(res => res.json())
    .then(response => {
        let data = {
            id: response.id,
            franquicia: response.franq,
            nombre: response.nombre,
            gas: response.precio
        };

        tbody = document.getElementById('tablaa')
        div = document.createElement(div)  
        div.innerHTML = `<thead>
                                <tr>
                                    <th class = "eliminar" style = "font-family: 'Amatic SC', cursive; font-size: 3em; background-color: teal"> ${data.id} </th>
                                    <th class = "eliminar" style = "font-family: 'Amatic SC', cursive; font-size: 3em; background-color: teal"> ${data.franquicia} </th>
                                    <th class = "eliminar" style = "font-family: 'Amatic SC', cursive; font-size: 3em; background-color: teal"> ${data.nombre} </th>
                                    <th class = "eliminar" style = "font-family: 'Amatic SC', cursive; font-size: 3em; background-color: teal"> ${data.gas} regular </th>
                                    <th class = "eliminar" style = "font-family: 'Amatic SC', cursive; font-size: 3em; background-color: teal"> Opciones </th>
                                </tr>
                            </thead>`;
        document.getElementById().addEventListener(click, event=>{
            this.eliminar(event, data, div)
        })
        
    })
}

function eliminar(event, data, div){
    fetch('/api/gasolineria', {
        method: 'DELETE'
    }).then(res => res.json())
    .then(response => {
        if (response){
            
        }
        
    })
}