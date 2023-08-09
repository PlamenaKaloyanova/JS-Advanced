function diagonalSum(matrix) {
    let main = 0;
    let sec = 0;

    for(let i = 0; i<matrix.length; i++) {
        main += matrix[i][i];
        sec += matrix[i][matrix.length - 1 - i]
    }
    console.log(main + " " + sec)

}
