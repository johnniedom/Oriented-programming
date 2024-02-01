# Prototype chain

`The prototype chain is a mechanism used in JavaScript to look up properties and methods of an object. When you try to access a property or method of an object, the JavaScript engine first looks for it on the object itself. If it can't find it, it looks for it on the object's prototype, and if it still can't find it, it looks for it on the prototype's prototype, and so on, following the prototype chain.`

`This allows you to create a hierarchy of objects, where objects lower in the hierarchy inherit properties and methods from objects higher up in the hierarchy. This can be used to create reusable code and can help to reduce code duplication`

*For example, you can have an object called "Animals" that has properties and methods that are common to all animals, such as "breathe" and "eat". Then, you can create other objects such as "Dog" and "Cat" that inherit from the "Animals" object and add their own properties and methods.

To understand this better, you can think of the prototype chain like a big family tree. Each object is like a person and it inherits properties and methods from its parents, grandparents, and so on, that are represented by the prototypes, just like a person inherits traits from its ancestors.

For example, when you look for a trait like "eyecolor" in your family, you first look for it in yourself, if you don't have it, you look for it in your parents, if they don't have it, you look for it in your grandparents and so on, following the family tree hierarchy.

It's worth noting that JavaScript has a built-in object called Object.prototype that is at the top of the prototype chain, which means that all objects in JavaScript inherit properties and methods from this object, unless they are overwritten or shadowed.

Also, it's important to note that the prototype chain is used to look up properties and methods, not to set them. When you add a property or method to an object's prototype, it's available on all objects that inherit from that prototype.
