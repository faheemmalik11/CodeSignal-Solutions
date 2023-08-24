function solution(picture) {
    const addBorder = [];
    let asterisks = '';
    for(let i = 0; i < picture.length + 1 ; i++) {
        asterisks = '';
        if(i === 0) {
            for(j = 0; j < (picture[i].length + 2); j++) asterisks += '*';
            addBorder.push(asterisks);
            addBorder.push('*'+ picture[i] + '*');
        } else if (i < picture.length) {
            addBorder.push('*'+ picture[i] + '*');
        } else {
            for(k = 0; k < (picture[picture.length - 1].length + 2); k++) asterisks += '*';            
            addBorder.push(asterisks);
        }
    }
    return addBorder
}

//Best Solution

function solution(picture) {
    var width = picture[0].length + 2;
    return [
        '*'.repeat(width),
        ...picture.map(line => `*${line}*`),
        '*'.repeat(width)
    ];
}
