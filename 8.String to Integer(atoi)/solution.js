var myAtoi = function(s) {
     let i = 0;
  let sign = 1;
  let result = 0;

  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);

  // 1. Skip leading spaces
  while (i < s.length && s[i] === ' ') {
    i++;
  }

  // 2. Handle sign
  if (s[i] === '+' || s[i] === '-') {
    sign = s[i] === '-' ? -1 : 1;
    i++;
  }

  // 3. Read digits
  while (i < s.length && s[i] >= '0' && s[i] <= '9') {
    result = result * 10 + (s[i] - '0');

    // 4. Clamp early (optional optimization)
    if (sign * result <= INT_MIN) return INT_MIN;
    if (sign * result >= INT_MAX) return INT_MAX;

    i++;
  }

  return sign * result;
};

console.log(myAtoi("   -042"));