function TriangleCalculation (){
  // get the base from Input
  const triangleBase = document.getElementById('triangle-base');
  const triangleBaseText = triangleBase.value;
  const base = parseFloat (triangleBaseText);
// get the height from input
  const triangleHeight = document.getElementById('triangle-height');
  const triangleHeightText = triangleHeight.value;
  const height = parseFloat (triangleHeightText);
// Calculation the Area by using Logic
const Area = 0.5*base*height;

// Display the output
const triangleArea = document.getElementById('triangle-area');
triangleArea.innerText = Area;
}