/** 
 * добавление нового товара
*/
let add = (cart, req) => {
    cart.push(req.body);
    return JSON.stringify(cart, null, 4);
};
/**
 * внесение изменений в товар
 */
let change = (cart, req) => {
    let find = cart.find(el => el.id === req.body.id);
    find.quantity = req.body.quantity;
    return JSON.stringify(cart, null, 4);
};
/**
 * удаление товара по id
 */
let remove = (cart, req) => {
    let find = cart.find(el => el.id === +req.params.id);
    let index = cart.indexOf(find);
    if (index > -1) {
        cart.splice(index, 1);
        return JSON.stringify(cart, null, 4);
    } else return JSON.stringify(cart, null, 4);
};
/**
 * возвращение товара с заданным id
 */
let getId = (cart, req) => {
    let find = cart.find(el => el.id === req.params.id);
    return JSON.stringify(find);
}

module.exports = {
    add,
    change,
    remove,
    getId
};