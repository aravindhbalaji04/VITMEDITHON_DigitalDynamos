// script.js

// Hardcoded credentials for demonstration purposes
const managementCredentials = {
    username: 'admin',
    password: 'admin123'
};

const publicCredentials = {
    username: 'user',
    password: 'user123'
};

// Management login form submission
document.getElementById('management-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === managementCredentials.username && password === managementCredentials.password) {
        document.getElementById('management-message').innerText = 'Management logged in successfully!';
        window.location.href = 'resource.html'; 
    } else {
        document.getElementById('management-message').innerText = 'Invalid management credentials!';

    }
});

// Public login form submission
document.getElementById('public-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const publicUsername = document.getElementById('public-username').value;
    const publicPassword = document.getElementById('public-password').value;
    
    if (publicUsername === publicCredentials.username && publicPassword === publicCredentials.password) {
        document.getElementById('public-message').innerText = 'Public user logged in successfully!';
        window.location.href = 'public.html'; 

    } else {
        document.getElementById('public-message').innerText = 'Invalid public credentials!';
    }
});
