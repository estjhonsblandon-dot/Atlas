document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const usuarioGuardado = localStorage.getItem(email);

        if (usuarioGuardado) {
            const datosUsuario = JSON.parse(usuarioGuardado);

            if (datosUsuario.password === password) {
                alert(`¡Bienvenido a ATLAS, ${datosUsuario.nombre}!`);
                // Redirigir a tu página principal aquí
                // window.location.href = 'dashboard.html'; 
            } else {
                alert('Contraseña incorrecta. Inténtalo de nuevo.');
            }
        } else {
            alert('Este correo no está registrado en ATLAS.');
        }
    });
});