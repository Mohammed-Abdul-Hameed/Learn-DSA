function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

//Test Data

let arr = [9, 7, 2, 16, 4];
let n = 5;
let k = 16;

//Function call

let result = search(arr, n, k);
result == -1 ? console.log("Element is not present") : console.log("Element is present at", result);
