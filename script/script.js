// // 1)

// function Person(name, id, age) {
//     this.name = name,
//         this.id = id,
//         this.age = age
// };

// Object.prototype.sayHi = () => {
//     console.log("Hello from prototype");
// }

// let person1 = new Person("Oleg", 123, 22);

// console.log(person1);

// console.log(Person.sayHi());

// console.log(person1.sayHi());


//2

let car1 = {
    model: "Nissan",
    price: 50000,
    carMileage: 40000,
    color: 'red',
    country: 'Europe'
};

let car2 = {
    model: "Opel",
    price: 40000,
    carMileage: 50000,
};

Object.setPrototypeOf(car2, car1);

let car3 = {
    model: "Reno",
    price: 60000,
};
Object.setPrototypeOf(car3, car2);

console.log(car1);
console.log(car2);
console.log(car3);