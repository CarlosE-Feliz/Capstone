const menu = document.querySelector('.open');
menu.addEventListener('click', () => {
document.getElementById('mobile-menu').classList.add('active');
document.getElementById('menu_mobile').classList.add('disapear'); 
})
const close = document.querySelector('.close');
close.addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.remove('active');
    document.getElementById('menu_mobile').classList.remove('disapear');
})
const ulClose = document.querySelector('.ul-close');
ulClose.addEventListener('click', () => {document.getElementById('mobile-menu').classList.remove('active')})