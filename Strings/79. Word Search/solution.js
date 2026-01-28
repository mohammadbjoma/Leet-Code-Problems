
var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;

  function dfs(r, c, i) {
    if (i === word.length) return true;
    if (r < 0 || c < 0 || r >= m || c >= n) return false;
    if (board[r][c] !== word[i]) return false;

    const temp = board[r][c];
    board[r][c] = "#"; // mark visited

    const found =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);

    board[r][c] = temp; 
    return found;
  }

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] === word[0] && dfs(r, c, 0)) return true;
    }
  }
  return false;
};
