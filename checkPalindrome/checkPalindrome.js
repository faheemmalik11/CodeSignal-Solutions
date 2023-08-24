function solution(inputString) {
    let stringToCompare = '';
    for(i = inputString.length - 1; i >= 0; i--) {
        stringToCompare += inputString[i];
    }
    
    if(inputString === stringToCompare) return true;
    return false;
}

// Best Solution 
function solution(inputString) {
    return inputString == inputString.split('').reverse().join('');
}
