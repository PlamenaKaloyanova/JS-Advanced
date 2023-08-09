function smallestTwoNum(array){
let sortedArray=(array.sort((a,b)=>a-b))
let smallestNum=sortedArray.slice(0,2)
console.log(smallestNum.join(" "))

}
