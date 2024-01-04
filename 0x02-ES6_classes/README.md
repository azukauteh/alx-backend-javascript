#0x02. ES6 Classes
---

## Overview

Welcome to the 0x02. ES6 Classes README! This document provides an introduction and overview of ES6 classes, a powerful feature introduced in ECMAScript 2015 (ES6) to simplify object-oriented programming in JavaScript. Understanding ES6 classes is crucial for organizing and structuring code in a more modular and reusable manner.

## What are ES6 Classes?

ES6 classes are a syntactical sugar over JavaScript's existing prototype-based inheritance. They provide a cleaner and more concise syntax for creating constructor functions and handling object-oriented programming concepts. ES6 classes make it easier to work with objects and their behaviors.

## Key Features of ES6 Classes

## Class Declarations:

- Introduces a `class` keyword to declare classes.
- Provides a more structured and readable way to define object blueprints.

## Constructor Method :

- Allows the definition of a special method called `constructor` for initializing class instances.
- Replaces the traditional constructor functions used in pre-ES6 JavaScript.

## Class Methods :

- Defines methods inside the class body, providing a cleaner way to encapsulate functionality.

## Getter and Setter Methods :

- Supports the creation of getter and setter methods for accessing and modifying class properties.

## Inheritance :

- Facilitates the creation of subclasses with the `extends` keyword.
- Enables the use of the `super` keyword to call methods from the parent class.

## Static Methods :

- Introduces the `static` keyword to define methods that are called on the class itself, rather than on instances of the class.

## Getting Started

To start using ES6 classes, ensure that your development environment supports ECMAScript 2015 or later. Most modern browsers and Node.js versions have excellent support for ES6 features.

Explore each feature in detail by practicing and writing code examples. Familiarize yourself with the syntax, inheritance, and other concepts introduced by ES6 classes.

## Example Usage

```javascript
// Define a simple ES6 class
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Define a method
  makeSound() {
    console.log('Some generic sound');
  }
}

// Create an instance of the class
const myAnimal = new Animal('Fluffy');

// Call a method on the instance
myAnimal.makeSound();
```
- Setup
Install NodeJS 12.11.x
(in your home directory):

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

```bash
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```
