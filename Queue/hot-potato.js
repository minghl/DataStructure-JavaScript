import Queue from "./Queue.js";

function hotPotato(elementList, num) {
    const queue = new Queue();
    const elimitatedList = [];

    for (let i = 0; i < elementList.length; i++) {
        queue.enqueue(elementList[i])
    }

    while(queue.size()>1){
        for(let i = 0; i < num;i++){
            queue.enqueue(queue.dequeue());
        }
        elimitatedList.push(queue.dequeue());
    }

    return {
        eliminated: elimitatedList,
        winner: queue.dequeue()
    };
}

const names = ['John', 'Jack', ' Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);
console.log(result);
result.eliminated.forEach(name=>{
    console.log(`${name}在击鼓传花游戏中被淘汰。`);
});

console.log(`胜利者：${result.winner}`);