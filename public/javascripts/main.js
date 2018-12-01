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

        tbody = document.getElementById('tablaa').innerHTML = `<thead>
                                <tr>
                                    <th style = "font-family: 'Amatic SC', cursive; font-size: 3em; background-color: teal"> ID </th>
                                    <th style = "font-family: 'Amatic SC', cursive; font-size: 3em; background-color: teal"> Franquicia </th>
                                    <th style = "font-family: 'Amatic SC', cursive; font-size: 3em; background-color: teal"> Nombre </th>
                                    <th style = "font-family: 'Amatic SC', cursive; font-size: 3em; background-color: teal"> Gasolina regular </th>
                                    <th style = "font-family: 'Amatic SC', cursive; font-size: 3em; background-color: teal"> Opciones </th>
                                </tr>
                            </thead>`;
        
    })
}