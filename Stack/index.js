import Stack1 from "./stack-array.js";
import Stack2 from "./stack-obj.js";


// 使用Stack数组类
const stack = new Stack1();
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);

console.log(stack.peek());

stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());

stack.push(15);
stack.pop();
stack.pop();
console.log(stack.size());

// 使用Stack对象类
const stack2 = new Stack2();
stack2.push(5);
stack2.push(8);

console.log(stack2.toString());