## Encapsulation:

This is the practice of keeping fields within a class private, then providing access to them via public methods. It's a protective barrier that keeps the data and code safe from external interference and misuse.

```js
class BankAccount {
  constructor(balance) {
    this._balance = balance;
  }

  // Deposit money into the account
  deposit(amount) {
    this._balance += amount;
  }

  // Withdraw money from the account
  withdraw(amount) {
    if (amount > this._balance) {
      return 'Insufficient balance';
    }
    this._balance -= amount;
  }

  // Get the current balance of the account
  getBalance() {
    return this._balance;
  }
}
```

## Inheritance:

In object-oriented programming (OOP), inheritance is a fundamental concept that allows one class to inherit the properties (fields) and methods of another class. This process is known as inheritance because the new class inherits or receives the characteristics of the existing class.

By using inheritance, we can create new classes that are based on existing classes, which promotes code reuse and helps to organize and structure our code effectively. Instead of writing the same code multiple times, we can define common attributes and behaviors in a base class and then derive new classes from it.

Inheritance forms a hierarchical relationship between classes, where the derived class (also known as the child class or subclass) inherits the members of the base class (also known as the parent class or superclass). The derived class can then add its own unique properties and methods or override the inherited ones to customize its behavior.

This concept of inheritance allows us to create a class hierarchy, where classes at higher levels in the hierarchy provide more general functionality, and classes at lower levels specialize or extend that functionality. This hierarchical structure helps in organizing and managing complex codebases and promotes code reusability, maintainability, and extensibility.

Let's consider an example to illustrate:

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}
```

## Polymorphism

is a concept in object-oriented programming that allows methods to behave differently based on the object that it is acting upon. In other words, the same method can perform different things when applied to different types of objects.

In JavaScript, polymorphism can be achieved through inheritance and method overriding, or by assigning new methods to object instances.

Here's an example of polymorphism using classes and method overriding:

```js
class Animal {
  makeSound() {
    console.log('The animal makes a sound');
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('The dog barks');
  }
}

class Cat extends Animal {
  makeSound() {
    console.log('The cat meows');
  }
}

const dog = new Dog();
dog.makeSound(); // Outputs: The dog barks

const cat = new Cat();
cat.makeSound(); // Outputs: The cat meows

const animal = new Animal();
animal.makeSound(); // Outputs: The animal makes a sound
```

## Abstraction

in object-oriented programming is a way to reduce complexity and isolate impacts of changes. It allows us to hide the details and show only the essentials. It helps to reduce programming complexity and effort.

In JavaScript, we can achieve abstraction in several ways, including using classes and interfaces.

Here's an example of abstraction using a class:

```js
class Vehicle {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }
}

const car = new Vehicle('Tesla', 'Car');
console.log(car.getName()); // Tesla
console.log(car.getType()); // Car
```

In this example, `Vehicle` is a class that abstracts the concept of a vehicle. It has properties like `name` and `type`, and methods to get these properties. However, the internal implementation of these methods is hidden. As a user of the `Vehicle` class, you don't need to know how these methods are implemented. You only need to know that they exist, and what they do.

This is the essence of abstraction - it hides the details and shows you the functionality. You're interacting with the object based on what it does (it gives you the name and type of the vehicle), not how it does it (the internal implementation of the `getName` and `getType` methods)
