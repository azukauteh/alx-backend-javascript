
/**
 * api.test.js
 *
 */
const request = require('supertest');
const app = require('./api');
const chai = require('chai');

const { expect } = chai;

describe('Index page', () => {
  it('responds with status code 200 and correct result', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});
