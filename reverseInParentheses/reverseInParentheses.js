function solution(inputString) {
    let string = reverseInParentheses(inputString);
    do  {
        string = reverseInParentheses(string);
    } while (string.includes('(') )
    return string.replaceAll('[', '').replaceAll(']', '');
}

const reverseInParentheses = inputString => {
    let string = '';
    let counter = 0;
    for(let i = 0; i < inputString.length; i++) {
        if(inputString[i] === '(' || string.trim().length > 0) { counter++; string += inputString[i]; }
        if( inputString[i] === '(' && string.includes('(') && counter !== 1) string = '(';
        if(inputString[i] === ')') break;
    }
    if(string.trim().length === 0) return inputString;
    const reversedString = string.split("").reverse().join("").replace('(', ']').replace(')', '[');
    return inputString.replace(string, reversedString);
}

//Best Solution

function solution(inputString) {
    while (inputString.includes('(')) {
        inputString = inputString.replace(/\(([^()]*)\)/, (_, str) => [...str].reverse().join(''));
    }
    return inputString;
}
