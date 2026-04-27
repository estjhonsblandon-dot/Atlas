// Esperar a que el HTML cargue
document.addEventListener('DOMContentLoaded', () => {
    const registroForm = document.querySelector('form');

    registroForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue

        // Capturar valores de los inputs
        const nombre = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Crear un objeto de usuario
        const usuario = {
            nombre: nombre,
            email: email,
            password: password
        };

        // Guardar en localStorage (como un JSON)
        localStorage.setItem(email, JSON.stringify(usuario));

        alert('¡Cuenta de ATLAS creada con éxito! Ahora puedes iniciar sesión.');
        
        // Redirigir al login
        window.location.href = 'login.html';
    });
});