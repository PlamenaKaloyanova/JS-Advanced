function solve() {
 
  let textElement=document.getElementById('text').value;
  let typeText=document.getElementById('naming-convention').value;
   let res=document.getElementById('result');
  let result="";
  if(typeText==='Camel Case'){
    for(let i=0;i<textElement.length;i++){
      if(textElement[i]==" "){
        result+=textElement[i+1].toUpperCase();
        i++;
      }else{
        result+=textElement[i].toLowerCase()
      }
    }
  }else if (typeText==='Pascal Case'){
    result+=textElement[0].toUpperCase()
    for(let i=1;i<textElement.length;i++){
      if(textElement[i]==" "){
        result+=textElement[i+1].toUpperCase();
        i++;
      }else{
        result+=textElement[i].toLowerCase()
      }
    }
  }else{
    result='Error!'
  }
    res.textContent=result;
  }
