function addItem() {
   let inputElement=document.getElementById('newItemText');
   let UlItems=document.getElementById('items');

   let newElement=document.createElement('li');
   newElement.textContent=inputElement.value

   UlItems.appendChild(newElement);
   inputElement.value="";

}
