import Queue from "./Queue.js";
import Deque from "./deque.js";

const queue = new Queue();
console.log(queue.isEmpty()); 

queue.enqueue('John');
queue.enqueue('Jack');
console.log(queue.toString());

queue.enqueue('Camila');

console.log(queue.toString());
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
console.log(queue.toString());

const deque = new Deque();
console.log(deque.isEmpty());
deque.addBack('John');
deque.addBack('Jack');
console.log(deque.toString());
deque.addBack('Camila');
console.log(deque.toString());
console.log(deque.size());
console.log(deque.isEmpty());
deque.removeFront();
console.log(deque.toString());
deque.removeBack();
console.log(deque.toString());
deque.addFront('John');
console.log(deque.toString());
