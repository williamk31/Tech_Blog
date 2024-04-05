const loginBtn = document.querySelector('.login-form')
const signupBtn = document.querySelector('.signup-form')


async function loginForm(event) {
    event.preventDefault();
    const userEmail = document.querySelector('#email-login').value.trim();
    console.log(userEmail);
    const userPassword = document.querySelector('#password-login').value.trim();
    console.log(userPassword);
    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({userEmail, userPassword}),
        headers: {'Content-Type':'application/json'}
    })
    console.log(response);
    if (response.ok){
        document.location.replace('/')
    } else {
        alert('login failed');
    }
};

async function signupForm(event) {
    event.preventDefault();
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    console.log({name, email, password})
    const response = await fetch('api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: {'Content-Type':'application/json'},
    });
    console.log(response);
    if (response.ok) {
        document.location.replace('/')
    }else {
        alert(response.statusText);
    }
};

loginBtn.addEventListener('submit', loginForm);
signupBtn.addEventListener('submit', signupForm);