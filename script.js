document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    const loginContainer = document.getElementById('login-container');
    const courseContent = document.getElementById('course-content');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = e.target.username.value;
            const password = e.target.password.value;

            if (username === 'admin' && password === 'admin') {
                loginContainer.style.display = 'none';
                courseContent.style.display = 'block';
            } else {
                errorMessage.textContent = 'ACCESS DENIED. INCORRECT CREDENTIALS.';
                setTimeout(() => {
                    errorMessage.textContent = '';
                }, 3000);
            }
        });
    }
});
