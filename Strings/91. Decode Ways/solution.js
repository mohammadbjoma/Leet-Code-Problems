var numDecodings = function (s) {
  const n = s.length;
  if (n === 0) return 0;
  if (s[0] === "0") return 0;

  let dp0 = 1;
  let dp1 = 1;

  for (let i = 2; i <= n; i++) {
    let ways = 0;

    const one = s[i - 1];               
    const two = s.slice(i - 2, i);        

  
    if (one !== "0") ways += dp1;

    const val2 = Number(two);
    if (val2 >= 10 && val2 <= 26) ways += dp0;

    dp0 = dp1;
    dp1 = ways;
  }

  return dp1;
};