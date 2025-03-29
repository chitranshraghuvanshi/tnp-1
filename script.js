const hamMenu = document.querySelector('.menu_ham'
);

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click',()=> {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active')
})