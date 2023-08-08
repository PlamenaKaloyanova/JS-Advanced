function aggregateElements(array) {


    let sumOfALL = 0;
    for (let i = 0; i < array.length; i++) {
        sumOfALL += Number(array[i])
    }
    let concat = "";
    for (let i = 0; i < array.length; i++) {
        concat += array[i];
    }

    let inverseSum = 0;
    for (let i = 0; i < array.length; i++) {
        inverseSum += 1 / Number(array[i])
    }

    console.log(sumOfALL)
    console.log(inverseSum)
    console.log(concat)


}
