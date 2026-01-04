var countOdds = function(low, high) {
    const total = high - low 
    let count = Math.floor(total / 2);
    if (low % 2 === 1 || high % 2 === 1) {
        count += 1;
    }

    return count;
};