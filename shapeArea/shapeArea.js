function solution(n) {
    if(n == 1) return n;
    
    let previousPolygon = 1;
    let valueToAddInPolygonRim = 4;
    for (i = 1; i < n; i++) {
        areaOf_N_Polygon = previousPolygon + valueToAddInPolygonRim ;
        previousPolygon = areaOf_N_Polygon;
        valueToAddInPolygonRim += 4;
    }
    return areaOf_N_Polygon;
}

//Best Solution
function solution(n) {
    return n*n + (n-1)*(n-1);
}
