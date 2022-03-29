class TeamMember {
    name;
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
    groupSupportTime;
    designation = 'support web dev';
    constructor(name, address, time){
        super(name, address)
        this.groupSupportTime = time;
    }
    startSession(time) {
        console.log(this.name, 'start a support session', time);
    }
}
class StudentCare extends TeamMember {
    designation = 'support student care web dev';
    buildARoutin(student) {
        console.log(this.name, 'Build a routin for', student);
    }
}
class NeptuneDev extends TeamMember {
    codeEditor;
    designation = 'support neptune app dev';
    constructor(name, address, editor){
        super(name, address)
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'Release App version is', version);
    }
}

const amir = new Support('amir khan', 'India');
amir.startSession(11);
const salman = new Support('salman khan', 'Panjab', 4);
console.log(salman);
const srk = new StudentCare('SRK khan', 'Dilli');
console.log(srk);
const aks = new NeptuneDev('AKS kumar', 'Mumbai', 'nodepade++');
aks.releaseApp('1.5.4');