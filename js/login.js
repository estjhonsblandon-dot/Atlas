document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Intentar obtener el usuario desde localStorage
        const usuarioGuardado = localStorage.getItem(email);

        if (usuarioGuardado) {
            // Convertir el texto guardado de vuelta a un objeto JS
            const datosUsuario = JSON.parse(usuarioGuardado);

            // Validar contraseña
            if (datosUsuario.password === password) {
                alert(`¡Bienvenido a ATLAS, ${datosUsuario.nombre}!`);
                
                // Aquí podrías redirigir a la página del mapa o dashboard
                // window.location.href = 'mapa.html'; 
            } else {
                alert('Contraseña incorrecta. Inténtalo de nuevo.');
            }
        } else {
            alert('Este correo no está registrado en ATLAS.');
        }
    });
});