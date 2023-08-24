function solution(inputArray) {
    let numberOfMoves = 0;
    let max = inputArray[0];
    for (let i = 1; i < inputArray.length; i++) {
        if (inputArray[i] <= max) {
            numberOfMoves += max - inputArray[i] + 1;
            inputArray[i] = max + 1;
        }
        max = inputArray[i];        
    }
    return numberOfMoves;
}

//Best Solution

function solution(series) {
    var moves = 0;
    
    for (var i = 1; i < series.length; i++) {
        if (series[i] <= series[i - 1]) {
            diff = series[i - 1] - series[i] + 1;
            series[i] += diff;
            moves += diff;
        }
    }
    
    return moves;
}
