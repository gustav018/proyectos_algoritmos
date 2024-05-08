// Push al frente
function pushFront(arr, val) {
    arr[arr.length] = val; 
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = val; 

// Pop al frente
function popFront(arr) {
    const frontValue = arr[0]; 
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length--; 
    return frontValue; 
}

// Insertar en
function insertAt(arr, index, val) {
    arr[arr.length] = val; 
    for (let i = arr.length - 1; i > index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = val; 
}

// Eliminar en
function removeAt(arr, index) {
    const removedValue = arr[index]; 
    for (let i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length--; 
    return removedValue; 
}

// Pares de intercambio
function swapPairs(arr) {
    for (let i = 0; i < arr.length - 1; i += 2) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
}

// Eliminar duplicados
function removeDuplicates(arr) {
    if (arr.length <= 1) return arr; 
    let left = 0; // Puntero izquierdo para rastrear el lugar donde se deben colocar los elementos únicos
    let right = 1; // Puntero derecho para iterar sobre la matriz

    while (right < arr.length) {
        if (arr[right] !== arr[left]) {
            left++; 
            arr[left] = arr[right]; 
        }
        right++; 
    }
    arr.length = left + 1;
    return arr; /
}

