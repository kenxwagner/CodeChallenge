
function palindrome(str) {
 // per rules of a palindrome, all are converted to lower case.
  str=str.toLowerCase();
 // non-regex filter for the test
  for (var i=0; i <str.length; i++){
    str=str.replace(' ', '');
    str=str.replace(',', '');
    str=str.replace('.', '');
    str=str.replace('/', '');
    str=str.replace('_', '');
    str=str.replace('-', '');
    str=str.replace('(', '');
    str=str.replace(')', '');
    
  }
 //create reversed copy of string
  var copyStr=str.split("").reverse().join("");
 //test for truthy or falsey;
  if (str == copyStr) {
    return true;
  }
      return false;  
}

palindrome("eye");
