export function Reduce(array, reducer, initialValue) {

  for (var i of array) {
    initialValue = reducer(initialValue, i);
  }
  
  return initialValue;
}
