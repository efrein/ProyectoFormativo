/**
 * 
 * Cambia la cantidad de un producto en el carrito
 * @param {int} id: PK del registro del producto en el carrito
 * 
 */
 function cambiarCantidad(id){
    let cantidad = document.getElementById('cantidad_'+id).value;
    let url = "http://localhost:8000/productos/cambiarCantidad/";
    let datos = {
        'id': id,
        'cantidad': cantidad
    };
    mensajeAjax(url, datos, cambiarCantidadResp)
}
function cambiarCantidadResp(data){
    alert(data['mensaje']);
    subtotal =  data['subtotal'];
    id =  data['id'];
    nombre= 'subtotal_'+id
    document.getElementById(nombre).innerText= subtotal;

}

///************************ Funciones Auxiliares***************************************************************** */

/**
 * Consulta AJAX al servidor por metodo POST
 * 
 * @param {*} urlserver:        Direccion de envio
 * @param {*} datos:            Data en formato JavaScript object
 * @param {*} callBackFuncion:  Funcion de retorno
*/

function mensajeAjax(urlserver, datos, callBackFuncion){

    const csrftoken = getCookie('csrftoken');
    fetch(urlserver,{
        method: 'POST',
        credentials: 'same-origin',
        headers:{
            'Accept': 'application/json',
            'X-Requested-With':  'XMLHttpRequest',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        callBackFuncion(data)
    })
    .catch((error) => {
        console.error('Error:', JSON.stringify(error))
    });
}

/**
 * 
 * @param {*} name nombre de la cookie
 * @returns el contenido de la cookie
 * 
 */

function getCookie(name){
    let cookieValue = null;
    if (document.cookie && document.cookie !== ""){
        const cookies = document.cookie.split(";");
        for(let i = 0; i < cookies.length; i++){
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + "=")){
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            }
        }
    }
    return cookieValue;
}










