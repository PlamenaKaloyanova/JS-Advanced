function solution(number){
let sum=number;
function add(a,b){
    return a+b;
}
return add.bind(this,number)


}
