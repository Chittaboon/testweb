function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function run() {
    // login
    console.log("Start!!");
    // try take of await and conpare
    await promiseTimeout(2000);
    console.log("Stop!!");
}

console.log('Before run');
run();
console.log('After run');