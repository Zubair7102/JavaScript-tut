class Animal {
  constructor(name) {
    this._name = name
  }
  fly() {
    console.log("Mai ud rha hu")
  }
  get name() {
    return this._name
  }

  set name(newName) {
    this._name = newName
  }

}

class Rabbit extends Animal {
  eatCarrot() {
    console.log("Eating carrot")
  }
}
// Rabbit is a subclass of Animal, which means it inherits properties and methods from the Animal class. Let's break down the code and then explain the instanceof operator:

let a = new Rabbit("Bruno")
a.fly()
console.log(a.name)
a.name = "Jack"
console.log(a.name)
let c = 56

console.log(a instanceof Animal)
console.log(a instanceof Rabbit)
console.log(c instanceof Animal)