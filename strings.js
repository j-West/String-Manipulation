


function reversal(str) {
str = str.split("").reverse().join("");
console.log(str);
}

function alphabits(str) {

}

function palindrome(str) {

}

function callFunctions() {
  let testString = document.querySelector("input").value;
console.log(testString);


reversal(testString);
alphabits(testString);
palindrome(testString);
}
