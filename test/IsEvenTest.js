var check = require("../src/index")

var expect = require('chai').expect;
var should = require('chai').should();

describe("IsEven", function(){
    it("Return true for even", function(){
        check.isEven(4).should.be.true;
    })
});