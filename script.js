const mode = document.querySelector('.mode-toggler');
const container = document.querySelector('.container');
const boxes = document.querySelectorAll('.box');


mode.addEventListener('click', () => {
    console.log('clicked')
    mode.classList.toggle('light-mode');
    container.classList.toggle('light-mode');
    boxes.style.transform = 'scale(0.9)';
})

// boxes.addEventListener('mouseover', () => {
//     boxes.style.transform= 'scale(0.1)'
// })

// function bigImg(x) {
//   x.style.transform = "scale(0.9)";
// }

// function normalImg(x) {
//   x.style.height = "scale(1)";
// }
