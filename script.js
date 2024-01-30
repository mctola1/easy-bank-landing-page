const menuBtn = document.getElementById('icon_menu')
const navMenu = document.getElementById('nav_menu')
const mask = document.getElementById('mask')

menuBtn.addEventListener('click', () => {

    navMenu.classList.toggle('show_menu')
    menuBtn.classList.toggle('icon_close')
    mask.classList.toggle('view_mask')

})