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
    
  this.processedContent = function processedContent(string) {
  return string.toLowerCase();
  };
    
  this.palindrome = function palindrome() {
  return this.processedContent === this.processedContent().reverse();
  };
}
