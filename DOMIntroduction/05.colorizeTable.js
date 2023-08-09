function colorize() {
  
    let elementsTd=document.querySelectorAll('table tr:nth-child(even)');
     Array.from( elementsTd).forEach(element=>{
        element.style.backgroundColor='Teal'
    })
  

}
