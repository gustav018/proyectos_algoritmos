function minToFront(arr) {
    if (arr.length <= 1) return arr; 
    let minIndex = 0; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }
    const minValue = arr[minIndex]; 
    for (let i = minIndex; i > 0; i--) {
        arr[i] = arr[i - 1]; 
    }
    arr[0] = minValue; 

    return arr;
}
const arr = [4, 2, 1, 3, 5];
console.log(minToFront(arr)); 
