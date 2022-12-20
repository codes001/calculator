const mode = document.querySelector('.mode-toggler');


// mode.addEventListener('click', modeToggle)

// function modeToggle () {
//  mode.classList.toggle('light-mode');
//  console.log('clicked')
// }

mode.addEventListener('click', () => {
    console.log('clicked')
    mode.classList.toggle('light-mode')
})
