function solution(a) {
    let firstTeam = 0;
    let secondTeam = 0;
    for(let i = 0; i < a.length; i++) {
        if(i % 2 === 0) {firstTeam += a[i]; continue;}
        secondTeam += a[i];
    }
    return [firstTeam, secondTeam];
}

//Best Solution

solution = a => a.reduce((p,v,i) => (p[i&1]+=v,p), [0,0])
