'use strict';

const result = document.querySelector('.burger-calculate');
const listType = document.querySelectorAll('input');
let burger = new Burger();

/**
 * 
 * @type {HTMLInputElement} input - the target of the event
 * @listens document#change - function setResultCalc
 */
listType.forEach(input => {
    input.addEventListener('change', setResultCalc);
})

/**
 * Вывод пересчитанных показателей
 * @event input#change
 */
function setResultCalc(event) {
    result.innerHTML = getContentsForBurger(event.target);
}

/**
 * Изменяет свойство объекта
 * @param {object} input event.target 
 * @returns строка для вывода в .burger-calculate
 */
function getContentsForBurger(input) {
    switch (input.name) {
        case 'top':
            if (input.checked) burger.addTop(input.value);
            else burger.deleteTop(input.value);
            break;
        default:
            burger.changeСontents(input.name, input.value);
    }
    return `<p>Калорийность вашего бургера - ${burger.caloriesBurger}<span class="small">кКал</span><br> Стоимость вашего бургера - ${burger.priceBurger}<span class="small">рублей</span></p>`
}

window.addEventListener('load', () => {
    result.innerHTML = `<p>Калорийность вашего бургера - ${burger.caloriesBurger}<span class="small">кКал</span><br> Стоимость вашего бургера - ${burger.priceBurger}<span class="small">рублей</span></p>`;
})

