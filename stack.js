/* STACK */
var letter = []; //this is our stack
var word = "raceCar";
var rword = "";

//put word into stack
// letter.push(word)

// put letters of word into stack
for (var i = 0; i < word.length; i++) {
  letter.push(word[i]);
}

// pop off the stack in reverse order
for (var index = 0; index < word.length; index++) {
  rword += letter.pop();
}

console.log(letter);
console.log(rword);

if(rword === word ) console.log("same")
else console.log("No")
