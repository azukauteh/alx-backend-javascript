

```markdown
# 0x03. ES6 Data Manipulation

## Description

This project explores and demonstrates data manipulation in JavaScript using ES6 features. The primary focus is on leveraging the power of Array, Typed Array, Set Data Structure, Map Data Structure, and WeakMap for effective data handling.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Examples](#examples)


## Installation

Ensure you have Node.js installed on your machine. Clone the repository and install dependencies.

```bash
git clone https://github.com/azukauteh/alx-backend-javascript.git

cd 0x03-es6-data-manipulation

npm install
```

## Usage

To use the project, follow these steps:

Install NodeJS 12.11.x
(in your home directory):

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh

sudo bash nodesource_setup.sh

sudo apt install nodejs -y
```

1. Use the provided functions for data manipulation.


## Features

- Array Manipulation : Utilize powerful array methods to perform various operations.
- Typed Array Usage : Leverage Typed Arrays for efficient handling of binary data.
- Set Data Structure : Implement Set to manage unique values in a collection.
- Map Data Structure : Use Map to create key-value pairs for effective data storage.
-  WeakMap : Explore WeakMap for additional data security and efficient memory management.

## Examples

Explore the examples directory for practical usage scenarios and code snippets showcasing the project's capabilities.

```javascript
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 2

```

