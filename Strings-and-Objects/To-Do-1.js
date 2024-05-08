// Quitar espacios en blanco
function removeSpaces(str) {
    return str.replace(/\s/g, ""); 
}

// Obtener dígitos
function getDigits(str) {
    return parseInt(str.replace(/\D/g, ""), 10);
}

// Acrónimos
function acronym(str) {
    return str
        .split(" ")
        .map(word => word[0].toUpperCase()) 
        .join(""); 
}

// Contar no espacios
function countNonSpaces(str) {
    return str.replace(/\s/g, "").length; 
}

// Quitar cadenas más cortas
function removeShorterStrings(arr, length) {
    return arr.filter(str => str.length >= length); 
}
