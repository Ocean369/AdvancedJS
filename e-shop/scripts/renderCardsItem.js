'use strict';

function renderCardsItem(countCard) {
    let innerText = '';

    if (countCard > ITEMS.length) { countCard = ITEMS.length; }

    ITEMS.forEach((item, index) => {
        if (index < countCard) {
            innerText += `<div class="items-infocards">
            <div class=" items-infocards_image ">
                <img src="image/index-item${item['id']}.jpg" alt="${item['title']}">
                <div class="items-hover">
                    <button class="items-hover_button">
                        <img class="items-hover_button-img" src="image/cart.svg" alt="cart">
                        <span class="items-hover_button-text textRegular">Add to Cart</span>
                    </button>
                </div>
            </div>
            <div class="items-infocards_text">
                <h4 class="items-infocards_text-name textSmall">${item['title']}</h4>
                <p class="items-infocards_text-info text">${item['description']}</p>
                <p class="items-infocards_text-prise textMiddle">$${item['price']}</p>
            </div>
        </div>`;
        }
    })
    return innerText;
}