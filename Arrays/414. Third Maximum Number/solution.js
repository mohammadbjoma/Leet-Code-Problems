var thirdMax = function(nums) {
    let first = null, second = null, third = null;

    for (let n of nums) {
        if (n === first || n === second || n === third) continue;

        if (first === null || n > first) {
            third = second;
            second = first;
            first = n;
        } else if (second === null || n > second) {
            third = second;
            second = n;
        } else if (third === null || n > third) {
            third = n;
        }
    }

    return third === null ? first : third;
};
