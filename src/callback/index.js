function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(8, 4, sum));

setTimeout(function() {
    console.log('Hola js');
}, 5000)

function greetings(name) {
    console.log(`Hello ${name}`);
}

setTimeout(greetings, 2000, 'Edgardo');