function greatestCommon(numOne, numTwo) {
    let greaterNum = 0;
    for (let i = 0; i <= numOne; i++) {

        for (let j = 0; j <= numTwo; j++) {
            if (numOne % i == 0 && numTwo % i == 0) {
                greaterNum = i;
            }
        }
    }
    console.log(greaterNum)

}
