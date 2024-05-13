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

    // Método para verificar si la lista contiene un nodo con el valor dado
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
}

// Ejemplo de uso
const myList = new SLL();
myList.addFront(3); // Agregar un nodo con valor 3 al frente
myList.addFront(2); // Agregar un nodo con valor 2 al frente
myList.addFront(1); // Agregar un nodo con valor 1 al frente
console.log(myList.contains(2)); // Salida: true
console.log(myList.contains(4)); // Salida: false
