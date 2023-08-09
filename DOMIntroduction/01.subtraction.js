function subtract() {
  let firstElement=document.getElementById('firstNumber').value
  let secondNumber=document.getElementById('secondNumber').value

  let substract=Number(firstElement)-Number(secondNumber);
  let result=document.getElementById('result')
  result.textContent=substract;
}
