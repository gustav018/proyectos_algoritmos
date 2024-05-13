class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    removeFront() {
        if (!this.head) {
            return null;
        }
        const removedNode = this.head;
        this.head = this.head.next;
        return this.head;
    }

    front() {
        if (!this.head) {
            return null;
        }
        return this.head.value;
    }

    contains(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    length() {
        let count = 0;
        let currentNode = this.head;
        while (currentNode) {
            count++;
            currentNode = currentNode.next;
        }
        return count;
    }

    display() {
        let currentNode = this.head;
        let result = "";
        while (currentNode) {
            result += `${currentNode.value} -> `;
            currentNode = currentNode.next;
        }
        result += "null";
        return result;
    }

    // Método para encontrar el valor máximo en la lista enlazada
    max() {
        if (!this.head) {
            return null; 
        }
        let maxVal = this.head.value;
        let currentNode = this.head.next;
        while (currentNode) {
            if (currentNode.value > maxVal) {
                maxVal = currentNode.value;
            }
            currentNode = currentNode.next;
        }
        return maxVal;
    }

    // Método para encontrar el valor mínimo en la lista enlazada
    min() {
        if (!this.head) {
            return null; 
        }
        let minVal = this.head.value;
        let currentNode = this.head.next;
        while (currentNode) {
            if (currentNode.value < minVal) {
                minVal = currentNode.value;
            }
            currentNode = currentNode.next;
        }
        return minVal;
    }

    // Método para calcular el promedio de los valores en la lista enlazada
    average() {
        if (!this.head) {
            return null; 
        }
        let sum = 0;
        let count = 0;
        let currentNode = this.head;
        while (currentNode) {
            sum += currentNode.value;
            count++;
            currentNode = currentNode.next;
        }
        return sum / count;
    }
}

// Ejemplo de uso
const myList = new SLL();
myList.addFront(3);
myList.addFront(7);
myList.addFront(2);
myList.addFront(5);
console.log(myList.max()); // Salida: 7
console.log(myList.min()); // Salida: 2
console.log(myList.average()); // Salida: 4.25
