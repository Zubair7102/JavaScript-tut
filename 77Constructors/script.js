class RailwayForm {
  constructor(givenname, trainno, address) {
    console.log("CONSTRUCTOR CALLED..." + givenname + " " + trainno)
    this.name = givenname
    this.trainno = trainno
    this.address = address
  }

  preview() {
    alert(this.name + ": Your form is for Train number: " + this.trainno + " and your address is " + this.address)
  }

  submit() {
    alert(this.name + ": Your form is submitted for train number: " + this.trainno)
  }

  cancel() {
    alert(this.name + ": This form is cancelled for train number: " + this.trainno)
    this.trainno = 0
  }
}

let harryForm = new RailwayForm("Harry", 13488, "420, Pacific Ocean, Ocean, Bihar - 0000555")
harryForm.preview()
harryForm.submit()
harryForm.cancel()
harryForm.preview()



// In this JavaScript code, a `RailwayForm` class is defined with a constructor and several methods for managing railway forms. It creates an instance of the class for "Harry" and performs various actions on the form. Let's break down the code step by step:

// 1. **Constructor and Instance Creation**:
//    - The `RailwayForm` class has a constructor that takes three parameters: `givenname`, `trainno`, and `address`.
//    - Inside the constructor, it initializes properties (`name`, `trainno`, and `address`) based on the provided values.
//    - The constructor logs a message indicating that it has been called.

//    ```javascript
//    let harryForm = new RailwayForm("Harry", 13488, "420, Pacific Ocean, Ocean, Bihar - 0000555");
//    ```

//    - The `new RailwayForm(...)` line creates an instance of the `RailwayForm` class for "Harry" and assigns it to the variable `harryForm`. The constructor is called with the provided values, setting the object's properties.

// 2. **`preview` Method**:
//    - The `preview` method is used to display an alert message with details from the form, including the name, train number, and address.

//    ```javascript
//    harryForm.preview();
//    ```

//    - The `preview` method is called on the `harryForm` instance, showing an alert message with the form details.

// 3. **`submit` Method**:
//    - The `submit` method is used to display an alert message indicating that the form is submitted for a specific train number.

//    ```javascript
//    harryForm.submit();
//    ```

//    - The `submit` method is called on the `harryForm` instance, showing an alert message with the submission status.

// 4. **`cancel` Method**:
//    - The `cancel` method is used to display an alert message indicating that the form is canceled for a specific train number.
//    - Additionally, it sets the `trainno` property to 0.

//    ```javascript
//    harryForm.cancel();
//    ```

//    - The `cancel` method is called on the `harryForm` instance, showing an alert message and updating the `trainno` property.

// 5. **Preview Again**:
//    - After canceling the form, the `preview` method is called again on the `harryForm` instance, showing an alert message with the updated details.

// In summary, the code creates an instance of the `RailwayForm` class for "Harry," fills out the form with details, and then performs actions such as previewing the form, submitting it, and canceling it, demonstrating how the class and its methods can be used to manage railway forms.