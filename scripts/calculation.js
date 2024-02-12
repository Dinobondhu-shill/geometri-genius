// Parallelogram calculation logic applied
function perallelogramCalculation(){
  const baseArea = getInputValue('pera-base');
  const heightArea = getInputValue('pera-height');
  const area = baseArea*heightArea;
  displayResult('perallogram', area);
}
// Rhombus calculation logic applied
function rhombusCalculation (){
  const baseArea = getInputValue('rhombus-base');
  const heightAreaArea = getInputValue('rhombus-height');
  const area = 0.5*baseArea*heightAreaArea;
  displayResult('rhombus', area);
}
// pentagon calculation logic applied
function pentagonCalculation (){
  const baseArea = getInputValue('pentagon-base');
  const heightAreaArea = getInputValue('pentagon-height');
  const area = 0.5*baseArea*heightAreaArea;
  displayResult('pentagon', area);
}

function ellipseCalculation(){
  const ellipseArea = getInputValue('ellipse-area');
  const ellipseBase = getInputValue('ellipse-base');
  const area = 3.1416*ellipseArea*ellipseBase;
  displayResult('ellipse', area);
}

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