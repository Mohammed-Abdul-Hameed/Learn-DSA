function printNtoOne(n, arr = []) {
  if (n === 0) {
    return arr;
  } else {
    arr.push(n);
    return printNtoOne(n - 1, arr);
  }
}

console.log(printNtoOne(5));
