function solution(statues) {
    const hash = {};
    let min=Number.MAX_SAFE_INTEGER, max=0;

    for(let i=0; i<statues.length; i++) {
        if(statues[i]<min) min = statues[i];
        if(statues[i]>max) max = statues[i];
        hash[statues[i]] = true;
    }
    
    const statuesNeeded = [];
    for (let i = min; i < max; i++) {
        if(!hash[i]) statuesNeeded.push(i);
    }
    return statuesNeeded.length;
}

//Best Solution
function solution(sequence) {
    return Math.max(...sequence)-Math.min(...sequence)+1-sequence.length
  }
  