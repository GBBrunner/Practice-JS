myArr=[1,2,3,4,6,6,7,8,9,10];
target=5;
function linearSearch(arr, target) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === target) {
            return index ;
            
        }
    }
    alert("fruit not found");
    return -1;
}
console.log(linearSearch(myArr, target)); 

const strArr = ["apple", "banana", "blackberry", "blueberry", "cherry", "grape", "kiwi", "mango", "orange", "peach", "pear", "plum", "raspberry", "strawberry", "watermelon"];
target = "kiwi";

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    target = target.toLowerCase();
    while (left <= right) {
        const midPoint = Math.floor((left + right) / 2);
        const midValue = arr[midPoint].toLowerCase();
        if (midValue === target) return midPoint;
        if (midValue < target) left = midPoint + 1;
        else right = midPoint - 1;
    }
    alert("fruit not found");
    return -1;
}
console.log(binarySearch(strArr, target));
function jumpSearch(arr, target) {
    const n = arr.length;
    const step = Math.floor(Math.sqrt(n));
    let prev = 0;
    let current = step;
    while(current < n && arr[current] < target) {
        prev = current;
        current += step;
    }
    const subArray = arr.slice(prev, Math.min(current, n));
    const result = linearSearch(subArray, target);
    
    return result === -1 ? -1 : prev + result;''
}
target = "kiwi";
console.log(jumpSearch(strArr, target));
export {linearSearch, binarySearch, jumpSearch, strArr};