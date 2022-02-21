// let and const 
const hubby = 'Akbor the great';
let mobilePhone = 'i-Phone';
mobilePhone = 'Samsung Galaxy';

// default parameter
// spread or three dots 
function findMax(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = findMax();
console.log(biggest);

// template String
const myNotes = `I am ${hubby}.I hava a mobile phone of ${mobilePhone}.`;
// console.log(myNotes);

// arrow function 
const square = x => x * x;;
console.log(square(5));