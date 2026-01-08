var lengthOfLastWord = function(s) {
    let lastword = "";

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            lastword += s[i];
        } else if (lastword.length !== 0) {
            return lastword.length;
        }
    }

    return lastword.length;
};