const myObject = { x:2, y:4, z:7, a:9, b:45, c:65};
const {x,z} = myObject;
console.log(x,z);

// agin 
const {sky, time} = {sky:'blue', soil:'mati', time:12, nameus:'hasan'};
console.log(sky, time);

// destructuring Array
const [ p, q] = [43, 45, 12, 90, 21];
console.log(p, q);

// nasted object 
const company = {
    name: 'GP',
    ceo: {
        name: 'akmol',
        age: 45,
        height: 6
    },
    web: {
        work: 'network service',
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    }
};
console.log(company.web.tech.first);
console.log(company.ceo.tall?.third);