'use strict';

const TYPES = {
    small: {
        price: 50,
        calories: 20,
    },
    big: {
        price: 100,
        calories: 40,
    },
    cheese: {
        price: 10,
        calories: 20,
    },
    potato: {
        price: 15,
        calories: 10,
    },
    salad: {
        price: 20,
        calories: 5,
    },
    flavoring: {
        price: 15,
        calories: 0,
    },
    mayo: {
        price: 20,
        calories: 5,
    }
};

class Burger {
    constructor(size = 'small', filling = 'cheese') {
        this.size = size;
        this.filling = filling;
        this.top = []; // ['flavoring', 'mayo'];
    }

    /**
     * геттер - цена
     */
    get priceBurger() {
        return this.calcPriceOrCalories('price');
    }

    /**
     * геттер - калории
     */
    get caloriesBurger() {
        return this.calcPriceOrCalories('calories');
    }

    /**
     * Добавляет дополнительную добавку,если она не добавлена
     * @param {string} top дополнительная начинка бургера
     */
    addTop(top) {
        if (this.top.indexOf(top) == -1) {
            this.top.push(top);
            this.priceBurger;
            this.caloriesBurger;
        }
    }

    /**
     * Удаляет дополнительную добавку, если она есть
     * @param {string} top дополнительная начинка бургера
     */
    deleteTop(top) {
        if (this.top.indexOf(top) !== -1) {
            this.top.splice(this.top.indexOf(top), 1);
            this.priceBurger;
            this.caloriesBurger;
        }
    }

    /**
     * Высчитывает общую сумму калориев или цену
     * @param {string} calculationType тип рассчета: калории или цена
     * @returns общая сумма калориев или цена бургера с учетом выбранной начинки
     */
    calcPriceOrCalories(calculationType) {
        let calc = 0;
        for (const [key, value] of Object.entries(this)) {
            if (key != 'top') {
                calc += TYPES[value][calculationType];
            } else {
                if (value.length > 0) {
                    value.forEach(top => {
                        calc += TYPES[top][calculationType];
                    })
                }
            }
        }
        return calc;
    }

    /**
     * Изменяет вид гамбургера и пересчитывает калории и цену
     * @param {string} nameContent свойство: начинка или размер, которое будем менять
     * @param {string} content на что меняем - вид начинки или размер
     */
    changeСontents(nameContent, content) {
        this[nameContent] = content;
        this.priceBurger;
        this.caloriesBurger;
    }

}

// let h = new Burger('big', 'cheese',);
//console.log(h.caloriesBurger);