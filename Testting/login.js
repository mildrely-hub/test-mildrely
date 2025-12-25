function validarUsuario(nombre) {
    const miNombre = "Mildrely"; 
    if (nombre === miNombre) {
        return "Acceso concedido";
    }
    return "Acceso denegado";
}

module.exports = validarUsuario;