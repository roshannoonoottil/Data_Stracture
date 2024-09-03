class minHeap{
    constructor(){
        this.heap = [];
    }
    getParentIndex(index){
        return Math.floor((index - 1)/2)
    }
    getLeftChildIndex(index){
        return 2 * index + 1
    }
    getRightChildIndex(index){
        return 2  * index + 2
    }
  insert(value){
    this.heap.push(value)
    this.heapiyUp()
  }
  swap(index1,index2){
    let temp = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = temp
  }
  heapiyUp(){
    let index = this.heap.length -1
    while(index > 0 && this.heap[this.getParentIndex(index)] > this.heap[index]){
        this.swap(index, this.getParentIndex(index))
        index = this.getParentIndex(index)
    }
  }
 extractMin(){
    if(this.heap.length === 0) return null
    if(this.heap.length === 1) return this.heap.pop()
        let min = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.heapiyDown(0)
    return min
 }
heapiyDown(index){
    let smallest = index
    while(true){
        let LeftChildIndex = this.getLeftChildIndex[smallest]
        let RightChildIndex = this.getRightChildIndex[smallest]
        if(LeftChildIndex < this.heap.length && this.heap[LeftChildIndex] < this.heap[smallest]){
            smallest = LeftChildIndex
        }
        if(RightChildIndex < this.heap.length && this.heap[RightChildIndex] < this.heap[smallest])
        {
            smallest = RightChildIndex
        }
        if(smallest === index) break
        this.swap(smallest,index)
        index = smallest
    }
}
}

let minheap = new minHeap()

minheap.insert(6)
minheap.insert(10)
minheap.insert(5)
minheap.insert(9)

console.log(minheap);
minheap.extractMin()
console.log(minheap);