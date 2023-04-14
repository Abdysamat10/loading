const button = document.querySelector('button');
const loading = document.querySelector('#loading');
const list = document.querySelector('ul');
const back = document.querySelector('.box');

button.addEventListener('click', () => {
    list.style.display = 'none';
    loading.style.display = 'block';
    back.style.display = 'block';
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => {
            loading.style.display = 'none';
            back.style.display = 'none';
            list.style.display = 'block';

            const item = users.map((user) => `<li>${user.name}</li>`).join('');
            list.innerHTML = item;
        });
});
