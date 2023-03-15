import { defaultCompare } from "./DefaultCompare.js";

function quickSort(array, compareFn = defaultCompare){
    return quick(array, 0, array.length-1, compareFn);
}

function quick(array, left, right, compareFn){
    let index;
    if(array.length > 1){
        index = partition(array, left, right, compareFn);
        if(left < index - 1){
            quick(array, left, index-1, compareFn);
        }
        if(index < right){
            quick(array, index, right, compareFn);
        }
    }
    return array;
}
