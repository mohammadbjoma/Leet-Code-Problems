var isUgly = function(n) {
    if (n <= 0) return false;

    for (let factor of [2, 3, 5]) {
        while (n % factor === 0) {
            n /= factor;
        }
    }

    return n === 1;
};
