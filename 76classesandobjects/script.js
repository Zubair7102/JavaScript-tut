// A class is a blueprint or a template for creating objects. It defines the structure and behavior of objects of a certain type. Classes typically contain properties (attributes) and methods (functions) that describe the characteristics and actions associated with the objects.


class RailwayForm {
  submit() {
    alert(this.name + ": Your form is submitted for train number: " + this.trainno)
  }
  cancel() {
    alert(this.name + ": This form is cancelled for train number: " + this.trainno)
  }
  fill(givenname, trainno) {
    this.name = givenname
    this.trainno = trainno
  }
}

// Create a form for Harry
let harryForm = new RailwayForm()
// Fill the form with Harry's details
harryForm.fill("Harry", 145316)

// Create a forms for Rohan
let rohanForm1 = new RailwayForm()
let rohanForm2 = new RailwayForm()
// Fill the forms with Rohan's details
rohanForm1.fill("Rohan", 222420)
rohanForm2.fill("Rohan", 2229211)

harryForm.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancel()