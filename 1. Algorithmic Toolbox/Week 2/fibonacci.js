//INPUT
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf-8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fib(parseInt(line, 10)));
    process.exit();
}


//FIBONACCI NAIVE
const fib = (n) => {
    if (n <= 1) {
        return n;
    }
    return fib(n-1)+fib(n-2);
}

//FIBONACCI EFFICIENT
const fibefficient = (n) => {
    var arr = new Array(n);
    arr[0] = 0;
    arr[1] = 1;
    for (i=2; arr.length; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n];
}