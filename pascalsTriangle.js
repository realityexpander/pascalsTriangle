function pascalsTriangle (row) {
  var elements = [];
  
  for (var i = 0; i < numRows; i++) { 
    elements[i] = new Array(i+1);
    

  }
  
  return elements;
}

console.table(pascalsTriangle(6));
