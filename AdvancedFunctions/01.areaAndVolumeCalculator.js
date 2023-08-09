function solve(area,vol,input){
    let coordinates=JSON.parse(input);

    let result=coordinates.map(x=>{
        return{
            area:area.call(x),
            volume:vol.call(x),
        }
    });
    return result;
}
