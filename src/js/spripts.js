document.addEventListener('DOMContentLoaded', () => {

    const element = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
     
    element.addEventListener('click', () => {
        element.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });
});