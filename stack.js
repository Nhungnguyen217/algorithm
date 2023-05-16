/* STACK basic */
var letters = [];
var word = "RaceCar";
var rword = "";

//put letters of word into stack
for (var i = 0; i < word.length; i++) letters.push(word[i]);
console.log(letters);
// pop off the stack in reverse word
for (var index = 0; index < word.length; index++) {
  rword += letters.pop();
}
console.log(letters);

if (word === rword) {
  console.log(word + " is a palindrome"); //palindrome - xâu đối xứng là chuỗi viết xuôi ngược gì cũng giống nhau (trái sang phải hay phải sang trái)
} else {
  console.log(word + " is NOT a palindrome");
}
