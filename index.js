module.exports = Phrase;

String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
};

String.prototype.blank = function() {
  return !!this.match(/^\s*$/);
};

Array.prototype.last = function() {
  return this.slice(-1);
  
  
};

function Phrase(string) {
  this.content = string;
    
  this.processedContent = function processedContent() {
  return this.content.toLowerCase();
  };
    
  this.palindrome = function palindrome() {
  return this.processedContent() === this.processedContent().reverse();
  };
  
  this.letters = function letters() {
    let processedArray = Array.from(this.content)
    let finalArray = [];
    processedArray.forEach( function(element) {
      if (element.match(/\w/)) {
        finalArray.push(element)
      };
    });
    return finalArray.join("")
  };
  
}
