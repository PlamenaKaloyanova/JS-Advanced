function cookingByNumbers(...input) {

    let num = Number(input[0]);

    for (let i = 1; i < input.length; i++) {
        let currentComand = input[i]
        switch (currentComand) {
            case "chop": num = num / 2;
                break;
            case "dice": num = Math.sqrt(num)
                break;
            case "spice": num = num + 1;
                break;
            case "bake": num = num * 3;
                break;
            case "fillet": num = num - (num * 0.2);
                break;

        }
        console.log(num)
    }

}
