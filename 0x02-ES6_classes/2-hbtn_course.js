export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateString(name, 'Name');
    this._length = this.validateNumber(length, 'Length');
    this._students = this.validateStudentsArray(students, 'Students');
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(newName) {
    this._name = this.validateString(newName, 'Name');
  }

  set length(newLength) {
    this._length = this.validateNumber(newLength, 'Length');
  }

  set students(newStudents) {
    this._students = this.validateStudentsArray(newStudents, 'Students');
  }

  validateString(value, attribute) {
    if (typeof value !== 'string' || value === '') {
      throw new TypeError(`${attribute} must be a non-empty string`);
    }
    return value;
  }

  validateNumber(value, attribute) {
    if (typeof value !== 'number' || isNaN(value) || value <= 0) {
      throw new TypeError(`${attribute} must be a positive number`);
    }
    return value;
  }

  validateStudentsArray(value, attribute) {
    if (!Array.isArray(value) || value.some((item) => typeof item !== 'string' || item === '')) {
      throw new TypeError(`${attribute} must be an array of non-empty strings`);
    }
    return value;
  }
}
