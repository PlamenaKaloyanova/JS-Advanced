function sumOfNumbers(n, m) {
    let num1=Number(n);
    let num2=Number(m)
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += Number(i);
    }
    console.log(sum)
}
