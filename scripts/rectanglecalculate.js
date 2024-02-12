function rectangleCalculation (){
  // Get The Width of an rectangle
  const rectangleWidth = document.getElementById('rectangle-width');
  const rectangleWidthText = rectangleWidth.value;
  const width = parseFloat(rectangleWidthText);

  // Get the i of the rectangle
  const rectangleI = document.getElementById('rectangle-i');
  const rectangleIText = rectangleI.value;
  const I= parseFloat(rectangleIText);
  
  // Calculation this by using logic
  const Area = width*I;
  // display this result 
  const rectangleSpan = document.getElementById('rectangle');
  rectangleSpan.innerText = Area;
}