/**
 * api.test.js
 */

const request = require('request');
const chai = require('chai');

const { expect } = chai;

describe('Index page', () => {
  it('response', (done) => {
    try {
      request('http://localhost:7865/', (error, response, body) => {
        if (error) throw error;
        expect(body).to.equal('Welcome to the payment system');
        expect(response.statusCode).to.equal(200);
        done();
      });
    } catch (error) {
      done(error);
    }
  });

  describe('Cart page', () => {
    it('responds with correct status code when :id is a number', (done) => {
      try {
        request('http://localhost:7865/cart/7', (error, response, body) => {
          if (error) throw error;
          expect(body).to.equal('Payment methods for cart 7');
          expect(response.statusCode).to.equal(200);
          done();
        });
      } catch (error) {
        done(error);
      }
    });

    it('responds with status code 404 when :id is NOT a number', (done) => {
      try {
        request('http://localhost:7865/cart/devops', (error, response) => {
          if (error) throw error;
          expect(response.statusCode).to.equal(404);
          done();
        });
      } catch (error) {
        done(error);
      }
    });
  });
});
