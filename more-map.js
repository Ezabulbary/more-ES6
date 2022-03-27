const friends =['jalal', 'pinak', 'ohed', 'hasan', 'kader'];
const friendLength = friends.map(friend => friend.length);
console.log(friendLength);

const products = [
    {name:'bottol', price: 90, color: 'yellow'},
    {name:'shirt', price: 500, color: 'black'},
    {name:'pant', price: 800, color: 'blue'},
    {name:'book', price: 190, color: 'white'},
    {name:'leptop', price: 12090, color: 'gray'}
];

const productsName = products.map(p => p.name);
const productPrice = products.map(p => p.price);
// products.map(p => console.log(products));
products.forEach(p => console.log(products));

console.log(productPrice);