const newPostBtn = document.querySelector('#add-post');
const addPostBtn = document.querySelector('#post-submit');

function renderPost() {
    const postForm = document.querySelector('#new-post-form');
    postForm.style.display = postForm.style.display === 'none' ? '' : 'none';
    console.log('click')
};

async function newPostFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    const response = await fetch('/api/blogposts', {
        method: 'POST',
        body: JSON.stringify ({ title, content }),
        headers: {'Content-Type':'application/json'}
    });
    if(response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert(response.statusText);
    }
};

newPostBtn.addEventListener('click', renderPost)
addPostBtn.addEventListener('click', newPostFormHandler);