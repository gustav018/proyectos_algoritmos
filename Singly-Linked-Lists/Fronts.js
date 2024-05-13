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

    // Método para agregar un nuevo nodo al frente de la lista
    addFront(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    // Método para eliminar el nodo principal y devolver el nuevo nodo principal
    removeFront() {
        if (!this.head) {
            return null; 
        }
        const removedNode = this.head;
        this.head = this.head.next;
        return this.head;
    }

    // Método para devolver el valor al principio (head) de la lista
    front() {
        if (!this.head) {
            return null; 
        }
        return this.head.value;
    }
}

// Ejemplo de uso
const myList = new SLL();
myList.addFront(3); // Agregar un nodo con valor 3 al frente
myList.addFront(2); // Agregar un nodo con valor 2 al frente
myList.addFront(1); // Agregar un nodo con valor 1 al frente
console.log(myList.front()); // Salida: 1
myList.removeFront(); // Eliminar el nodo principal
console.log(myList.front()); // Salida: 2
