function totalVolume(...base){
  sum = 0;
  for (i=0; i<base.length; i++) {
      sum += base[i][0] * base[i][1] * base[i][2];
  }
  return sum;
}
console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]));
console.log(totalVolume([2,2,2],[2,1,1]));
console.log(totalVolume([1,1,1]));