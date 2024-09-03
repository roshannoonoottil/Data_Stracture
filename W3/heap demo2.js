class minHeap{
    constructor(){
        this.heap = [];
    }
    getParentIndex(index){
        return Math.floor(index - 1)/2
    }
    getLeftChildIndex(index){
        return (2*index )+ 1
    }
    getRightChildIndex(index){
        return (2*index) +2
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
        while(index > 0 && this.heap[this.getParentIndex[index]] > this.heap[index])
            this.swap(index,this.getParentIndex[index])
        index = this.getParentIndex[index]
    }
}