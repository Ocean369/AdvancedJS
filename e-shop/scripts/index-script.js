let btn = document.querySelector('.header-menu_catalog');
let menu = document.querySelector('.menu');
let btnClose = document.querySelector('.close');

btn.onclick = function () {
    menu.classList.toggle("show-flex");
}

btnClose.onclick = function () {
    menu.classList.remove("show-flex");
}