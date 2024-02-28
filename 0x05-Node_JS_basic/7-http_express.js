/**
 * Create a more complex HTTP server using Express
 */
const fs = require('fs');
const express = require('express');

const app = express();
const port = 1245;


function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, records) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const content = records.split('\n');
        const cslist = [];
        const swelist = [];

        content.forEach((record) => {
          const field = record.split(',');
          // Check if the field is not empty
          if (field.length > 1) {
            if (field[3] === 'CS') {
              cslist.push(field[0]);
            } else if (field[3] === 'SWE') {
              swelist.push(field[0]);
            }
          }
        });

        let str = `Number of students: ${cslist.length + swelist.length}\n`;
        str += `Number of students in CS: ${cslist.length}. List: ${cslist.join(', ')}\n`;
        str += `Number of students in SWE: ${swelist.length}. List: ${swelist.join(', ')}`;
        resolve(str);
      }
    });
  });
}

// Handle requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Handle requests to the /students URL
app.get('/students', (req, res) => {
  // Replace 'database.csv' with the actual path to your CSV file
  const databasePath = 'database.csv';

  // Call countStudents function to get the student count and list
  countStudents(databasePath)
    .then((result) => {
      res.send(`This is the list of our students\n${result}`);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
