'use strict';

// TOPIC Constructor
// when using constructor
// 👇🏽 global variable
const currentYear = new Date().getFullYear();
const Person = function (firstName, birthYear) {
  this.firstName;
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

// console.log(Johnnie, Nonye, Chimdindu);
// console.log(Johnnie.calAge);

// TOPIC Prototypes
// very function in javascript have Prototype property
// the Objects that are created through constructor
// function do have access to the prototype method and property of that
// constructor function.
Person.prototype.calAge = function () {
  const currentYear = new Date().getFullYear();
  // console.log(this.__proto__);
  // console.log(this);
  this.age = currentYear - this.yearBirth;
  // console.log(this.age);
};

Johnnie.calAge();
Chimdindu.calAge();
Nonye.calAge();

// console.log(Johnnie.age, Chimdindu.age, Nonye.age); //21, 16, 20

// this possible because very object have access
// To the method and properties from its prototype
//which here is the Person.prototype

// SUBTOPIC .__proto__
// the .__proto__ point directly to the Prototypes of the
// parent constructor function which is accessible to the
// public

// console.log(Johnnie.__proto__);
// console.log(Person.prototype);

// Confirmation the person.prototype is prototype of Johnnie
// it is the prototype of linked Object
// console.log(Johnnie.__proto__ === Person.prototype); // true
// console.log(Person.prototype.isPrototypeOf(Johnnie)); // prototypeOfLinkedObject

// you also set properties
Person.prototype.Surname = 'Modebe';

// console.log(Johnnie.Surname, Chimdindu.Surname);

// checking properties of the objects and the prototype
// console.log(Johnnie.hasOwnProperty(`firstName`)); // true
// console.log(Johnnie.hasOwnProperty(`Surname`)); // false

// console.log(Johnnie.hasOwnProperty(`age`)); // true
// console.log(Person.hasOwnProperty(`age`)); // false
//
// console.log(Johnnie.__proto__);

// console.dir(Person.prototype.constructor);

//working with Arrays
const arr = [2, 5, 7, 65, 4, 4];
// console.log(arr.__proto__);
// console.log(arr.toLocaleString()); // 2,5,7,65,4,4
// console.log(arr.__proto__ === Array.prototype); // true

// with you can add a new array method
//😂 Avoid it. this just for experiment

Array.prototype.unique = function () {
  return [...new Set(this)];
};
// more example of creating your own array method
// console.log(arr.unique()); // [2, 5, 7, 65, 4]
Array.prototype.last = function () {
  return this[this.length - 1];
};
// console.log(arr.last()); // 4

Array.prototype.toObject = function () {
  let obj = {};
  for (let i = 0; i < this.length; i++) {}
  return obj;
};
// console.log(arr.toObject()); // {0: 2, 1: 5, 2: 7, 3: 65, 4: 4, 5: 4}

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
  this.name = name;
  this.speed = speed;
};
// SOLUTION 2
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.name} going at ${this.speed}km/h`);
};

// SOLUTION 3
Car.prototype.brake = function () {
  // console.log(this);
  this.speed -= 5;
  console.log(`${this.name} going at ${this.speed}km/h`);
};

// SOLUTION 4

const BMW = new Car(`BWM`, 120);
const Mercedes = new Car(`Mercedes`, 95);

// BMW.accelerate()
// BMW.accelerate()
// BMW.brake();
// BMW.brake();

//  TOPIC ES6 CLASSES

// class expression
const PersonCl1 = class {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
};

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // this method will be added to .prototype of PersonCl
  // just like the constructor function

  // They are basicaLly Know as : METHOD
  calAgeD() {
    console.log(currentYear - this.birthYear);
  }

  // Be careful when ever you are trying to set a property
  // that already exist using the _under score

  set fullName(name) {
    // console.log(name);
    // console.log(name.includes(` `));
    if (name.includes(` `)) this._fullName = name;
    else console.log(`${name} is not a Full Name kindly input your Full Name `);
  }
  // to be able to access the name using the dot notation
  get fullName() {
    return this._fullName;
  }
}
// They are basicaLly Know as : INSTANCES
const Onyi = new PersonCl(`Onyi Ikeokwu`, 2002);
// Onyi.calAgeD();
// console.log(Onyi); // Onyi Ikeokwu

Onyi.fullName = `OnyiIkeokwu Maryjane`;
// console.log(Onyi); // OnyiIkeokwu Maryjane
// console.log(Onyi.fullName);
// console.log(PersonCl.fullNameChecker);

// feature
//1. Classes are Not hoisted
// 2. classes are first-class citizen
// 3. classes are executed in strict mode

// TOPIC Getters and Setters
const account = {
  owner: `Johnnie`,
  movement: [200, 580, 904, 680, 400],

  // get is used to get a value from an object
  // it is like a property but it is a method
  // THis is a getter method 👇🏽👇🏽
  //  A getter must have exactly zero parameters.

  get latest() {
    return account.movement.slice().pop();
  },

  // A setter must have exactly one parameter. A setter returns undefined.
  // This is a setter method 👇🏽👇🏽
  set latestMov(mov) {
    this.movement.push(mov);
  },
};

// console.log(account.latest);

account.latestMov = 50;
//  console.log(account.movement);

// TOPIC STATIC

// first example of static method

// 👉🏽 for constructor functions
const Animal = function (firstName, birthYear) {
  this.firstName = firstName;
  this.yearBirth = birthYear;
};

const ELephant = new Animal(`ELephant`, 2021);

Animal.greeting = function () {
  console.log(`hey there 👋🏼`);
};

// to call the function simply
// Animal.greeting();

// this can't because it's the direct child of the
// Animal.ELephant;

// For classes

class Phone {
  constructor(make, version) {
    this.fullName = make;
    this.version = version;
  }
  //N/B Static are direct child of function and not the prototype
  static hey() {
    // console.log(this);
  }
}
const Iphone11 = new Phone(`Iphone`, 11);
Phone.hey();
console.log(Iphone11.__proto__);
// console.log(Iphone11.hasOwnProperty(fullName));

// TOPIC OBJECT.CREATE

const PersonProto = {
  getAge() {
    const currentYear = new Date().getFullYear();
    // console.log(currentYear - this.birthYear);
  },

  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};
// The amaka will Now be an empty object
// which has the prototype we created above
const amaka = Object.create(PersonProto);

// putting values is into that object
amaka.name = `Amaka`;
amaka.birthYear = 2003;
// console.log(amaka);
// console.log(amaka.hasOwnProperty(`init`)); // false
// console.log(amaka.__proto__.hasOwnProperty(`init`)); // true
// console.log(PersonProto.hasOwnProperty(`init`)); // true

amaka.getAge();

const Chiamaka = Object.create(PersonProto);

Chiamaka.init(`Chiamaka`, 1999);
Chiamaka.getAge();

/*
Coding CHALLENGE #2
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h
GOOD LUCK 😀 
*/

class CarCl {
  // SOLUTION 1
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.name} is moving at ${this.speed}km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.name} is moving at ${this.speed}km/h`);
  }
  // SOLUTION2
  get speedUS() {
    return this.speed / 1.6;
  }
  // SOLUTION 3
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  // SOLUTION 4
}
const Ford = new CarCl(`Ford`, 120);

// console.log(Ford.speedUS);
Ford.speedUS = 75;
// console.log(Ford);
// console.log(Ford.speed);

// Ford.accelerate();
// Ford.accelerate();
// Ford.brake();
// Ford.brake();
// Ford.brake();
// Ford.brake();
// Ford.brake();

// TOPIC  INHERITANCE (constructors functions)

const PersonH = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

PersonH.prototype.calAge = function () {
  console.log(currentYear - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // /* 👉🏽 Use of Inheritance */
  PersonH.call(this, firstName, birthYear);

  this.course = course;
};

// Linking Prototypes
// For the child to be able to inherit from the parent prototype (PersonH)
// N/b this must be created before adding any more object to the child (instance)
Student.prototype = Object.create(PersonH.prototype);

// Student.prototype.introduce = function () {
//   console.log(`Hell my name is ${this.firstName} and I study ${this.course}`);
// };
Student.prototype.constructor = Student;

console.log(Student.prototype.constructor);
console.log(Student.prototype.constructor, Student.__proto__);
const mike = new Student(`Mike`, 2002, `Computer Science`);
console.dir(Student);

console.dir(mike);
console.log(mike);
console.log(mike.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof PersonH);
// console.log(mike instanceof Object);
// mike.introduce()
// mike.calAge()

/* 
Coding CHALLENGE #3
Your tasks:
1. Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make (brand name) and current speed, the 'EV' also has the
current battery charge in % ('charge' property)
2. Implement a 'chargeBattery' method which takes an argument
'chargeTo' and sets the battery charge to 'chargeTo'
3. Implement an 'accelerate' method that will increase the car's speed by 20,
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
km/h, with a charge of 22%'
4. Create an electric car object and experiment with calling 'accelerate',
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
you 'accelerate'! Hint: Review the definition of polymorphism 😉
Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀 */
// SOLUTION 1
const CarEV = function (name, speed) {
  this.name = name;
  this.speed = speed;
};

// accelerate() {
//   this.speed += 10;
//   console.log(`${this.name} is moving at ${this.speed}km/h`);
// }
// brake() {
//   this.speed -= 5;
//   console.log(`${this.name} is moving at ${this.speed}km/h`);
// }

// CarEV.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.name} is moving at ${this.speed}km/h`);
// };

// CarEV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge =
//   console.log(`${this.name} is moving at ${this.speed}km/h`);
// };

// SOLUTION 2
const EV = function (name, speed, charge) {
  CarEV.call(this, name, speed);
  this.charge = charge;
};

// for the instance to be able o inherit the CarEV (the parent function)
EV.prototype = Object.create(CarEV.prototype);

// SOLUTION 3
EV.prototype.chargeBattery = function (chargeTo) {
  console.log(this.charge);
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(`Tesla going at ${this.speed}
    km/h, with a charge of ${this.charge}%'`);
};
// SOLUTION 4
const Tesla = new EV(`Tesla`, 120, 23);
Tesla.chargeBattery(90);
console.log(Tesla);

// Tesla.accelerate();
// console.log(Tesla);
// Tesla.accelerate();
// console.log(Tesla);
// Tesla.accelerate();
// console.log(Tesla);
// console.log(Tesla.accelerate());
// // console.log(Tesla.accelerate());
// console.log(Tesla.accelerate());
// console.log(Tesla.accelerate());

// TOPIC USING adding INHERITANCE B/W : Class ES6 classes
class PersonEs {
  /** The fundamental part of most classes is its constructor,
which sets up each instance's initial state and handles any
parameters that were passed when calling new */
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calAgeD() {
    console.log(currentYear - this.birthYear); // was first written on 2022
  }
  set fullName(name) {
    // console.log(name.includes(` `));
    if (name.includes(` `)) this._fullName = name;
    else alert(`${name} is not a Full Name kindly input your Full Name `);
  }
  get fullName() {
    return this._fullName;
  }
}

// The extend keyword is used to create an Inheritance
// Of the parent function in Es6.
class StudentCl extends PersonEs {
  /**Inheritance works just like it does in
   * other object-oriented languages:
   * methods defined on the parent function are
   * accessible in the extending subclass (child Class).
   * If the subclass declares its own constructor
   * then it must invoke the parents
   * constructor via super()
   * before it can access the .this keyword */

  // 👇🏽 this only necessary when we have additional parameters
  constructor(fullName, birthYear, course) {
    //This Alway needs to happen first
    // it is responsible for creating
    // the `this keyword` this subclass
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(
      `Hello class my name is ${this.fullName} and I study ${this.course}`
    );
  }
}

console.log(StudentCl instanceof PersonEs);
const bobo = new StudentCl(`Bobo Ikem`, 2014, `Medicine`);
// bobo.calAgeD();
// bobo.introduce()

//🔍MORE EXAMPLES 🔍
class Account {
  //TOPIC ENCAPSULATION(EP) CLASS FIELDS AN METHOD
  // EP Public fields (properties)👇🏽
  // they are INSTANCES
  local = navigator.language;
  //////////////////////////
  // PRIVATE FIELDS'
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    //TOPIC ADDING ENCAPSULATION
    //👇🏽👇🏽( _ )
    //Protected property
    // this._pin = pin;
    // IMPLEMENTING PRIVATE FIELDS'
    this.#pin = pin;
    //Protected property
    //////////////////////////
    // this.#movements = [];
    // this.local = navigator.language;

    // you even execute codes on the construction function
    // console.log(`Thanks for opening an account, ${owner}`);
  }

  // PUBIC METHODS
  // get access to mov but being able to manipulate it.
  getMovement() {
    return this.#movements;
  }

  // API OF OUR APPLICATION
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  _approveLoan() {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan) this.deposit(Math.floor(val / 1.022));
    return this;
  }

  // PRIVATE METHODS
  // #approveLoan() {
  //   return true;
  // }
}

const acc1 = new Account(`Johnnie`, `NGN`, 1111);
acc1.deposit(900);
acc1.deposit(500);
acc1.withdraw(300);

acc1.requestLoan(2000);
// acc1.getMovement.push(300)
// console.log(acc1.#movements);
// console.log(acc1.getMovement());

// using the chaining method
acc1.deposit(500).withdraw(500).deposit(500).requestLoan(20000);

console.log(acc1);

// TOPIC USING adding INHERITANCE B/W : Object.create

const PersonPro = {
  getAge() {
    console.log(currentYear - this.birthYear); // first written on Jan 2023
  },

  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonPro);
// console.log(StudentProto); {}

StudentProto.initPro = function (fullName, birthYear, course) {
  console.log(this);
  PersonPro.init.call(this, fullName, birthYear);
  this.course = course;
};

const introduce = function () {
  console.log(`Hell my name is ${this.firstName} and I study ${this.course}`);
};

const sopulu = Object.create(StudentProto);
// console.log(sopulu); {}
sopulu.initPro(`Sopulu`, 1999, `art`);
// sopulu.getAge()

/*
CHALLENGE 4
Coding Challenge #4
Your tasks:
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!
Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/

// Note is must be a ES6 class you can extend
class TsCar {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is moving at ${this.speed}km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is moving at ${this.speed}km/h`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends TsCar {
  //PRIVATE FIELD
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    console.log(this.#charge);
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(`Tesla going at ${this.speed}
    km/h, with a charge of ${this.#charge}%'`);
    return this;
  }
}

//'Rivian' going at 120 km/h, with a charge of 23%

const Rivian = new EVCl('Rivian', 120, 23);

Rivian.brake().chargeBattery(38).accelerate();
