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

    // Método para mostrar los valores de la lista enlazada
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
}

// Ejemplo de uso
const myList = new SLL();
myList.addFront(3);
myList.addFront(2);
myList.addFront(1);
console.log(myList.display()); // Salida: 1 -> 2 -> 3 -> null
