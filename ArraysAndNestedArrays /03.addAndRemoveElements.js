function addAndRemove(array){


let newArray=[];
let num=1;
for(let i=0;i<array.length;i++){
    let command=array[i];

    switch(command){
        case "add":newArray.push(num+i)
            break;
        case "remove":newArray.pop()
            
    }
}
if(newArray.length==0){
    console.log("Empty")

}else{
   console.log(newArray.join("\n")) 
}

}
