/**
 * Student controller class
 */
const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const filepath = process.argv.length > 2 ? process.argv[2] : '';
      const records = await readDatabase(filepath);
      const fields = Object.keys(records);
      fields.sort();
      response.statusCode = 200;
      response.write('This is the list of our students\n');
      for (const field of fields) {
        response.write(`Number of students in ${field}: ${records[field].length}. List: ${records[field].join(', ')}\n`);
      }
    } catch (err) {
      response.statusCode = 500;
      response.write(err.message);
    }
    response.end();
  }

  static async getAllStudentsByMajor(request, response) {
    const major = request.params.major;
    if (!['CS', 'SWE'].includes(major.toUpperCase())) {
      response.statusCode = 400; // Bad Request
      response.send('Major parameter must be CS or SWE');
    } else {
      const filepath = process.argv.length > 2 ? process.argv[2] : '';
      try {
        const records = await readDatabase(filepath);
        response.statusCode = 200;
        response.write(`List: ${records[major.toUpperCase()].join(', ')}\n`);
      } catch (err) {
        response.statusCode = 500;
        response.write(err.message);
      }
      response.end();
    }
  }
}

module.exports = StudentsController;
