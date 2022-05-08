const catalog = 
{
    1: {id: 1,
        name: `socks`,
        description:  `black`,
        sizes:  [23, 25, 27],
        price:  5050,     // в копейках
        available: 1,     // 1 - товар доступен, 0 - 1 - товар недоступен
    },
    2: {id: 2,
        name: `shirts`,
        description: `red`,
        sizes: [46, 50],
        price: 15000,         
        available: 1,    
    },
    3: {id: 3,
        name: `skirt`,
        description: `brown`,
        sizes: [46],
        price: 45000,         
        available: 1,    
    },
    4: {id: 4,
        name: `boots`,
        description: `blue`,
        sizes: [36, 39],
        price: 115000,         
        available: 1,    
    },
    5: {id: 5,
        name: `jeans`,
        description: `red`,
        sizes: [29, 32],
        price: 85000,         
        available: 0,    
    },
};

let basketIndex = [1, 2, 4];  // список id товаров в корзине, можно добаить через функцию addToBasket

let basket = 
[
    {
    goodid: 1, 
    amount: 10,
    },
    {
    goodid: 2, 
    amount: 7, 
    }, 
    {
    goodid: 4, 
    amount: 12, 
    }, 
];


function addToBasket(id, goodAmount = 1) {
    if (!catalog.hasOwnProperty(id)) {   
        console.log('Товара нет в каталоге');
    }
    else if (catalog[id][`available`] == 0) {
        console.log('Товар недоступен');
    }
    else if (catalog[id][`available`] == 1) {
        basket.push(
            {
                goodid: id, 
                amount: goodAmount,
            }); 
        basketIndex.push(id); 
    }   
};    


function removeFromBasket(id) {
    if (!basketIndex.includes(id)) {
        console.log('Товара нет в корзине')
    }
     else {
        basketIndex = basketIndex.filter(item => id !== (item));
        return basket = basket.filter(item => id !== (item.goodid));
    }
};


function cleanBasket(basket) {
    basketIndex = basketIndex.filter(item => false);
    return basket.filter(item => false);

};

// console.log(`cleaned basket`);
// basket = cleanBasket(basket);
bs1 = addToBasket(3, 7);
console.log(basket);
console.log(basketIndex);
bs2 = addToBasket(5, 7);
bs3 = addToBasket(8, 7);


removeFromBasket(4);
console.log(basket);
console.log(basketIndex);


// Функция вычисления общего количества и стоимости товаров в корзине. 
function summator(basket, catalog) {
    let sum = {
        totalAmount: 0,
        totalSumm: 0,
    };
    sum.totalAmount += basket.reduce((sum, current) => sum + current.amount, 0);
    sum.totalSumm += basket.reduce((sum, current) => sum + catalog[current.goodid].price * current.amount, 0);
    return sum;
};


// console.log(`cleaned basket`);
// basket = cleanBasket(basket);
console.log(summator(basket, catalog));


console.log(`by funtion => `, cleanBasket(basket));
basket = cleanBasket(basket);
console.log(basket);
console.log(basketIndex);