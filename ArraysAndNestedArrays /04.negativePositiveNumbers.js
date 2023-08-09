function negativePossitive(array){

let newArray=[]

for (const element of array) {
    if(element<0){
 newArray.unshift(element)
 
    }else{
        newArray.push(element);
        
    }
}
console.log(newArray.join("\n"))
}  
