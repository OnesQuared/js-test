export function areParenthesesBalanced(inputString) {

  let dummy = [];
  let map = {
      '(': ')',
  }

  for (var i = 0; i < inputString.length; i++) {

      if (inputString[i] === '(') {
        dummy.push(inputString[i]);
      }
      else {

          var last = dummy.pop();

          if (inputString[i] !== map[last]) {return false};
      }
  }

  if (dummy.length !== 0) {return false};

  return true;
}