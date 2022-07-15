var array = [0, 1];
var sumFibonacci = 1;
function fibonacci(number) {
    if (number <= 1) {
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}
for (var i = 1; i <= 5; i++) {
    array.push(fibonacci(i));
    sumFibonacci += fibonacci(i);
}
console.log(array.toString());
console.log("Tổng các số fibonacci là: " + sumFibonacci);
