function biggestElement(matrix) {

let max=Number.MIN_SAFE_INTEGER
    for (const array of matrix) {
        for (const element of array) {
            if(element>max){
                max=element
            }
        }
    }

console.log(max)

}
