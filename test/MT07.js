function sumTwoSmallestNumbers(numbers) {
    arr = numbers.filter((number) => number >= 0).sort((a, b) => a - b).slice(0, 2).reduce((acc,item) => acc + item);
  return arr;
  
  
  }
console.log(sumTwoSmallestNumbers([19,5,42,2,77]));
console.log(sumTwoSmallestNumbers([10,343445353,3453445,3453545353453]));
console.log(sumTwoSmallestNumbers([2,9,6,-1]));
console.log(sumTwoSmallestNumbers([879,953,694,-847,942,221,-91,-723,791,-587]));
console.log(sumTwoSmallestNumbers([3689,2902,3951,-475,1617,-2385]));