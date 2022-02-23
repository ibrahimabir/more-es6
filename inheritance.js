class TeamMember {
    name;
    designation = 'Support wev deb';
    adress = 'BD';
    constructor(name, adress) {
        this.name = name;
        this.adress = adress;

    }
}


class Support extends TeamMember {
    groupSupportTime;
    constructor(name, adress, time) {
        super(name, adress);
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'Start a support session');
    }
}

class StudentCare extends TeamMember {
    buildARoutine(student) {
        console.log(this.name, 'Build a routine for', student);
    }
}


class NeptuneDev extends TeamMember {
    codeEditor;
    constructor(name, adress, editor) {
        super(name, adress);
        this.codeEditor = editor;
    }
    releseApp(version) {
        console.log(this.name, 'relese app version', version);
    }
}

const aamir = new Support('Aamir Khan', 'London', 11);
const salman = new Support('Salman Khan', 'Dubai', 9);
const srk = new Support('Srk Khan', 'Dhaka', 4);
const aksay = new Support('Aksay Kumar', 'Chittagon', 11)
console.log(aamir);

const alia = new StudentCare('Alia Bhatt', 'Noakhali')
console.log(alia);

const katrina = new NeptuneDev('Katrina Kaif', 'London', 'Android Studio')
// console.log(katrina);
katrina.releseApp('2.0.5.9');