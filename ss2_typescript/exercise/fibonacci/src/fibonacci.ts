let array: number [] = [0,1];
let sumFibonacci: number = 1;

function fibonacci(number: number):number {
    if (number<= 1){
        return 1;
    }
    return fibonacci(number-1) +fibonacci(number-2);
}
for (let i = 1; i<=5; i++){
    array.push(fibonacci(i))
    sumFibonacci+= fibonacci(i)
}
console.log(array.toString());
console.log("Tổng các số fibonacci là: " + sumFibonacci);