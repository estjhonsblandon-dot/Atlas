document.addEventListener('DOMContentLoaded', () => {
    const registroForm = document.getElementById('registroForm');

    registroForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const usuario = {
            nombre: nombre,
            email: email,
            password: password
        };

        // Guardar en localStorage
        localStorage.setItem(email, JSON.stringify(usuario));

        alert('¡Cuenta de ATLAS creada con éxito!');
        window.location.href = 'index.html';
    });
});