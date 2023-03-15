import {defaultCompare, Compare} from "./DefaultCompare.js";
import swap from "./Swap.js";

// 复杂度O(n2)
export function bubbleSort(array, compareFn = defaultCompare) {
    const { length } = array;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length-1; j++) {
            if ( compareFn(array[j],array[j+1]) === Compare.BIGGER_THAN){
                swap(array, j, j+1);
            }
        }
    }
    return array;
}

export function modifiedBubbleSort(array, compareFn = defaultCompare){
    const { length } = array;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length-1-i; j++) {
            if ( compareFn(array[j],array[j+1]) === Compare.BIGGER_THAN){
                swap(array, j, j+1);
            }
        }
    }
    return array;
}