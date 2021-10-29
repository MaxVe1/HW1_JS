const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];

let sumPrice = prices.reduce((sum, cur) => sum + cur, 0);

console.log(`Итого: ${sumPrice} гривен, средняя цена товара ${sumPrice/prices.length} гривен`);