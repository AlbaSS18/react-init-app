import {getPriceColor, orderByPrice} from "./helpers";

test('Should return ordered products by price', () => {
    const products = [{price: 15},{price: 5}, {price: 30}]
    const orderedProducts = orderByPrice(products);
    expect(orderedProducts[0].price).toBe(5);
    expect(orderedProducts[1].price).toBe(15);
    expect(orderedProducts[2].price).toBe(30);
})

test('Should return green color', () => {
    expect(getPriceColor(5)).toBe('green');
})

test('Should return orange color', () => {
    expect(getPriceColor(17)).toBe('orange');
})

test('Should return red color', () => {
    expect(getPriceColor(50)).toBe('red');
})
