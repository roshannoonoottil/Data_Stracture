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
        let leftChildIndex = this.getLeftChildIndex(smallest)
        let rightChildIndex = this.getRightChildIndex(smallest)
        if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]){
            smallest = leftChildIndex
        }
        if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]){
            smallest = rightChildIndex
        }
        if(smallest === index) break;
        this.swap(index, smallest)
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