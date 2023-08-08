function largestNumber(num1,num2,num3){
let isLargest=num3;

if(num1>num2 && num1>num3){
    isLargest=num1;
}else if(num2>num1 && num2>num3){
        isLargest=num2
    }
    
    console.log(`The largest number is ${isLargest}.`)
}
