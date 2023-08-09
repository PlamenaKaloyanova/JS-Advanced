function fruit(typeOfFruit,weightInGrams,priceForKg){

let fruitKg=(weightInGrams/1000);
let money=(fruitKg*priceForKg);

console.log(`I need $${money.toFixed(2)} to buy ${fruitKg.toFixed(2)} kilograms ${typeOfFruit}.`)

}
