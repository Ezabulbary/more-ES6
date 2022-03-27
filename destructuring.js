const student = {name:'hasan', id:123432, department: 'nine', color: 'gray', aim: 'teacher', phone: +88019555555};

/* const department = student.department;
const name = student.name;
const color = student.color; */

const {department, name, color} = student;
console.log(department);
console.log(name);
console.log(color);

// nasted object 
const company = {
    name:'GP',
    ceo:{
        name:'akmol', 
        age: 45, 
        height:6},
    web:{
        work: 'network service', 
        framework: 'react',
        tech:{
            first: 'html', 
            second: 'css', 
            third: 'js'
        }
    }
};

const { age, height } = company.ceo;
const { work, framework } = company.web;
const { first, third } = company.web.tech;

console.log(age);