class TrieNode {
  constructor() {
    this.children = {};   // map char -> TrieNode
    this.isEnd = false;   // marks end of a word
  }
}

var Trie = function() {
  this.root = new TrieNode();
};

Trie.prototype.insert = function(word) {
  let node = this.root;
  for (const ch of word) {
    if (!node.children[ch]) node.children[ch] = new TrieNode();
    node = node.children[ch];
  }
  node.isEnd = true;
};

Trie.prototype.search = function(word) {
  let node = this.root;
  for (const ch of word) {
    if (!node.children[ch]) return false;
    node = node.children[ch];
  }
  return node.isEnd === true;
};

Trie.prototype.startsWith = function(prefix) {
  let node = this.root;
  for (const ch of prefix) {
    if (!node.children[ch]) return false;
    node = node.children[ch];
  }
  return true;
};
