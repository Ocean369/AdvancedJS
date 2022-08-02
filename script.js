'use strict';

const goods = [
    { id: 1, title: 'Shirt', price: 150 },
    { id: 2, title: 'Socks', price: 50 },
    { id: 3, title: 'Jacket', price: 350 },
    { id: 4, title: 'Shoes', price: 250 },
];

// const renderGoodsItem = (item = { id: 0, title: 'Out of stock', price: 0 }) => {
//     return `<div class="goods-item" data-id=${item['id']}><img class='goods-img' src="images/${item['title']}.jpeg" alt="${item['title']}"><div class='goods-description'><h3>${item['title']}</h3><p>${item['price']}$</p><button class="addToCart-button" type="button">Добавить</button></div></div>`;
// };

// const renderGoodsList = (list = [{ id: 0, title: 'Out of stock', price: 0 }]) => {
//     let goodsList = list.map(item => renderGoodsItem(item));
//     document.querySelector('.goods-list').innerHTML = goodsList.join('');
// }

const renderGoodsList = ((list = [{ id: 0, title: 'Out of stock', price: 0 }]) => {
    list.forEach(item => {
        let innerHTML = `<div class="goods-item" data-id=${item['id']}><img class='goods-img' src="images/${item['title']}.jpeg" alt="${item['title']}"><div class='goods-description'><h3>${item['title']}</h3><p>${item['price']}$</p><button class="addToCart-button" type="button">Добавить</button></div></div>`;
        document.querySelector('.goods-list').insertAdjacentHTML("beforeend", innerHTML);
    })
})

renderGoodsList(goods);

