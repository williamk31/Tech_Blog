const loginBtn = document.querySelector('button')
console.log(loginBtn);

async function loginForm(){
    console.log('click');
    const userEmail = document.querySelector('#email').value
    console.log(userEmail);
    const userPassword = document.querySelector('#password').value
    console.log(userPassword);
    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({userEmail, userPassword}),
        headers: {'Content-Type':'application/json'}
    })
    console.log(response);
    if (response.ok){
        document.location.replace('/')
        // replace "login" link with "logout" link on homepage
    } else {
        alert('login failed');
    }
}

loginBtn.addEventListener('click', loginForm)