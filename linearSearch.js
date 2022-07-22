/*
////Linear search using for loop 

let array = [6, 7, 12, 5, 8, 14];

function linearSearch(array, num) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === num)  return i;
  }
  return -1;
}

console.log(linearSearch(array, 8));
*/

/////Linear search using while loop
/*
let num = 14;
let array = [6, 7, 12, 5, 8, 14];

function linearSearch(array, num) {
  let i = 0;
  while (i < array.length) {
    if (array[i] === num) {
      return i;
    }
    i++;
  }
}
console.log(linearSearch(array, num));
*/

////what if there are two duplicate elements to search

/////using for loop
/*
let array = [6, 7, 12, 5, 8, 12];
function linearSearch(array, num) {
    let results =[]
  for (i = 0; i < array.length; i++) {
    if (array[i] === num)  {
        results.push(i)
    }
  }
  return results;
}
console.log(linearSearch(array, 12));
*/

////using while loop
let array = [6, 7, 12, 5, 8, 12]; // i want two 12 positions
let target = 12;
function globalLinearSearch(array, target) {
  results = [];
  let i = 0;
  while (i < array.length) {
    if (array[i] === target) {
      results.push(i);
    }
    i++;
  }
  return results;
}
console.log(globalLinearSearch(array, target));
