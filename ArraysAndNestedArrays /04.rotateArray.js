function rotateArray(array,rotationNum){

for(let i=0;i<rotationNum;i++){
array.unshift(array.pop())
}


console.log(array.join(" "))

}
