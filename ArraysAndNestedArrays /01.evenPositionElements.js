function demo(array){
let result="";
for (let index = 0; index < array.length; index++) {
    const element = array[index];
   
    if(index % 2==0){
result+=element+" "
    }
}
console.log(result)

}
