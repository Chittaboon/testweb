function numberSplit(sum) {
    number = sum/2;
    if (sum%2 == 0){
        console.log(number + "," + number);
    }
    else{
        console.log(number-0.5+", "+(number+0.5));
    }

}
numberSplit(4);
numberSplit(10);
numberSplit(11);
numberSplit(-9);
