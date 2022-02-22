const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brandes', 'Tom Solaiman'];
const friendsLength = friends.map(friend => friend.length);
// console.log(friendsLength);


const products = [
    { name: 'water bottle', price: 80, color: 'Yellow' },
    { name: 'Mobile Phone', price: 15000, color: 'Black' },
    { name: 'Smart Watch', price: 5000, color: 'Black' },
    { name: 'Earphone', price: 300, color: 'Black' },
    { name: 'Stickey Notes', price: 50, color: 'Blue' },
    { name: 'Water Glass', price: 10, color: 'white' }
];

const pName = products.map(product => product.name);
const pPrice = products.map(product => product.price);
// console.log(pName);
// console.log(pPrice);
products.forEach(product => console.log(product))