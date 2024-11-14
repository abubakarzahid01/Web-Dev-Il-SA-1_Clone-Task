document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const forgotPassword = document.getElementById('forgotPassword');

    // Handle form submission
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent form from submitting
        const email = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        if (validateEmail(email) && password.length >= 6) {
            // Simulate login processing
            alert('Login Successful');
            // Perform your login actions here (e.g., redirect or API call)
        } else {
            alert('Invalid credentials. Please check your email and password.');
        }
    });

    // Handle "Forgot Password" click
    forgotPassword.addEventListener('click', () => {
        alert('Redirecting to password recovery...');
        // You can add functionality to redirect or open a modal for password recovery
    });

    // Email validation function
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);
    
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        });
    }
};

showMenu('nav-toggle', 'nav-menu');