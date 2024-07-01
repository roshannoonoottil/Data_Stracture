class hashTable{
    constructor(size = 7){
        this.dataMap = new Array(size)
    }
    _hash(key){
        let hash = 0
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
        }
        return hash
    }
    set(key, value){
        let index = this._hash(key)
        if(!this.dataMap[index]) this.dataMap[index] = []
        this.dataMap[index].push([key, value])
        return this
    }
}

let newHash = new hashTable()
newHash.set("heyy",4)
newHash.set('hi',6)
newHash.set('hello',7)
console.log(newHash);