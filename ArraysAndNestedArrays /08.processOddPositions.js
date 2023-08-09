function processOddPositions(array){

return array
.filter((element,index)=>index%2!==0)
.map((element=>element*2))
.reverse()
.join(" ")
console.log(oddIndexElement)

}
