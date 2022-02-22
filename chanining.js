// declare variable based on the name of an Object
// const myObject = { x: 15, y: 58, z: 46, a: 10, b: 89 }
// const { x, b } = myObject;
// console.log(x, b);

// distructuring array 
// const [p, q] = [45, 35]
// console.log(p, q);

const [p, q] = [45, 35, 69, 88]
// console.log(p, q);


// const [best, faltu] = [45, 56]
const [best, faltu] = ['momotaz', 'porshi']
const { sky, color, money } = { sky: 'blue', soil: 'mati', color: 'red', money: 50000 }
// console.log(best, faltu);


// chaining
const company = {
    name: 'Gp',
    ceo: {
        id: 1,
        name: 'Ajmol',
        food: 'Biryani'
    },
    web: {
        work: 'Web Devolopment',
        employee: 22,
        framework: 'React',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    }
}
// console.log(company?.web?.tech?.third);
// console.log(company?.backend?.tech?.third);

const myObject = { x: 15, y: 58, z: 46, a: 10, b: 89 }
// const { x, b } = myObject;
console.log('myObject.p is', myObject.t?.s.o);