function equation(num) {
    const words = num.split(' ');
    let number = [],oparater = [];
    let sum = 0;
    for (let index = 0; index < words.length; index++) {
        if (words[index] == "one") {
            number[index] = 1;
        }else if(words[index] == "two"){
            number[index] = 2;
        }else if(words[index] == "+"){
            oparater[index] = "+";
        }
    }
    for (let index = 0; index < number.length; index++) {
        if(oparater = "+"){
            sum += number[index];
        }
    }
    return sum;
}

let s = equation("one + one");
console.log(s);
s = equation("one + two");
console.log(s);