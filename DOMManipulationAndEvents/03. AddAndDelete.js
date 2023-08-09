function addItem() {
debugger;
    let inputElement=document.getElementById('newItemText');
    let ulElements=document.getElementById('items');

    let newLiElement=document.createElement('li');
    newLiElement.textContent=inputElement.value
    ulElements.appendChild(newLiElement);

    inputElement.value="";

    let deleteElement=document.createElement('a');
    deleteElement.href="#"
    deleteElement.textContent='[Delete]';
    newLiElement.appendChild(deleteElement)

    deleteElement.addEventListener('click',(e)=>{
        e.currentTarget.parentElement.remove()
    })
    
}
