function cambiarColores() {
    document.body.style.backgroundColor = 'lightblue';
    document.body.style.color = 'red';
}
function cambiartexto() {
    const texto = document.getElementById("cambio");
    texto.innerHTML = 'este es el nuevo texto del parrafo a cambiar';
}
function imprimirdatos(){
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contraseña").value;
    console.log('usuario: ', usuario);
    console.log('contraseña; ', contrasena);
}
function guardarDatos() {
    // Obtener valores
    const nombres = document.getElementById("nombres").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const estrato = document.getElementById("estrato").value.trim();
    const fecha = document.getElementById("fecha").value.trim();
    const grupo = document.getElementById("grupo-sanguineo").value.trim();

    // Expresiones regulares
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTelefono = /^[0-9]{7,15}$/;
    const regexEstrato = /^[1-6]$/;
    const regexFecha = /^\d{4}-\d{2}-\d{2}$/; // formato yyyy-mm-dd (input type="date")
    const regexGrupo = /^(A|B|AB|O)[+-]$/;

    // Validaciones
    if (!regexNombre.test(nombres)) {
        alert("El nombre solo debe contener letras y espacios.");
        return;
    }
    if (!regexNombre.test(apellidos)) {
        alert("El apellido solo debe contener letras y espacios.");
        return;
    }
    if (!regexEmail.test(email)) {
        alert("El email no es válido.");
        return;
    }
    if (!regexTelefono.test(telefono)) {
        alert("El teléfono debe tener solo números (7 a 15 dígitos).");
        return;
    }
    if (!regexEstrato.test(estrato)) {
        alert("El estrato debe ser un número entre 1 y 6.");
        return;
    }
    if (!regexFecha.test(fecha)) {
        alert("La fecha de nacimiento no es válida.");
        return;
    }
    if (!grupo) {
        alert("Seleccione un grupo sanguíneo.");
        return;
    }
    

    // Si todo está correcto
    alert("¡Todos los datos son correctos!");
}