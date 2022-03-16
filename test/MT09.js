function digitalClock(sec) {
    h = Math.floor(sec/3600);
    m = Math.floor((sec%3600)/60);
    s = (sec%3600)%60
    if(h>23){
        h=0;
    }
    if (h<10){
        h = '0' + h;
    }
    if (m<10){
        m = '0' + m;
    }
    if (s<10){
        s = '0' + s;
    }
    return h +':'+m+":"+s
}
console.log("5025 = "+digitalClock(5025));
console.log("61201 = "+digitalClock(61201));
console.log("87000 = "+digitalClock(87000));