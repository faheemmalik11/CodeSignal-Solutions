function solution(inputArray) {
    let longestStringLength = 0;
    for (let i = 0; i < inputArray.length; i++) if(longestStringLength < inputArray[i].length) longestStringLength = inputArray[i].length;
    return inputArray.filter((item) => item.length === longestStringLength);
}

//Best Solution

function solution(inputArray) {
    'use strict';
    let maxSize = Math.max(...inputArray.map(x => x.length));
    return inputArray.filter(x => x.length === maxSize);
}
