
function palindrome(str) {
 // per rules of a palindrome, all are converted to lower case.
 // also using regular expressions
  str=str.toLowerCase().replace(/[^a-z0-9]+/g, "");

 //create reversed copy of string
  var copyStr=str.split("").reverse().join("");
 //test for truthy or falsey;
  if (str == copyStr) {
    return true;
  }
      return false;  
}

palindrome("eye");