function pascalsTriangle (row) {
  var elements = [];
  
  for (var i = 0; i < numRows; i++) { 
    elements[i] = new Array(i+1);
    
    for (var j = 0; j < i+1; j++) {            
      if (j === 0 || j === i) {
        elements[i][j] = 1;
      }
    }
  }
  
  return elements;
}

console.table(pascalsTriangle(6));
