const validarUsuario = require('./login');

test('debe permitir el ingreso con mi nombre', () => {
    expect(validarUsuario("Mildrely")).toBe("Acceso concedido");
});

test('debe denegar el ingreso con un nombre incorrecto', () => {
    expect(validarUsuario("Pedro")).toBe("Acceso denegado");
});