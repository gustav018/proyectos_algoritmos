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

    // Método para obtener la longitud (cantidad de nodos) de la lista enlazada
    length() {
        let count = 0;
        let currentNode = this.head;
        while (currentNode) {
            count++;
            currentNode = currentNode.next;
        }
        return count;
    }
}

// Ejemplo de uso
const myList = new SLL();
myList.addFront(3);
myList.addFront(2);
myList.addFront(1);
console.log(myList.length()); // Salida: 3
