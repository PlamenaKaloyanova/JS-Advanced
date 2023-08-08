function mathOperations(numOne, NumTwo, operator) {
 let sum=0;
    switch (operator) {
        case "+":sum=numOne+NumTwo;
            break;
        case "-":sum=numOne-NumTwo;
            break;
        case "*":sum=numOne*NumTwo;
            break;
        case "/":sum=numOne/NumTwo;
            break;
        case "%":sum=numOne%NumTwo;
            break;
        case "**":sum=numOne**NumTwo;
            break;

    }
    console.log(sum)
}
