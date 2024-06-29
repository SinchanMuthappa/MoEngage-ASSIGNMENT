document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Retrieve stored user credentials
        const storedUser = localStorage.getItem(email);
        if (storedUser) {
            const user = JSON.parse(storedUser);
            if (password === user.password) {
                alert('Login successful!');
                window.location.href = 'home.html';
            } else {
                alert('Invalid email or password!');
            }
        } else {
            alert('Invalid email or password!');
        }
    });
});
