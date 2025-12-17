var tribonacci = function(n) {
    if (n===0) return 0;
    if(n===1 || n===2) return 1;
    let T0=0;
    let T1=1;
    let T2=1;
    for(let i=3;i<=n;i++){
    const nextT = T0 + T1 + T2;
    T0 = T1;
    T1 = T2;
    T2 = nextT;
    }
    return T2;
};