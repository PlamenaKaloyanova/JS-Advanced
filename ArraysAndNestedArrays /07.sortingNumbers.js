function sortingNumbers(array){

array=array.sort((a,b)=>a-b)
let resulrArr=[];

while(array.length!==0){
    resulrArr.push(array.shift())
    resulrArr.push(array.pop())
}
return resulrArr;

}
