function circleArea(arg){

let typeOfArg=typeof arg;
let area=0;
if(typeOfArg=='number'){
console.log((Math.PI*(arg*arg)).toFixed(2))
}else{
    console.log(`We can not calculate the circle area, because we receive a ${typeOfArg}.`)
}

}
