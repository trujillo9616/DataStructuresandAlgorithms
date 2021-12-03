//READLINE
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf-8');
rl.once('line', () => {
    rl.on('line', readLine);
});

const readLine = (line) => {
    const arr = line.toString().split(' ').map(Number);

    console.log(maxsort(arr));
    process.exit();
}

/*//NAIVE APPROACH
const maxnaive = (arr) => {
    let product = 0;
    for (i = 0; i < arr.length; i++) {
        for (j=i+1; j < arr.length; j++) {

            if (product<arr[i]*arr[j] && arr[i]!=arr[j]) {
                product = arr[i] * arr[j];
            }
        }
    }
    return product;
}*/

/*//FAST ALGORITHM
const maxfast = (arr) => {
    let index1 = 0;
    let index2 = 0;
    for (let i=1; i<arr.length; i++) {
        if (arr[i] > arr[index1]) {
            index1 = i;
        }
    }

    if (index1 == 0) {
        index2 = 1;
    }

    for (let i=1; i<arr.length; i++) {
        if (arr[i]!=arr[index1] && arr[i]>arr[index2]) {
            index2 = i;
        }
    }
    return arr[index1]*arr[index2];
}*/

/*const randombetween = (min, max) => {
    return Math.floor(Math.random() * (max-min) + min);
}

const stresstest =(N, M) => {
    while (true) {
        let n = randombetween(2, N);
        let arr = new Array(n);
        for (i=0; i<arr.length; i++) {
            arr[i] = randombetween(0, M);
        }
        console.log(arr);
        let result1 = maxnaive(arr);
        let result2 = maxfast(arr);
        if (result1 == result2) {
            console.log('OK');
        } else {
           console.log('Wrong answer: %d %d', result1, result2);
        }
    }
    return
}

stresstest(10, 100000);*/

//SORTING METHOD
const maxsort = (arr) => {
    arr.sort(function(a, b){return b-a})
    return arr[0]*arr[1];
}