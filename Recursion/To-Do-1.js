// Función recursiva para calcular la suma de enteros desde 1 hasta n
function rSigma(n) {
    if (n <= 0) {
        return 0;
    }
    // Llamada recursiva para sumar los números anteriores a n y luego sumar n
    return n + rSigma(n - 1);
}

// Función recursiva para calcular el factorial de un número entero positivo
function rFact(num) {
    if (num <= 1) {
        return 1;
    }
    // Llamada recursiva para calcular el factorial de num - 1 y luego multiplicarlo por num
    return num * rFact(Math.floor(num - 1)); // Usamos Math.floor para truncar num si no es entero
}

// Ejemplos de uso
console.log(rSigma(5)); // Salida: 15
console.log(rSigma(2.5)); // Salida: 3
console.log(rSigma(-1)); // Salida: 0
console.log(rFact(3)); // Salida: 6
console.log(rFact(6.5)); // Salida: 720
