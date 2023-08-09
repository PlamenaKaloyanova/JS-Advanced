function search() {
   let towns = document.querySelectorAll('#towns li')
   let townsArray = Array.from(towns)

   let serchText=document.getElementById('searchText').value
   let result=document.getElementById('result')
   let counter=0;

   for (const town of townsArray) {
      if(town.textContent.includes(serchText)){
         town.style.textDecoration='underline';
         town.style.fontWeight='bold';
         counter++
      }else{
         town.style.fontWeight='normal';
         town.style.textDecoration='none'
      }
   }
result.textContent=`${counter} matches found`

}
