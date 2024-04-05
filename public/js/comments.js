const commentBtn = document.querySelector('#comment-add')
const commentSubmitBtn = document.querySelector('#comment-submit')

function renderComment() {
    const commentForm = document.querySelector('#comment-form')
    commentForm.style.display = commentForm.style.display === 'none' ? '' : 'none';
};

async function commentFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('#comment-title').value.trim();
    const content = document.querySelector('#comment').value.trim();
    const blog_id = document.querySelector('#blog-id').value.trim();
    const response = await fetch('/api/comment/', {
        method: 'POST',
        body: JSON.stringify({ title, content, blog_id }),
        headers: {'Content-Type':'application/json'}
    });
    if (response.ok) {
        document.location.replace(`/blogpost/${blog_id}`)
        console.log(response);
    } else {
        alert(response.statusText);
    }
};

commentBtn.addEventListener('click', renderComment);
commentSubmitBtn.addEventListener('click', commentFormHandler);