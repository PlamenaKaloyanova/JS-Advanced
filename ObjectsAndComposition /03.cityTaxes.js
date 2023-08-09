function cityTaxes(name, population, treasury) {

    let result = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes(){
            result.treasury+=result.taxRate*result.population
        },
        applyGrowth(percentage) {
         result.population+=Math.floor(result.population * percentage/100);
        },
        applyRecession(percentage) {
            result.treasury-=result.treasury*percentage/100
         },
    }


    return result;
}
