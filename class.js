class Support {
    name;
    designation = 'Support wev deb';
    adress = 'BD';
    constructor(name, adress, designation = 'Support web deb') {
        this.name = name;
        this.adress = adress;
        this.designation = designation;
    }
    startSession() {
        console.log(this.name, 'Start a support session');
    }
}

const aamir = new Support('Aamir Khan', 'London', 'Font-end web dev');
const salman = new Support('Salman Khan', 'Dubai', 'Back-end wev dev');
const srk = new Support('Srk Khan', 'Dhaka');
const aksay = new Support('Aksay Kumar', 'Chittagon')
// aksay.startSession();
// salman.startSession();
// srk.startSession();
// aamir.startSession();
console.log(aamir);
console.log(salman);
console.log(srk);
console.log(aksay);