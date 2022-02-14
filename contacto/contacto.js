function inicializar()
{
    document.getElementById("formulario_contacto").onsubmit = alertaFormulario;
}

function alertaFormulario()
{
    var strNombre = document.getElementById("input_nombre").value;
    var strCorreo = document.getElementById("input_correo").value;
    var strTelefono = document.getElementById("input_telefono").value;
    var strMensaje = document.getElementById("input_mensaje").value;
    alert("Nombre: " + strNombre + "\nCorreo: " + strCorreo + "\nTelefono: " + strTelefono + "\nMensaje: " + strMensaje);
}

window.onload = inicializar;