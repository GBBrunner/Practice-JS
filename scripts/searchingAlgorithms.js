// Pure search algorithms used by the UI. No alerts or console side effects.

function linearSearch(arr, target) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === target) {
            return index;
        }
    }
    return -1;
}

const strArr = [
    "apple", "banana", "blackberry", "blueberry", "cherry", "grape", "kiwi",
    "mango", "orange", "peach", "pear", "plum", "raspberry", "strawberry", "watermelon"
];

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    const t = String(target).toLowerCase();
    while (left <= right) {
        const midPoint = Math.floor((left + right) / 2);
        const midValue = String(arr[midPoint]).toLowerCase();
        if (midValue === t) return midPoint;
        if (midValue < t) left = midPoint + 1;
        else right = midPoint - 1;
    }
    return -1;
}

function jumpSearch(arr, target) {
    const n = arr.length;
    if (n === 0) return -1;
    const t = String(target).toLowerCase();
    const step = Math.floor(Math.sqrt(n)) || 1;
    let prev = 0;
    let current = step;
    while (current < n && String(arr[current]).toLowerCase() < t) {
        prev = current;
        current += step;
    }
    const subArray = arr.slice(prev, Math.min(current, n)).map(v => String(v).toLowerCase());
    const result = linearSearch(subArray, t);
    return result === -1 ? -1 : prev + result;
}

export { linearSearch, binarySearch, jumpSearch, strArr };