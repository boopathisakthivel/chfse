const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;


describe("pow", function() {

  it("raises to n-th power", function() {
    assert.equal(Math.pow(2, 3), 8);
  });

  it("1==1", function() {
    expect(1).equal(1);
  });
});