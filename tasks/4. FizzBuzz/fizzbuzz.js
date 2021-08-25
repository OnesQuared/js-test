export function getFizzBuzzUntil(n) {
  
  var fizzybuzzy = []

  for(let i = 1; i <= n; i++) {

    if (i % 15 == 0) 
      fizzybuzzy[i - 1] = 'FizzBuzz'
    else if (i % 5 == 0)
      fizzybuzzy[i - 1] = 'Buzz'
    else if (i % 3 == 0)
      fizzybuzzy[i - 1] = 'Fizz'
    else fizzybuzzy[i - 1] = i;
  }
    
  return fizzybuzzy;
}
