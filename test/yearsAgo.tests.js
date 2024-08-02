import assert from 'assert';
import yearsAgo from '../yearsAgo.js';
describe ("Testing the yearsAgo function", function(){
    it ("it should return a number,when it called with a year", function(){
      
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });
      
      });