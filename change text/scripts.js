'use strict';

let mainText = document.querySelector('.mainText').innerHTML;
let changeText = document.querySelector('.changeText');
let select = document.querySelector('#tasks');

select.addEventListener('change', (event) => {
    switch (event.target.selectedIndex) {
        case 1: changeText.innerHTML = mainText.replace(/\'/gm, '\"');
            break;
        case 2: changeText.innerHTML = mainText.replace(/\B\'/g, '\"');
            break;
    }
})

/**
 * Задание 3
 */

let submit = document.querySelector('button');
let inputs = document.querySelectorAll('input');

submit.addEventListener('click', checkData);

function checkData(event) {
    closeError();

    inputs.forEach(input => {
        let re = new RegExp;
        switch (input.getAttribute('id')) {
            case 'name':
                console.log('name - ' + input.value);
                re = /^[a-z]+$/i;
                break;
            case 'tel':
                re = /^(\+7)(\(\d{3}\))(\d{3})\-(\d{4})$/i;
                break;
            case 'mail':
                re = /^\w+([\.-]*\w+)*@[a-z]+\.[a-z]{2,4}$/i;
                break;
            default:
                re = /^(\D*[a-z]+\w*\s*){5,}/i;
                break;
        }
        if (!re.test(input.value)) {
            showError(input, input.getAttribute('id'));
            event.preventDefault();
        }

    })
}

function showError(input, type) {
    input.classList.add('error');
    document.querySelector(`.error_${type}`).style.display = 'block';
}

function closeError() {
    document.querySelectorAll('span').forEach(span => span.style.display = 'none');
    inputs.forEach(input => input.classList.remove('error'));
}
