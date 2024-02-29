

const Utils = {
  /**
   * Round params and perform arithmetic operation based on the type
   * @param {string} type - The type of operation (SUM, SUBTRACT, DIVIDE)
   * @param {number} a - The first number
   * @param {number} b - The second number
   * @returns {number|string} - The result of the operation or an error message
   */
  calculateNumber: function(type, a, b) {
    let result;
    if (type === 'SUM') {
      result = Math.round(a) + Math.round(b);
    } else if (type === 'SUBTRACT') {
      result = Math.round(a) - Math.round(b);
    } else if (type === 'DIVIDE') {
      if (Math.abs(Math.round(b)) === 0) {
        result = 'Error';
      } else {
        result = Math.round(a) / Math.round(b);
      }
    }
    return result;
  },
};

module.exports = Utils;
