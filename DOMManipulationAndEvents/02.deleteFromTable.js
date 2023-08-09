function deleteByEmail() {
let inputElement=document.querySelector('input[name="email"]');
let rows=document.querySelectorAll('tr td:nth-of-type(even)');

let result=document.getElementById('result')

let array=Array.from(rows)
    let currentElement=array.find(x=>x.textContent==inputElement.value);

    if(currentElement){
        currentElement.parentNode.remove();
        result.textContent="Deleted."
    }else{
        result.textContent="Not found."
    }
}
