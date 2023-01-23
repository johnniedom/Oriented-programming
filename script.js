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
  // console.log(2023 - this.yearBirth);
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
// console.log(Johnnie.__proto__ === Person.prototype); // true
// console.log(Person.prototype.isPrototypeOf(Johnnie)); // prototypeOfLinkedObject

// you also set properties
Person.prototype.Surname = 'Modebe';

// console.log(Johnnie.Surname, Chimdindu.Surname);

// checking properties
// console.log(Johnnie.hasOwnProperty(`firstName`));
// console.log(Johnnie.hasOwnProperty(`Surname`));
//
// console.log(Johnnie.__proto__);

// console.dir(Person.prototype.constructor);

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
const PersonCl1 = class {};

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
    console.log(2022 - this.birthYear);
  }
  //  console.log(fullName);

  // Be careful when ever you are trying to set a property
  // that already exist using the _under score

  set fullName(name) {
    // console.log(name.includes(` `));
    if (name.includes(` `)) this._fullName = name;
    else alert(`${name} is not a Full Name kindly input your Full Name `);
  }
  // to be able to access the name using the dot notation
  get fullName() {
    return this._fullName;
  }
}
// They are basicaLly Know as : INSTANCES
const Onyi = new PersonCl(`Onyi Ikeokwu`, 2002);
// // Onyi.calAgeD();
// console.log(Onyi);

// PersonCl.fullNameChecker = `OnyiIkeokwu`
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

  get latest() {
    return account.movement.slice().pop();
  },

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
  // console.log(`hey there 👋🏼`);
};

// to call the function simply
Animal.greeting();

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
    // console.dir(this);
    // console.dir(make);
  }
}
const Iphone11 = new Phone(`Iphone`, 11);
Phone.hey();

// TOPIC OBJECT.CREATE

const PersonProto = {
  getAge() {
    // console.log(2037 - this.birthYear);
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

amaka.getAge();

const Chiamaka = Object.create(PersonProto);

Chiamaka.init(`Chiamaka`, 1999);
Chiamaka.getAge();

/*
Coding Challenge #2
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

console.log(Ford.speedUS);
Ford.speedUS = 75;
console.log(Ford);
console.log(Ford.speed);

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
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;

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

console.dir(Student.prototype.constructor);
const mike = new Student(`Mike`, 2002, `Computer Science`);
console.dir(Student);

console.dir(mike);
console.log(mike);
console.log(mike.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof PersonH);
console.log(mike instanceof Object);
// mike.introduce()
// mike.calAge()

/* 
Coding Challenge #3
Your tasks:
1. Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the
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

CarEV.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.name} is moving at ${this.speed}km/h`);
};

CarEV.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.name} is moving at ${this.speed}km/h`);
};

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
// console.log(Tesla.accelerate());
// console.log(Tesla.accelerate());
Tesla.chargeBattery(90);
// console.log(Tesla);
// console.log(Tesla.accelerate());
// // console.log(Tesla.accelerate());
// console.log(Tesla.accelerate());
// console.log(Tesla.accelerate());

// TOPIC USING adding INHERITANCE B/W : Class ES 6 classes
class PersonEs {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calAgeD() {
    console.log(2022 - this.birthYear);
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

class StudentCl extends PersonEs {
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

const bobo = new StudentCl(`Bobo Ikem`, 2014, `Medicine`);
// bobo.calAgeD();
// bobo.introduce()

//🔍MORE EXAMPLES 🔍
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //TOPIC ADDING ENCAPSULATION
    //👇🏽👇🏽 _ 
    //Protected property
    this._pin = pin;
    //Protected property
    this._movements = [];
    this.local = navigator.language;

    // you even execute codes on the construction function
    console.log(`Thanks for opening an account, ${owner}`);
  }

    // get access to mov but being able to manipulate it.
    getMovement(){
      return this._movements;
    }

  // API OF OUR APPLICATION
  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }
  _approveLoan() {
    return true;
  }
  requestLoan(val) {
   if(this._approveLoan) this.deposit(Math.floor(val / 1.022));
  }
}

const acc1 = new Account(`Johnnie`, `NGN`, 1111);
acc1.deposit(900);
acc1.deposit(500);
acc1.withdraw(300);

acc1.requestLoan(2000)
// acc1.getMovement.push(300)
console.log(acc1.getMovement());
console.log(acc1);


// TOPIC USING adding INHERITANCE B/W : Object.create

const PersonPro = {
  getAge() {
    console.log(2023 - this.birthYear);
  },

  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonPro);

StudentProto.initPro = function (fullName, birthYear, course) {
  // console.log(this);
  PersonPro.init.call(this, fullName, birthYear);
  this.course = course;
};

const introduce = function () {
  console.log(`Hell my name is ${this.firstName} and I study ${this.course}`);
};

const sopulu = Object.create(StudentProto);

sopulu.initPro(`Sopulu`, 1999, `art`);
// sopulu.getAge()

cl
