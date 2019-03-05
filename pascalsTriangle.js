function pascalsTriangle (row) {
  var elements = [];
  
  for (var i = 0; i < numRows; i++) { 
    elements[i] = new Array(i+1);
    
    for (var j = 0; j < i+1; j++) {            
      if (j === 0 || j === i) {
        elements[i][j] = 1;
      }  else {
        elements[i][j] = elements[i-1][j-1] + elements[i-1][j];
      }
    }
  }
  
  return elements;
}

console.table(pascalsTriangle(6));
