const numbers = [4, 6, 8, 10, 30, 40, 54, 2, 7, 9];
const bigNumber = numbers.filter(product => product > 20);
const smallNumber = numbers.filter(product => product < 20);
const smallNumber2 = numbers.find(product => product < 20);

console.log(smallNumber2);


const products = [
    { name: 'bottol', price: 90, color: 'yellow' },
    { name: 'shirt', price: 500, color: 'black' },
    { name: 'pant', price: 800, color: 'blue' },
    { name: 'book', price: 190, color: 'white' },
    { name: 'leptop', price: 12090, color: 'gray' }
];

const bigPrice = products.filter(product => product.price > 500);
const bigPrice2 = products.find(product => product.price > 500);

console.log(bigPrice2);