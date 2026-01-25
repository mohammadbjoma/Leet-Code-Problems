var letterCombinations = function(digits) {
  if (!digits || digits.length === 0) return [];

  const phone = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const res = [];
  const path = [];

  function backtrack(i) {
    if (i === digits.length) {
      res.push(path.join(""));
      return;
    }

    const letters = phone[digits[i]];
    for (const ch of letters) {
      path.push(ch);
      backtrack(i + 1);
      path.pop();
    }
  }

  backtrack(0);
  return res;
};
