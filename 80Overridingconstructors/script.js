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

class Programmer extends Employee {
  constructor(name) {
    super(name)
    // The super(name) statement in the Programmer constructor calls the constructor of the parent class Employee with the provided name
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






// This code defines two classes, `Employee` and `Programmer`, which demonstrate the concept of inheritance in JavaScript. The `Programmer` class is a subclass of the `Employee` class. Let's explain the code and the specific part you've asked about:

// 1. **`Employee` Class**:
//    - The `Employee` class has a constructor that takes a `name` parameter, and it logs a message indicating the creation of an employee with the provided name.
//    - It has three methods: `login()`, `logout()`, and `requestLeaves(leaves)`, each of which logs messages related to the corresponding action.

// 2. **`Programmer` Class (Subclass)**:
//    - The `Programmer` class extends the `Employee` class, making it a subclass of `Employee`. It has its own constructor that takes a `name` parameter.
//    - The `super(name)` statement in the `Programmer` constructor calls the constructor of the parent class `Employee` with the provided `name`.
//    - It also defines a new method, `requestCoffee(x)`, which logs a message about requesting a certain number of coffees.
//    - The `requestLeaves(leaves)` method in the `Programmer` class overrides the same method in the parent class. It first calls the parent class's `requestLeaves` method with an argument of 4 using `super.requestLeaves(4)`, and then it logs an additional message indicating that one extra leave is granted.

// 3. **Creating an Instance**:
//    - An instance of the `Programmer` class is created with the name "Harry" and assigned to the variable `e`.
//    - The constructor of the `Employee` class is called, and the constructor of the `Programmer` class is called as well due to the `super(name)` statement.

// 4. **Method Calls**:
//    - `e.login()` calls the `login()` method, logging a message indicating that the employee has logged in.
//    - `e.requestLeaves(3)` calls the `requestLeaves` method of the `Programmer` class. This method first calls the parent class's `requestLeaves` method, which logs the message about requesting 4 leaves. Then, it logs an additional message stating that one extra leave is granted.

// So, in summary, this code demonstrates how a subclass (`Programmer`) can inherit from a parent class (`Employee`) and override its methods while also calling the parent class's methods using `super`. It also shows how the subclass can have its own methods and constructors.