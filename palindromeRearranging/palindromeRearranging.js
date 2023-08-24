function solution(inputString) {    
    const bufferObject = {};
    let oddCounter = 0
    for (let character = 0; character < inputString.length; character++) {
        if(!!bufferObject[inputString[character]])  bufferObject[inputString[character]] = bufferObject[inputString[character]] + 1;
        else bufferObject[inputString[character]] = 1;
    }   
    for (number in bufferObject) bufferObject[number] % 2 !== 0 && oddCounter++;   
    return oddCounter <= 1;
}

//Best Solution

function solution(inputString) {
    return inputString.split('').sort().join('').replace(/(\w)\1/g,'').length < 2; 
}


