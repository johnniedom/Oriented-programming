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
const arr = [2,5,7,65,4,4]
console.log(arr.__proto__);
