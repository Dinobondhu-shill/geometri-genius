// Parallelogram calculation logic applied
function perallelogramCalculation(){
  const baseArea = getInputValue('pera-base');
  const heightArea = getInputValue('pera-height');
  const area = baseArea*heightArea;
  displayResult('perallogram', area);
}
// Rambhous calculation logic applied




// function for getting input value of user
function getInputValue (inputId){
  const inputValueId = document.getElementById(inputId);
  const inputValueText = inputValueId.value;
  const value = parseFloat(inputValueText);
  return value;
}
// function for set result for displying
function displayResult(elementId, result){
  const element = document.getElementById(elementId);
  element.innerText = result;
}