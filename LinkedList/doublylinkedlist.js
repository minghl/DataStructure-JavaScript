import { defaultEquals } from "./DefaultEquals";
import { DoublyNode } from "./Node";
import LinkedList from "./linkedlist";

class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined;
    }

    /**
     * @param {element,index} 插入元素和索引
     * @description 在任意位置插入新元素
     */
    insert(element, index){
        if(index>=0 && index <= this.count){
            const node = new DoublyNode(element);
            let current = this.head;
            if(index===0){
                if(this.head === null){
                    this.head = node;
                    this.tail = node;
                }else{
                    node.next = this.head;
                    current.prev = node;
                    this.head = node
                }
            } else if(index === this.count) {
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else {
                const previous = this.getElementAt(index-1);
                current = previous.next;
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            this.count++;
            return true;
        }
        return false;
    }

    removeAt(index){
        if(index>=0&&index<this.count){
            let current = this.head;
            if (index === 0){
                this.head = current.next;
                // 如果只有一项，更新tail
                if(this.count === 1){
                    this.tail = undefined;
                } else {
                    this.head.prev = undefined;
                }
                // 最后一项
            } else if (index===this.count-1){
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = undefined;
            } else {
                current = this.getElementAt(index);
                const previous = current.prev;
                // 将previous与current的下一项连接起来————跳过current
                previous.next = current.next;
                current.next.prev = previous;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}