// 在集合中，我们感兴趣的是每个值本身，并把它当作主要元素。在字典(或映射)中，我们 用[键，值]对的形式来存储数据。字典中的每个键只能有一个值。
import { defaultToString } from "./DefaultToString.js";

export default class Dictionary{
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    // 检测一个键是否存在于字典中
    hasKey(key){
        // JavaScript 只允许我们使用字符串作为对象的键名或属性名。如果传入一个复杂对象作为键， 需要将它转化为一个字符串。
        return this.table[this.toStrFn(key)] != null;
    }

    // 在字典和ValuePair类中设置键和值
    set(key, value){
        if(key != null && value != null){
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    // 从字典中移除一个值
    remove(key){
        if(this.hasKey(key)){
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }

    // 从字典中检索一个值
    get(key){
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null? undefined: valuePair.value;
    }

    // 数组返回valuePair对象
    keyValues() {
        return Object.values(this.table);
    }

    // 返回键名
    keys(){
        return this.keyValues().map(valuePair => valuePair.key);
    }

    // 返回键值
    values() {
        return this.keyValues().map(valuePair=>valuePair.value);
    }

    // 用forEach迭代字典中的每个键值对
    forEach(callbackFn){
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
            if(result === false){
                break;
            }
        }
    }

    size() {
        return Object.keys(this.table).length;
    }

    isEmpty(){
        return this.size() === 0;
    }

    clear(){
        this.table = {};
    }
    
    toString() {
        if(this.isEmpty()){
            return '';
        }
        const valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`;
        for (let i = 0; i < valuePairs.length; i++) {
            objString = `${objString}, ${valuePairs[i].toString()}`;
        }
        return objString;
    }
}

class ValuePair{
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    toString() {
        return `[#${this.key}: ${this.value}]`;
    }
}