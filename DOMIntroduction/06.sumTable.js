function sumTable() {
let costElements=document.querySelectorAll('tr td:nth-of-type(2)');
let result=document.getElementById('sum')

let array=Array.from(costElements)
let sumElement=0;


for (let index = 0; index <costElements.length-1; index++) {
    const element = Number(costElements[index].textContent);
    sumElement+=element
}
result.textContent=sumElement;
}
