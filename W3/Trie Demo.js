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
        let node = this.root
        for(let char of word){
            if(!node.childern[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEndOfWord= true
    }
}