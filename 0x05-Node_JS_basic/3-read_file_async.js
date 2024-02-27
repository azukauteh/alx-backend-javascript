const fs = require('fs');

/**
 * Reads file asynchronously and prepares a report with the data from a csv file
 * @param {string} filepath - The path to the database file
 * @returns {Promise} A promise that resolves with the student count and field lists
 */
function countStudents(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const records = data.split('\n').filter(Boolean); // Filter out empty lines
      const cslist = [];
      const swelist = [];

      records.forEach((record) => {
        const field = record.split(',');
        if (field.length > 1) { // Check if the field array has more than one element
          if (field[3] === 'CS') {
            cslist.push(field[0]);
          } else if (field[3] === 'SWE') {
            swelist.push(field[0]);
          }
        }
      });

      const numberOfStudents = cslist.length + swelist.length;
      const result = {
        numberOfStudents,
        cs: { count: cslist.length, list: cslist },
        swe: { count: swelist.length, list: swelist }
      };

      console.log(`Number of students: ${numberOfStudents}`);
      console.log(`Number of students in CS: ${cslist.length}. List: ${cslist.join(', ')}`);
      console.log(`Number of students in SWE: ${swelist.length}. List: ${swelist.join(', ')}`);

      resolve(result);
    });
  });
}

module.exports = countStudents;
