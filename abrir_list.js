const list = document.querySelector('.container-cadastro-to-do-list');
const btn = document.querySelector('.btn-to-do-list');

btn.addEventListener('click', () => {
    list.classList.add("active")
    btn.style.display = 'none'
});