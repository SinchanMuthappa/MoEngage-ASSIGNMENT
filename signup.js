document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        // Check if email already exists in localStorage
        if (localStorage.getItem(email)) {
            alert('Email already exists. Please use a different email or log in.');
            return;
        } else {
            // Store user credentials (Note: This is for demonstration purposes only. Do not store passwords in localStorage in real applications)
            localStorage.setItem(email, JSON.stringify({ username: username, password: password }));
            alert('Signup successful!');
            window.location.href = 'MoEngage- ASSIGNMENT/index.html';
        }
    });
});
