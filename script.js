const btn = document.querySelector('.btn');
const closeBtn = document.querySelector('.close-btn');
const modalBox = document.querySelector('.modal-box');

btn.addEventListener('click', () => {
modalBox.classList.add('active')
})

closeBtn.addEventListener('click', () => {
    modalBox.classList.remove('active')
})