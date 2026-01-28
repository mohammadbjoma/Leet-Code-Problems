var partition = function (s) {
  const n = s.length;
  const res = [];
  const path = [];

  const isPal = Array.from({ length: n }, () => Array(n).fill(false));

  for (let len = 1; len <= n; len++) {
    for (let i = 0; i + len - 1 < n; i++) {
      const j = i + len - 1;
      if (s[i] === s[j] && (len <= 2 || isPal[i + 1][j - 1])) {
        isPal[i][j] = true;
      }
    }
  }

  function dfs(start) {
    if (start === n) {
      res.push([...path]);
      return;
    }
    for (let end = start; end < n; end++) {
      if (!isPal[start][end]) continue;
      path.push(s.slice(start, end + 1));
      dfs(end + 1);
      path.pop();
    }
  }

  dfs(0);
  return res;
};
