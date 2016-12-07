let resultsDiv = document.querySelector(".results-div");


function reversal(str) {
str = str.split("").reverse().join("");
// console.log(str);
let reversalH3 = document.createElement("h3");
reversalH3.innerHTML = "Your input reversed is :" + str;
resultsDiv.appendChild(reversalH3);

}

function alphabits(str) {
str = str.split("").sort().join("");
// console.log(str);
let alphabeticalH3 = document.createElement("h3");
alphabeticalH3.innerHTML = "Your input in alphabetical order is :" + str;
resultsDiv.appendChild(alphabeticalH3);
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
