function solution(n) {
    const nString = String(n);
    const nStringLength = nString.length;
    let firstHalf = 0;
    let secondHalf = 0;
    for(let i = 0; i < (nStringLength / 2); i++) firstHalf += Number(nString[i]);    
    for(let i = nStringLength - 1; i >= (nStringLength / 2); i--) secondHalf += Number(nString[i]);
    return firstHalf === secondHalf;
    
    /*        
        // Naive Soluiton ---> Using Array
        
        const nArray = String(n).split('');
        let firstHalf = 0;
        let secondHalf = 0;
        
        for(let i = 0; i < (nArray.length / 2); i++) {
            firstHalf += Number(nArray[i]);
        }
        
        for(let i = nArray.length - 1; i >= (nArray.length / 2); i--) {
            secondHalf += Number(nArray[i]);
        }
        
        return firstHalf === secondHalf;
    */
}

//Best Solution

function solution(n) {
    var count = 0;
    n = String(n).split('').map(t => {return parseInt(t)});
    n.forEach( (el, i) => { (i < n.length / 2) ? count += el : count -= el });
    return count == 0;
}
