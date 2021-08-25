export function isPalindrome(inputString) {
  
   var length = Math.floor(inputString.length / 2);

   for (var i = 0; i < length; i++)

    if (inputString[i] !== inputString[inputString.length - i - 1])
      return false;

  return true;
}