function sameNumbers(input){

let numbers=input.toString().split("")

let firstNum=numbers[0]
let isTheSame=true;
let sum=0;
for(let i=0;i<numbers.length;i++){
    if(firstNum!==numbers[i]){
        isTheSame=false;
    }
sum+=Number(numbers[i])
}
if(isTheSame){
    console.log('true');
    console.log(sum)
}else{
    console.log('false')
    console.log(sum)
}
}
