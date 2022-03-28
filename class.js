class Support {
    name;
    designation = 'support web dev';
    address ='BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name, 'start a support session');
    }
}

const amir = new Support('amir khan', 'India');
const salman = new Support('salman khan', 'Dubai');
amir.startSession();
salman.startSession();

/* console.log(amir);
console.log(salman); */
