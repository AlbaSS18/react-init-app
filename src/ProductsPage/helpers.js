export const orderByPrice = products => {
    let productsAux = [...products];
    return productsAux.sort((product1, product2) => product1.price - product2.price)
}

export const getPriceColor = price => {
    // price > 25 should return red
    // price > 15 and price <=25 should return orange
    // In any other case return green
    let color = 'green';
    if (price > 25){
        color = 'red'
    }
    else if (price > 15 && price <= 25){
        color = 'orange'
    }
    return color;
}
