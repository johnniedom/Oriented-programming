'use strict';

// TOPIC Constructor
// when using constructor
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.yearBirth = birthYear;

  // you also create a method function inside constructor function
  // it is not good practice

  // this
};

/*
what happens when you call a function using the New Keyword
1. A New {object} is crated . this = {}
2. function is called, and then the this keyword equals newly created {object}
3. {} linked to protoType (This is where __proto__ property is created)
4.  The function wil automatically return {}
*/

// u can then you that same function to create many object as yo want
const Johnnie = new Person(`Johnnie`, 2003);
const Nonye = new Person(`Nonye`, 2004);
const Chimdindu = new Person(`Chimdindu`, 2008);

console.log(Johnnie, Nonye, Chimdindu);
// console.log(Johnnie.calAge);

// TOPIC Prototypes
// very function in javascript have Prototype property
// the Objects that are created through constructor
// function do have access to the prototype method and property of that
// constructor function.
Person.prototype.calAge = function () {
  console.log(2023 - this.yearBirth);
};

Johnnie.calAge();
Nonye.calAge();
Chimdindu.calAge();

// this possible because very object have access
// To the method and properties from its prototype
//which here Person.prototype 👇🏽👇🏽
console.log(Johnnie.__proto__);

// Confirmation the person.prototype is prototype of Johnnie
// it is the prototype of linked Object
console.log(Johnnie.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(Johnnie)); // prototypeOfLinkedObject

// you also set properties
Person.prototype.Surname = 'Modebe';

console.log(Johnnie.Surname, Chimdindu.Surname);

// checking properties
console.log(Johnnie.hasOwnProperty(`firstName`));
console.log(Johnnie.hasOwnProperty(`Surname`));

console.log(Johnnie.__proto__);

console.dir(Person.prototype.constructor);

//working with Arrays
const arr = [2, 5, 7, 65, 4, 4];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true

// with you can add a new array method
//😂 Avoid it. this just for experiment

Array.prototype.unique = function () {
  return [...new Set(this)];
};

const h1 = document.querySelector(`h1`);

// console.dir(h1);

/*
Coding Challenge #1
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'brake' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀
*/
// SOLUTION 1
const Car = function (name, speed) {
  this.name = name
  this.speed = speed;
};
// SOLUTION 2
Car.prototype.accelerate = function () {
  this.speed += 10
  console.log(`${this.name} going at ${this.speed}km/h`);
};



// SOLUTION 3
Car.prototype.brake = function () {
  // console.log(this);
  this.speed -= 5
  console.log(`${this.name} going at ${this.speed}km/h`);
};


// SOLUTION 4

const BMW = new Car(`BWM`, 120);
const Mercedes = new Car (`Mercedes`, 95)

BMW.accelerate()
BMW.accelerate()
BMW.brake();
BMW.brake();


//  TOPIC ES6 CLASSES

// class expression 
const PersonCl1 = class {

}

// class declaration 
class PersonCl {
 constructor (firstName, birthYear){
  this.firstName = firstName
  this.birthYear = birthYear
 }

 // this method will be added to .prototype of PersonCl just like the constructor function
 calAge(){
  console.log(2022 - this.birthYear);
 }

}

const Onyi = new PersonCl (`Jessica`, 2002)