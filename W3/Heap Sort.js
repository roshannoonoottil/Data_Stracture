class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  
    getLeftChildIndex(index) {
      return 2 * index + 1;
    }
  
    getRightChildIndex(index) {
      return 2 * index + 2;
    }
  
    swap(index1, index2) {
      const temp = this.heap[index1];
      this.heap[index1] = this.heap[index2];
      this.heap[index2] = temp;
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    heapifyUp() {
      let index = this.heap.length - 1;
      while (
        index > 0 &&
        this.heap[this.getParentIndex(index)] > this.heap[index]
      ) {
        this.swap(index, this.getParentIndex(index));
        index = this.getParentIndex(index);
      }
    }
  
    extractMin() {
      if (this.heap.length === 0) {
        return null;
      }
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return min;
    }
  
    heapifyDown() {
      let index = 0;
      while (this.getLeftChildIndex(index) < this.heap.length) {
        let smallerChildIndex = this.getLeftChildIndex(index);
        if (
          this.getRightChildIndex(index) < this.heap.length &&
          this.heap[this.getRightChildIndex(index)] < this.heap[smallerChildIndex]
        ) {
          smallerChildIndex = this.getRightChildIndex(index);
        }
        if (this.heap[index] <= this.heap[smallerChildIndex]) {
          break;
        }
        this.swap(index, smallerChildIndex);
        index = smallerChildIndex;
      }
    }
  
    size() {
      return this.heap.length;
    }
  }
  
  function heapSort(arr) {
    const minHeap = new MinHeap();
    for (let num of arr) {
      minHeap.insert(num);
    }
  
    const sortedArray = [];
    while (minHeap.size() > 0) {
      sortedArray.push(minHeap.extractMin());
    }
  
    return sortedArray;
  }
  
  const array = [3, 1, 6, 5, 2, 4];
  console.log("Original array:", array);
  
  const sortedArray = heapSort(array);
  console.log("Sorted array:", sortedArray);
  