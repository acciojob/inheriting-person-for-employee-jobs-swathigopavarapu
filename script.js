// Define the Person class
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Define the Employee class that inherits from Person
function Employee(name, age, jobTitle) {
  // Call the parent constructor
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit methods from Person prototype
Employee.prototype = Object.create(Person.prototype);

// Reset constructor
Employee.prototype.constructor = Employee;

// Define jobGreet() for Employee
Employee.prototype.jobGreet = function() {
  console.log(
    `Hello, my name is ${this.name} and I am ${this.age} years old, and my job title is ${this.jobTitle}.`
  );
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
