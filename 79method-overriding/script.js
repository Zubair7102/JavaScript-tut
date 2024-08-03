class Employee {
  constructor(name) {
    console.log(`${name} - Employee's constructor is here`)
    this.name = name
  }
  login() {
    console.log(`Employee has logged in`);
  }

  logout() {
    console.log(`Employee has logged out`);
  }

  requestLeaves(leaves) {
    console.log(`Employee has requested ${leaves} leaves - Auto approved`)
  }
}
``

class Programmer extends Employee {
  constructor(name) {
    super(name)
    console.log(`This is a newly written constructor`)
  }
  // constructor(...args){ ---> If there is no constructor in the child class, this is created automatically
  //   super(...args)
  // }
  requestCoffee(x) {
    console.log(`Employee has requested ${x} coffees`)
  }
  requestLeaves(leaves) {
    super.requestLeaves(4)
    console.log("One extra is granted")
    // console.log(`Employee has requested ${leaves + 1} leaves (One extra)`)

  }
}

let e = new Programmer("Harry")
e.login()
e.requestLeaves(3)




// Let's break down the code step by step and explain what happens when you create an instance of the `Programmer` class and call the `login` and `requestLeaves` methods.
// class Employee {
//   constructor(name) {
//     console.log(`${name} - Employee's constructor is here`);
//     this.name = name;
//   }
//   login() {
//     console.log(`Employee has logged in`);
//   }

//   logout() {
//     console.log(`Employee has logged out`);
//   }

//   requestLeaves(leaves) {
//     console.log(`Employee has requested ${leaves} leaves - Auto approved`);
//   }
// }

// class Programmer extends Employee {
//   constructor(name) {
//     super(name);
//     console.log(`This is a newly written constructor`);
//   }

//   requestCoffee(x) {
//     console.log(`Employee has requested ${x} coffees`);
//   }

//   requestLeaves(leaves) {
//     super.requestLeaves(4);
//     console.log("One extra is granted");
//   }
// }

// let e = new Programmer("Harry");
// e.login();
// e.requestLeaves(3);
// ```

// 1. You have two classes: `Employee` and `Programmer`. `Programmer` is a subclass of `Employee`, which means it inherits the properties and methods of the `Employee` class.

// 2. When you create an instance of the `Programmer` class with `let e = new Programmer("Harry");`, the constructor for the `Employee` class is called first, which logs the message indicating that "Harry - Employee's constructor is here." This constructor sets the `name` property of the `Programmer` object to "Harry". Then, the constructor for the `Programmer` class is called, which logs the message "This is a newly written constructor."

// 3. When you call `e.login();`, it invokes the `login` method of the `Employee` class, which logs "Employee has logged in." This method is inherited from the parent class.

// 4. When you call `e.requestLeaves(3);`, it invokes the `requestLeaves` method of the `Programmer` class. However, in this method, there's a call to `super.requestLeaves(4);`. This `super` keyword is used to call the `requestLeaves` method of the parent class (Employee). So, it logs "Employee has requested 4 leaves - Auto approved" (from the parent class), and then it logs "One extra is granted." This demonstrates that you can override and extend methods from the parent class in the child class.

// In summary, you have created a `Programmer` object, which is a type of `Employee`. It has its own constructor and methods, but it also inherits methods from the `Employee` class. When you call methods on the `Programmer` object, it can use both its own methods and the inherited methods from the `Employee` class, and it can also extend and override those inherited methods.