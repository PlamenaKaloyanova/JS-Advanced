function magicMatrices(array){
let sumRows=0;
let sumCols=0;  
    for(let i=0;i<array.length;i++){
       let currentRow=array[i].join("");
       for(let j=0;j<currentRow.length;j++){
        sumRows+=Number(currentRow[j]);
        sumCols+=Number(currentRow[0])
       }

    }

if(sumRows===sumCols){
    console.log("true")
}else{
    console.log("false")
}

}
