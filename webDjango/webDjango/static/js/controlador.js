/** 
* Cambia la cantidad de un producto en el carrito
* @param {*} id: Direccion de envio 
*/
function cambiarcantidad(id) {
    let cantidad = document.getElementById('cantidad_' + id).value;
    let url = "";
    let datos = {
        'id': id,
        'cantidad': cantidad
    };
    mensajeAjax(url, datos, cambiarCantidadResp)
}

function cambiarCantidadResp(data) {
    alert(data['mensaje'])
}

//*FUNCIONES AUXILIARES************************************** */
/** 
* Consulta AJAX al servidor por metodo POST
* @param {*} urlserver: Direccion de envio
* @param {*} datos: Data en formato Javascript object
* @param {*} callBackFunction: Funcion de retorno
*/

function mensajeAjax(urlserver, datos, callBackFunction) {

    const csrftoken = getCookie('csrftoken');
    fetch(urlserver, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify(datos)
    })
        .then(response => response.json())
        .then(data => {
            //mostrarAviso(data)
            callBackFunction(data)
        })
        .catch((error) => {
            console.error('Error:', JSON.stringify(error));
        });
}

/**
 * 
 * @param {*} name Nombre de la cooki
 * @returns el contenido de la cooki
 */

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cokkie.length; i++) {
            const cookie = cookies[i].trim();
            //Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + "=")) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;

            }
        }
    }
    return cookieValue;
}











