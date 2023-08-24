function solution(a, b) {
    const aBuffer = [];
    const bBuffer = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            if (aBuffer.length === 2) return false;
            aBuffer.push(a[i]);
            bBuffer.push(b[i]);
        }
    }

    if (aBuffer.length) return aBuffer.length === 1 ? false : aBuffer[0] === bBuffer[1] && aBuffer[1] === bBuffer[0];

    return true;
}

//Best Solution

function solution(a, b) {
    const ad = a.filter((v,i)=>v!=b[i])
    const bd = b.filter((v,i)=>v!=a[i])
    return ad.length == 0 || (ad.length == 2 && ad.join('') == bd.reverse().join(''))
}
