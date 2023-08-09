function townPopulation(array){

let townPopulation={}

for(let i=0;i<array.length;i++){
    let [town,population]=array[i].split(" <-> ")
    if(!townPopulation[town]){
        townPopulation[town]=0;
    }
    townPopulation[town]+=Number(population)
}

for (const [town,population] of Object.entries(townPopulation)) {
    console.log(`${town} : ${population}`);
}

}
