class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }

    push(element){
        this.items[this.count] = element;
        this.count++;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }

    pop() {
        if (this.isEmpty()){
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        // 删除对象元素逻辑
        delete this.items[this.count];
        return result;
    }

    peek() {
        if (this.isEmpty()){
            return undefined;
        }
        return this.items[this.count - 1]
    }

    clear() {
        this.items = {};
        this.count = 0;
    }

    toString() {
        if(this.isEmpty()){
            return '';
        }
        let objString;
        for (let i = 0; i < this.count; i++) {
            if(i==0){
                objString = `${this.items[i]}`;
            }else{
                objString = `${objString}, ${this.items[i]}`;
            }
        }
        return objString;
    }
}

export default Stack