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

  describe('Login page', () => {
    it('responds with status code 200 and correct message', (done) => {
      try {
        request.post({ url: 'http://localhost:7865/login', json: { userName: 'JohnDoe' } }, (error, response, body) => {
          if (error) throw error;
          expect(response.statusCode).to.equal(200);
          expect(body).to.equal('Welcome JohnDoe');
          done();
        });
      } catch (error) {
        done(error);
      }
    });
  });

  describe('Available payments page', () => {
    it('responds with status code 200 and correct object structure', (done) => {
      try {
        request('http://localhost:7865/available_payments', (error, response, body) => {
          if (error) throw error;
          const paymentMethods = JSON.parse(body);
          expect(response.statusCode).to.equal(200);
          expect(paymentMethods).to.deep.equal({
            payment_methods: {
              credit_cards: true,
              paypal: false
            }
          });
          done();
        });
      } catch (error) {
        done(error);
      }
    });
  });
});
