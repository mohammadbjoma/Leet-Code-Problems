var intersect = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return intersect(nums2, nums1);
    }

    const freq = new Map();
    for (let num of nums1) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    const result = [];
    for (let num of nums2) {
        const count = freq.get(num) || 0;
        if (count > 0) {
            result.push(num);
            freq.set(num, count - 1);
        }
    }

    return result;
};
