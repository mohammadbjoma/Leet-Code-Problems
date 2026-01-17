var multiply = function (num1, num2) {
    let abs = BigInt(num1) * BigInt(num2)
    let str = String(abs)
    return str
};