function calorieObject(array) {

    let calorieObject = {}

    for (let i = 0; i < array.length; i += 2) {
        let food = array[i];
        let calories = Number(array[i + 1])
        calorieObject[food] = calories
    }

    console.log(calorieObject)

}
