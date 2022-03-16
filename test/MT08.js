function simplePair(arr,num) {
    numbers = "";
    i= 0;
    while(i<arr.length){
        if (arr[i] * arr[i+1] == num) {
            numbers = "["+arr[i]+","+arr[i+1]+"]";
        }
        else if (arr[i] * arr[i+2] == num) {
            numbers = "["+arr[i]+","+arr[i+2]+"]";
        }
        else if (arr[i+1] * arr[i+2] == num) {
            numbers = "["+arr[i+1]+","+arr[i+2]+"]";
        }
        else if(numbers == ""){
            numbers = "null";
        }
        ++i;
    }
    console.log(exam);
}
simplePair([1,2,3],3);
simplePair([1,2,3],6);
simplePair([1,2,3],9);