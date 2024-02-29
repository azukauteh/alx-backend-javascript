# 0x06. Unittests in JS

This README provides guidance on writing and running unit tests in JavaScript.

## Table of Contents

1. [Introduction](#introduction)
2. [Setup](#setup)
3. [Writing Unit Tests](#writing-unit-tests)
4. [Running Unit Tests](#running-unit-tests)
5. [Conclusion](#conclusion)

## Introduction

Unit testing is a crucial aspect of software development that involves testing individual units or components of a program to ensure they function as expected. In JavaScript, unit tests are commonly written using testing frameworks like Jest, Mocha, or Jasmine.

This README will focus on using Jest for writing and running unit tests in JavaScript projects.

## Setup

1. Install Jest : If Jest is not already installed in your project, you can install it via npm or yarn.

    ```bash
    npm install --save-dev jest
    ```

    or

    ```bash
    yarn add --dev jest
    ```

2. Configure Jest : If needed, create a `jest.config.js` file in the root of your project to configure Jest options such as test environment, file paths, and other settings.

3.Write Tests : Create test files with the `.test.js` or `.spec.js` extension to distinguish them from regular JavaScript files.

## Writing Unit Tests

Writing effective unit tests involves creating test cases that cover different scenarios and edge cases of your code. Here's a basic example of how to write a unit test using Jest:

```javascript
// myModule.js
function sum(a, b) {
  return a + b;
}

module.exports = sum;
```

```javascript
// myModule.test.js
const sum = require('./myModule');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

In this example, we're testing a `sum` function to ensure that it correctly adds two numbers.

## Running Unit Tests

Once your tests are written, you can run them using Jest:

```bash
npx jest
```

This command will run all test files with names ending in `.test.js` or `.spec.js` in your project.

You can also specify a particular test file or directory to run:

```bash
npx jest myModule.test.js
```

For more advanced usage and options, refer to the Jest documentation.

## Conclusion

Unit testing is a critical part of ensuring the reliability and correctness of your JavaScript code. By following the steps outlined in this README, you can effectively write and run unit tests using Jest in your projects. Remember to continuously update and expand your tests as your codebase evolves
