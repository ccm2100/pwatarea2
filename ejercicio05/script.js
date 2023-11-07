function validateForm() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (nombre === "" || email === "" || password === "") {
        alert("Por favor, complete todos los campos.");
    } else {
        alert("Formulario enviado correctamente.");
        // Aquí puedes enviar el formulario o realizar otras acciones necesarias
    }
}
