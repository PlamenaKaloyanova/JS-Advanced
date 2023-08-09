function extractIncreasing(numbers) {
 let finalResult=[];
 let biggestNumber=numbers[0]

 finalResult=numbers.reduce((acc,currentEl)=>{
    if(biggestNumber<=currentEl){
        acc.push(currentEl)
        biggestNumber=currentEl
    }
    return acc;
 },[]);
 return finalResult;
}
