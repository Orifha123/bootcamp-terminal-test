// greet.test.js
import assert from "assert";
import greet from "../greet.js";

describe('The greet function', function() {

    it('should greet Lucky correctly', function() {
        assert.equal('Hello, Lucky', greet('Lucky'));
    });
    it('should greet Loudrick correctly', function() {
        assert.equal('Hello, Loudrick', greet('Loudrick'));
    });
});
