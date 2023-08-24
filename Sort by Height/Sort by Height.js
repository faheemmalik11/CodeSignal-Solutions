function solution(a) {
    const sortByHeight = [];
    let counter = 0;
    const sortedArray = a.filter((item) => item !== -1).sort(function(a, b){return a - b});
    for (i = 0; i < a.length; i++){
        if(a[i] === -1) {
            sortByHeight.push(a[i]);
        } else {
            sortByHeight.push(sortedArray[counter]);
            counter++;
        }
    }
    return sortByHeight;
}

//Best Solution

function solution(a) {
    var s = a.filter(h => h > 0).sort((a, b) => a - b)
    return a.map(p => {
        if (p !== -1) {
            return s.shift();
        }
        
        return -1;
    })
}
