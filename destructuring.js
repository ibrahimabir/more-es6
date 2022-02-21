const fish = { id: 58, name: 'King Hilsha', price: 9000, phone: "01717555555", adress: 'chandpur', dress: 'silver color' };

// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;
const { phone, adress, price, dress, id } = fish;
// console.log(phone, id);
// console.log(price, adress);
// console.log(phone, dress);


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

// const work = company.web.work;
// const framework = company.web.framework;
const { work, framework } = company.web;
const { food, name } = company.ceo;
const { second, third } = company.web.tech;
console.log(work, framework);
console.log(food, name);
console.log(second, third);