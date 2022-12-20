const mode = document.querySelector('.mode-toggler');
const container = document.querySelector('.container');
const boxes = document.querySelectorAll('.box');


mode.addEventListener('click', () => {
    console.log('clicked')
    mode.classList.toggle('light-mode');
    container.classList.toggle('light-mode');
    boxes.classList.toggle('light-mode');
})