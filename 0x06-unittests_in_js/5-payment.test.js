
/**
 * Test payment Utils.calculateNumber
 * Hooks Function
 */


const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToAp', function() {
  beforeEach(function() {
    sinon.spy(console, "log");
  });
  afterEach(function() {
    sinon.restore();
  });
  
  it("should log 'The total is: 120' when called with 100 and 20", function() {
    sendPaymentRequestToApi(100, 20);
    // Check that console.log is called once
    expect(console.log.calledOnce).to.be.true;
    // Check the console.log call count
    expect(console.log.callCount).to.be.equal(1);
    // Check the console.log param
    expect(console.log.calledWith('The total is: 120')).to.be.true;
  });

  it("should log 'The total is: 20' when called with 10 and 10", function() {
    sendPaymentRequestToApi(10, 10);
    // Check that console.log is called once
    expect(console.log.calledOnce).to.be.true;
    // Check the console.log call count
    expect(console.log.callCount).to.be.equal(1);
    // Check the console.log param
    expect(console.log.calledWith('The total is: 20')).to.be.true;
  });
});

