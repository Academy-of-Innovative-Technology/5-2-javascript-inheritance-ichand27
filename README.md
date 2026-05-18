[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=23946792&assignment_repo_type=AssignmentRepo)
# 04.4 - Class Inheritance in Javascript

## Exercise 1

We are going to create a new class based off of our existing Pet class. 

1. On line 15, create a class and give it a name.
2. Before your opening curly brace, write the word `extends` and the name of our original class. Ex: `class Dog extends Pet {`
3. On line 17, add the code: `super()`. Inside your parentheses, you will process the properties included in the original class. Ex: `super(name, breed);`

## Exercise 2

1. Create a Base Class:
- Start by creating a base class named Person. This class will have properties like name and age, and a method (like a function inside the class) to display person's details.


2. Extend the Base Class:
- Create a new class called Student that extends the Person class.
- Use the extends keyword to inherit properties and methods from the Person class.
- Use the `super()` method to call the constructor of the parent class. Load the properties from the parent class into our new Student class.
- Create a method inside our new class to display the details of student.

3. Create Another Extended Class:
- Create a Teacher class that also extends Person. Be sure to add the super keyword and load name and age in.
- Add properties specific to the Teacher class, like subject.
- Create a method inside Teacher to display the details of teacher.

4. Test your classes
- Create instances of Student and Teacher and call the display methods you created.