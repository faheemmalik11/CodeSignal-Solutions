function solution(inputArray) {
    const returnArray = [];  
    for (i = 0; i <= inputArray.length; i++) {        
        inputArray.at(i + 1) && returnArray.push(inputArray[i] * inputArray[i + 1]);   
    }
    return Math.max(...returnArray);
}

//Best Solution
function solution(arr) {
    return Math.max(...arr.slice(1).map((x,i)=>[x*arr[i]]))
  }
  