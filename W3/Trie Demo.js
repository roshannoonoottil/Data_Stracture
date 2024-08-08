class TrieNode{
    constructor(){
        this.childern = {}
        this.isEndOfWord = false
    }
}
class Trie{
    constructor(){
        this.root = new TrieNode()
    }
    insert(word){
        let node = this.root;
        for(let char of word){
            if(!node.childern[char]){
                node.childern[char] = new TrieNode()
            }
            node = node.childern[char]
        }
        node.isEndOfWord = true
    }
    search(word){
        let node = this.root;
        for(let char of word){
            if(!node.childern[char]){
                return false
            }
            node = node.childern[char];
        }
        return node.isEndOfWord;
    }
}

let trie = new Trie()

trie.insert("apple")
trie.insert("app")
trie.insert("appricot")

console.log(trie);
