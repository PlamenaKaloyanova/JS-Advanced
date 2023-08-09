function biggestHalf(array){

let sortedArray=array.sort((a,b)=>a-b)
let secondHalfIndex=Math.floor(sortedArray.length/2);
let newArray=array.slice(secondHalfIndex)
return newArray;

}
