class Animal {
  constructor(name, color) {
    this.name = name
    this.color = color
  }
  run() {
    console.log(this.name + " is running!")
  }
  shout() {
    console.log(this.name + " is barking!")
  }
}

class Monkey extends Animal {
  eatBanana() {
    console.log(this.name + " is eating banana")
  }
  hide() {
    console.log(`${this.name} is hiding`)
  }
}

let ani = new Animal("Bruno", "white")
let m = new Monkey("Chimpu", "orange")

ani.shout()
m.eatBanana()
m.hide()
// ani.hide() //This will throw an error


// In the provided code, you have two classes: `Animal` and `Monkey`. `Monkey` is a subclass of `Animal`, which means it inherits the properties and methods of the `Animal` class. You've created instances of both `Animal` and `Monkey` classes, named `ani` and `m`, respectively.

// Here's the key part of the code you're asking about:

// ```javascript
// ani.shout()
// m.eatBanana()
// m.hide()
// // ani.hide() //This will throw an error       explain this
// ```

// 1. `ani.shout()`: This line calls the `shout` method on the `ani` object, which is an instance of the `Animal` class. It will print "Bruno is barking!" to the console because the `name` property of the `ani` object is "Bruno".

// 2. `m.eatBanana()`: This line calls the `eatBanana` method on the `m` object, which is an instance of the `Monkey` class. It will print "Chimpu is eating banana" to the console because the `name` property of the `m` object is "Chimpu".

// 3. `m.hide()`: This line calls the `hide` method on the `m` object. The `Monkey` class has a `hide` method, so it will print "Chimpu is hiding" to the console.

// 4. `ani.hide()`: This line attempts to call the `hide` method on the `ani` object, which is an instance of the `Animal` class. However, the `Animal` class does not have a `hide` method defined. It only has `run` and `shout` methods. Therefore, calling `ani.hide()` will result in an error, specifically, "TypeError: ani.hide is not a function" because the `hide` method does not exist in the `Animal` class.

// Inheritance in JavaScript allows a subclass to inherit methods and properties from its superclass, but it does not work the other way around. So, a subclass can access the methods of the superclass, but the superclass cannot access the methods of the subclass. That's why `m.hide()` works for the `Monkey` object `m`, but `ani.hide()` does not work for the `Animal` object `ani`.









// In JavaScript, the `extend` keyword is not used. Instead, you use the `extends` keyword to implement inheritance between classes. The `extends` keyword is part of the class syntax introduced in ECMAScript 2015 (ES6) and is used to create a subclass (child class) that inherits properties and methods from a superclass (parent class).

// Here's how you use `extends` in JavaScript to define a subclass:

// ```javascript
// class Parent {
//   // Parent class properties and methods
// }

// class Child extends Parent {
//   // Child class properties and methods
// }
// ```

// In this example, `Child` is a subclass that extends the `Parent` class. The `Child` class inherits the properties and methods of the `Parent` class. This concept is known as class inheritance, and it allows you to create a hierarchy of classes where child classes can access and extend the functionality of parent classes.

// Here's a simple example:

// ```javascript
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(this.name + " makes a sound.");
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log(this.name + " barks.");
//   }
// }

// const myDog = new Dog("Buddy");
// myDog.speak(); // Output: "Buddy barks."
// ```

// In this example, `Dog` is a subclass of `Animal`. It extends the `Animal` class and overrides the `speak` method to provide its own implementation. When you create an instance of `Dog` and call the `speak` method, it calls the overridden method specific to the `Dog` class. This demonstrates how the `extends` keyword enables class-based inheritance in JavaScript.