class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    // 向队列添加元素
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }

    // 从队列移除元素(与栈区别项)
    dequeue() {
        if(this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    // 查看队列头元素(与栈区别项)
    peek() {
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    // 检查队列是否为空并获取它的长度
    isEmpty(){
        return this.count - this.lowestCount ===  0;
    }

    size() {
        return this.count - this.lowestCount;
    }

    // 清空队列
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    // 创建toString方法
    toString() {
        if(this.isEmpty()){
            return '';
        }
        let objString;
        for (let i = this.lowestCount ; i < this.count; i++) {
            if(i === this.lowestCount){
                objString = `${this.items[this.lowestCount]}`;
            }else{
                objString = `${objString}, ${this.items[i]}`;
            }
        }
        return objString;
    }
}

export default Queue;