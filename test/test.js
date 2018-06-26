let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {
    describe("#palindrome", function() {
        
        it("should return false for a non-palindrome", function(){
            let nonPalindrome = new Phrase("apple");
            assert (!nonPalindrome.palindrome());
        });
        
        it("should return true for a palindrome", function(){
            let plainPalindrome = new Phrase("racecar");
            assert (plainPalindrome.palindrome());
        });
        
        it("should return true for a mixed case palindrome", function() {
            let mixedPalindrome = new Phrase("RaCeCaR");
            assert (mixedPalindrome.palindrome());
        });
        
        it("should convert string to just letters", function() {
            let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
            assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
        });
        
        it("should return true for a palindrome with punctuation", function() {
            let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
            assert (punctuatedPalindrome.palindrome());
        });
    });
});

