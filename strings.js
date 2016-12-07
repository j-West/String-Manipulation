


function reversal(str) {
str = str.split("").reverse().join("");
console.log(str);
}

function alphabits(str) {
str = str.split("").sort().join("");
console.log(str);
}

function palindrome(str) {
  if (str === str.split("").reverse().join("")) {
    console.log("Your string is a palidrome");
  }
}

function callFunctions() {
  let testString = document.querySelector("input").value;

  console.log(testString);

reversal(testString);
alphabits(testString);
palindrome(testString);
}
