class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.isEndOfWord = true;
    }
  
    search(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return node.isEndOfWord;
    }
  
    startsWith(prefix) {
      let node = this.root;
      for (let char of prefix) {
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return true;
    }
  }
  
  
  const trie = new Trie();
  trie.insert("apple");
  trie.insert("app");
  trie.insert("apricot");
  
  console.log(trie.search("apple"));    
  console.log(trie.search("app"));      
  console.log(trie.search("apricot"));  
  console.log(trie.search("ap"));       
  console.log(trie.startsWith("ap"));   
  console.log(trie.startsWith("apple")); 
  console.log(trie.startsWith("apric")); 
  console.log(trie.startsWith("bat"));   
  