document.addEventListener('DOMContentLoaded', () => {

    const element = document.querySelector('.hamburger');

    element.addEventListener('click', () => {
        element.classList.toggle('hamburger_active');
        document.querySelector('.menu').classList.toggle('menu_active');
    });
});