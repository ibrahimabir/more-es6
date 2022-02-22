const numbers = [5, 7, 13, 26, 41, 30, 5, 2, 19, 85];
const bigNumber = numbers.filter(number => number > 20);
const smallNumber = numbers.filter(number => number < 10);
// console.log(bigNumber);
// console.log(smallNumber);

const products = [
    { name: 'water bottle', price: 80, color: 'Yellow' },
    { name: 'Mobile Phone', price: 15000, color: 'Black' },
    { name: 'Smart Watch', price: 5000, color: 'Black' },
    { name: 'Earphone', price: 300, color: 'Black' },
    { name: 'Stickey Notes', price: 50, color: 'Blue' },
    { name: 'Water Glass', price: 10, color: 'white' }
];

const expensive = products.filter(product => product.price > 100);
// console.log(expensive);
const blacks = products.filter(product => product.color == 'black');
// console.log(blacks);
const color = products.filter(product => product.color == 'pink');
// console.log(color);

// const whiteItems = products.find(product => product.color == 'white');
// console.log(whiteItems);

// const whiteItems = products.find(product => product.color == 'pink');
// console.log(whiteItems);

const blackItems = products.find(product => product.color == 'black');
console.log(blackItems);