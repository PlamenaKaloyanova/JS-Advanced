function pieceOfPie(array,start,end){

    let startIndex=array.indexOf(start);
    let endIndex=array.indexOf(end)


    let newArray=array.slice(startIndex,endIndex+1);
    return newArray
    

}
