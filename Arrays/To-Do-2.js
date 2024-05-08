
// Reversa
function reverseArr(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// Girar
function rotateArr(arr, shiftBy) {
    const n = arr.length;
    shiftBy %= n; 
    if (shiftBy < 0) shiftBy += n; 
    if (shiftBy === 0) return; 

    reverseArr(arr); 
    reverseArr(arr.slice(0, shiftBy)); 
    reverseArr(arr.slice(shiftBy)); 
}

// Rango de filtro
function filterRange(arr, min, max) {
    let writeIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= min && arr[i] <= max) {
            arr[writeIndex++] = arr[i];
        }
    }
    arr.length = writeIndex; 
}

// Concat
function arrConcat(arr1, arr2) {
    const newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i]); 
    }
    for (let i = 0; i < arr2.length; i++) {
        newArr.push(arr2[i]); 
    }
    return newArr;
}

