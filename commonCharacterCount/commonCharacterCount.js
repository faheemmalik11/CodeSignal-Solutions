function solution(s1, s2) {
    const s2Length = s2.length;
    for(let i = 0; i < s1.length; i++) {
        for(let j = 0; j < s2.length; j++) {
            if(s1[i] === s2[j]) {
                let position =  s2.indexOf(s2[j]);
                s2 = s2.substring(0, position ) + s2.substring(position + 1, s2.length);
                break;
            }
        }
    }
    return s2Length - s2.length;
}

//Best Solution

function solution(s1, s2) {
    for (var i = 0; i < s1.length; i++) {
        s2 = s2.replace(s1[i], "!");
    }
    return s2.replace(/[^!]/g, "").length;
}
