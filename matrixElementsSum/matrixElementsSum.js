function solution(matrix) {
    const hauntedRoomArray = [];
    let matrixElementsSum = 0;
    for(row = 0; row < matrix.length; row++) {
        for(column = 0; column < matrix[row].length; column++) {
            if(matrix[row][column] === 0) {
                hauntedRoomArray.push(column); // matrix[row][column] => currentValue ; 0 Means Haunted Room.
            } else {
                if(hauntedRoomArray.indexOf(column) === -1) matrixElementsSum += matrix[row][column];
            }
        }
    }
    return matrixElementsSum;
}

//Best Solution

function solution(matrix) {
    for(var r=0,j=0;j<matrix[0].length;j++){
        for(var i=0;i<matrix.length;i++){
          if(matrix[i][j]===0) break
          else r+=matrix[i][j]
        }
    }
    return r
  }
  