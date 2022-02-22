const numbers = [4, 6, 8, 10]
const output2 = [];

/* function doubleItOld(number) {
    return number * 2;
}
 */
const doubleIt = number => number * 2;

for (const number of numbers) {
    const result = doubleIt(number);
    output2.push(result);
}

// console.log(output2);


// 1.loop korce
// 2.element deya function ka call korce
// 3.result akta array er modda push korse


// const output = numbers.map(doubleIt);
// const output = numbers.map(number => number * 2 )
const output = numbers.map(x => x * 2);
console.log(output);
const squers = numbers.map(x => x * x);
console.log(squers);

// 1.loop through each Element
// 2.for each element call the provided function
// 3.result for each element will be stored in an array 