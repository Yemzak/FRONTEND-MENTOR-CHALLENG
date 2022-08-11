const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('subit', e => {
    e.preventDefault();

    const emailValue = form['email'].value;
})