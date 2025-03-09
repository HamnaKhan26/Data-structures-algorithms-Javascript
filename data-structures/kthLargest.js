class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    extractMin() {
        if (this.size() === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleUp() {
        let index = this.size() - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        let length = this.size();
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < length && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < length && this.heap[right] < this.heap[smallest]) smallest = right;

            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

var findKthLargest = function(nums, k) {
    let minHeap = new MinHeap();

    for (let num of nums) {
        minHeap.insert(num);
        if (minHeap.size() > k) {
            minHeap.extractMin();
        }
    }

    return minHeap.heap[0]; // The Kth largest element remains at the top
};


findKthLargest([3,2,1,5,6,4], k = 2)