function equation(num) {
    const words = num.split(' ');
    let sum = 0;
    for (let index = 0; index < words.length; index++) {
        if (words[index] == "+"){
        if (words[index] == "two") {
            sum += 2;
        }
        else if(words[index] == "one") {
            sum +=1;
        }
        else if(words[index] == "three") {
            sum +=3;
        }
    }
    else if (words[index] == "-"){
        if (words[index] == "two") {
            sum -= 2;
        }
        else if(words[index] == "one") {
            sum -=1;
        }
        else if(words[index] == "three") {
            sum -=3;
        }
    }
    }
    return sum;
}


let s = equation("three + two + three");
console.log(s);
let a = equation("three - one + one");
console.log(a);