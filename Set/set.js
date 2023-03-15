// 集合是一个由一组无序且唯一（既不能重复）的项组成的；一个既没有重复元素，也没有顺序概念的数组。
class Set {
    constructor() {
        this.items = {};
    }

    // 检验某个元素是否存在于集合中
    has(element){
        // return element in this.items;
        return Object.prototype.hasOwnProperty.call(this.items, element);
        // Object 原型有 hasOwnProperty 方法。该方法返回一个表明对象是否具有特定属性的布尔值。in 运算符则返回表示对象在原型链上是否有特定属性的布尔值。
    }

    // 检查是否存在集合中，若不存在则添加到集合中返回true
    add(element){
        if (!this.has(element)){
            this.items[element] = element;
            return true;
        }
        return false;
    }

    // 检查是否存在集合中，若存在则删除返回true
    delete(element){
        if(this.has(element)){
            delete this.items[element];
            return true;
        }
        return false;
    }

    // 移除集合中所有值
    clear(){
        this.items = {};
    }

    // 返回集合中有多少元素
    size(){
        return Object.keys(this.items).length;
    }

    // 返回所有的值数组
    values(){
        return Object.values(this.items);
    }

    // 并集
    union(otherSet){
        const unionSet = new Set();
        this.values().forEach(value=>unionSet.add(value));
        otherSet.values().forEach(value=>unionSet.add(value));
        return unionSet;
    }

    // 交集
    intersection(otherSet){
        const intersectionSet = new Set();
        const values = this.values();
        const otherValues = otherSet.values();
        let biggerSet = values;
        let smallerSet = otherValues;
        if(otherValues.length - values.length > 0){
            biggerSet = otherValues;
            smallerSet = values;
        }
        smallerSet.forEach(value => {
            if(biggerSet.includes(value)){
                intersectionSet.add(value);
            }
        })
        return intersectionSet;
    }

    // 差集
    difference(otherSet){
        const differenceSet = new Set();
        this.values().forEach(value=>{
            if(!otherSet.has(value)){
                differenceSet.add(value);
            }
        })
        return differenceSet;
    }

    // 子集
    isSubsetOf(otherSet){
        if(this.size() > otherSet.size()){
            return false;
        }
        let isSubset = true;
        // every只要回调函数返回false就会停止，forEach不是
        this.values().every(value=>{
            if(!otherSet.has(value)){
                isSubset = false;
                return false;
            }
            return true;
        })
        return isSubset;
    }
}

export default Set;