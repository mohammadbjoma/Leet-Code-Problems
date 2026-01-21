var convertToTitle = function(columnNumber) {
    let result = "";

    while (columnNumber > 0) {
        columnNumber--; // important!
        let char = String.fromCharCode((columnNumber % 26) + 65);
        result = char + result;
        columnNumber = Math.floor(columnNumber / 26);
    }

    return result;
};
