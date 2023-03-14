import { defaultEquals } from "./DefaultEquals";
import { Node } from "./Node";

export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    /**
     * @param {element} [Node] 新节点
     * @description 向链表尾部添加元素
     * @returns void
     */
    push(element) {
        const node = new Node(element);
        let current;
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            // 获取最后一项
            while (current.next != null) {
                current = current.next;
            }
            // 将next赋为新元素，建立连接
            current.next = node;
        }
        this.count++;
    }

    /**
     * @param {index} [Number] 移除索引
     * @description 从特定位置移除一个元素
     * @returns {element}|{undefined} 返回删除元素
     */
    removeAt(index) {
        // 检查越界值
        if (index >= 0 && index < this.count) {
            let current = this.head;

            // 移除第一项
            if (index === 0) {
                this.head = current.next;
            } else {
                const previous = this.getElementAt();
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element
        }
        return undefined;
    }

    /**
     * @param {index} [Number] 查询索引
     * @description 找到特定索引的节点
     * @returns {Node}|{undefined} 返回查询节点
     */
    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let node = this.head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    /**
     * @param {element, index} [elemnt][Number] 元素和索引
     * @description 在任意位置插入元素
     * @returns {Boolean} 返回插入结果
     */
    insert(element, index){
        if(index>=0 && index<=this.count){
            const node = new Node(element);
            // 在第一个位置添加
            if(index===0){
                const current = this.head;
                node.next = current;
                this.head = node;
            }else{
                const previous = this.getElementAt(index-1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            // 更新链表的长度
            this.count++;
            return true;
        }
        return false;
    }

    /**
     * @param {element} [element] 查询元素
     * @description 找到特定元素的索引
     * @returns {Number} 返回查询索引
     */
    indexOf(element){
        let current = this.head;
        for (let i = 0; i < this.count && current != null; i++) {
            if (this.equalsFn(element, current.element)){
                return i;
            }
            current = current.next;
        }
        return -1;
    }

    /**
     * @param {element} [element] 移除元素
     * @description 移除指定元素
     * @returns {element} 移除的元素
     */
    remove(element){
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    // 返回链表大小
    size(){
        return this.count;
    }

    // 返回是否为空
    isEmpty(){
        return this.size() === 0;
    }

    // 得到链表头
    getHead(){
        return this.head;
    }

    // 链表转字符串
    toString(){
        if(this.head == null){
            return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let i = 1; i < this.size() && current != null; i++) {
            objString = `${objString}, ${current.element}`;
            current = current.next;
        }
        return objString;
    }
}
