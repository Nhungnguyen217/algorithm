// /* STACK basic */
// var letters = [];
// var word = "RaceCar";
// var rword = "";

// //put letters of word into stack
// for (var i = 0; i < word.length; i++) letters.push(word[i]);
// console.log(letters);
// // pop off the stack in reverse word
// for (var index = 0; index < word.length; index++) {
//   rword += letters.pop();
// }
// console.log(letters);

// if (word === rword) {
//   console.log(word + " is a palindrome"); //palindrome - xâu đối xứng là chuỗi viết xuôi ngược gì cũng giống nhau (trái sang phải hay phải sang trái)
// } else {
//   console.log(word + " is NOT a palindrome");
// }

/* STACK better */
// creat stack
var Stack = function () {
  this.count = 0;
  this.storage = {};
  //add value on to the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };
  //remove and return value at the end of stack
  this.pop = function () {
    if (this.count === 0) return undefined;
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };
  //check size
  this.size = function () {
    return this.count;
  };
  // return th value at the end of the stack
  this.peek = function () {
    return this.storage[this.count-1];
  };
};
// test
var myStack = new Stack();
console.log(myStack)
myStack.push(1)
myStack.push(2)
console.log(myStack)
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())
console.log(myStack.size())