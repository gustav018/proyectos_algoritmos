// Búsqueda binaria recursiva
function rBinarySearch(arr, target, start = 0, end = arr.length - 1) {
    return start > end
        ? false
        : arr[Math.floor((start + end) / 2)] === target
            ? true
            : arr[Math.floor((start + end) / 2)] > target
                ? rBinarySearch(arr, target, start, Math.floor((start + end) / 2) - 1)
                : rBinarySearch(arr, target, Math.floor((start + end) / 2) + 1, end);
}

// Máximo común divisor (GCF)
function rGCF(num1, num2) {
    return num1 === 0
        ? num2
        : num2 === 0
            ? num1
            : num1 === num2
                ? num1
                : num1 > num2
                    ? rGCF(num1 - num2, num2)
                    : rGCF(num1, num2 - num1);
}

// Ejemplos de uso
console.log(rBinarySearch([1, 3, 5, 6], 4)); // Salida: false
console.log(rBinarySearch([4, 5, 6, 8, 12], 5)); // Salida: true

console.log(rGCF(48, 18)); // Salida: 6
console.log(rGCF(123456, 987654)); // Salida: 6
