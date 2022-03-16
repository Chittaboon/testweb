function capToFront(word) {
    let upperRgx = /[A-Z]/g;
    let upperLetters = word.match(upperRgx);
    for(let i=0; i < upperLetters.length;i++) {
        let indx = word.indexOf(upperLetters[i]);
        word = word.substring(0,indx)+word.substring(indx+1,word.length);
    }
    word = upperLetters.join("")+word;

    return word;
}

console.log(capToFront("hApPy")) 
console.log(capToFront("moveMENT")) 
console.log(capToFront("shOrtCAKE")) 