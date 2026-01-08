var addBinary = function(a, b) {
    let newbinary = "";
    let bonus = 0;

    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0) {
        let bitA = i >= 0 ? a[i] : "0";
        let bitB = j >= 0 ? b[j] : "0";

        let sum = bonus;

        if (bitA === "1") sum++;
        if (bitB === "1") sum++;

        if (sum === 0) {
            newbinary += "0";
            bonus = 0;
        } else if (sum === 1) {
            newbinary += "1";
            bonus = 0;
        } else if (sum === 2) {
            newbinary += "0";
            bonus = 1;
        } else {
            newbinary += "1";
            bonus = 1;
        }

        i--;
        j--;
    }

    if (bonus === 1) {
        newbinary += "1";
    }

    return newbinary.split("").reverse().join("");
};