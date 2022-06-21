
# DATA STRUCTURES

WE'VE HIT A
TURNING POINT IN THE COURSE

## WHAT DO THEY DO?

Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data
## WHY SO MANY???

Different data structures excel at different things.  Some are highly specialized, while others (like arrays) are more generally used.
## WHY CARE?

The more time you spend as a developer, the more likely you'll need to use one of these data structures

You've already worked with many of them unknowingly!

THERE IS NO ONE ***"BEST"*** DATA STRUCTURE

They all excel in different situations... \
Otherwise why bother learning them all??

**Working with map/location data?** \
==> Use a graph!

**Need an ordered list with fast inserts/removals at the beginning and end?** \
==> Use a linked list!

**Web scraping nested HTML?** \
==> Use a tree!

**Need to write a scheduler?** \
==> Use a binary heap!

## ES2015 CLASS SYNTAX

**Classes :-** \
Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

**Defining classes :-** \
Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.
## OBJECTIVES

- Explain what a class is
- Understand how JavaScript implements the **idea** of classes
- Define terms like abstraction, encapsulation and polymorphism
- Use ES2015 classes to implement data structures
## What is a class?

A blueprint for creating objects with pre-defined properties and methods.

**Does JavaScript really have them?** \
==> Ehh....not really
## Why do we need to learn this?

We're going to implement **data structures** as **classes!**
## THE SYNTAX

```
class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
```

The method to create new objects **must** be called constructor

The class keyword creates a constant, so you can not redefine it. Watch out for the syntax as well!
## Creating objects from classes

**We use the *new* keyword**

```
class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");
```

## Instance Methods

```
class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
}

let firstStudent = new Student("Colt", "Steele");

firstStudent.fullName() // "Colt Steele"
```
## Class Methods

```
class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
     
    //class Methods
    static enrollStudents(...students){
        // maybe send an email here
    }
}

let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");

Student.enrollStudents([firstStudent, secondStudent])
```
## How we'll be using classes

```
class DataStructure(){
    constructor(){
        // what default properties should it have?
    }
    someInstanceMethod(){
        // what should each object created from this class be able to do?
    }
}
```

We will be using the **constructor** and **instance methods** quite a bit!

We will almost **never** be using **static** methods
## One gotcha with `this`

Inside all of our ***instance*** methods and ***constructor***, the keyword `this` refers to the object created from that class (also known as an ***instance***)
## Recap

- Classes are blueprints that when created make objects known as **instances**
- Classes are created with the **new** keyword
- The **constructor** function is a special function that gets run when the class is instantiated
- Instance methods can be added to classes similar to methods in objects
- Class methods can be added using the **static** keyword