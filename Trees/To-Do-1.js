class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(val) {
        const newNode = new BTNode(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while (true) {
            current = val < current.val ? (current.left ? current.left : (current.left = newNode, null)) : 
                                           (val > current.val ? (current.right ? current.right : (current.right = newNode, null)) :
                                                               (current = null, null));
            if (!current) return this;
        }
    }

    contains(val) {
        let current = this.root;
        while (current) {
            if (val === current.val) return true;
            current = val < current.val ? current.left : current.right;
        }
        return false;
    }

    min(node = this.root) {
        return !node ? null : node.left ? this.min(node.left) : node.val;
    }

    max(node = this.root) {
        return !node ? null : node.right ? this.max(node.right) : node.val;
    }

    size(node = this.root) {
        return !node ? 0 : 1 + this.size(node.left) + this.size(node.right);
    }

    isEmpty() {
        return !this.root;
    }
}

// Ejemplo de uso:
const bst = new BST();
bst.add(10).add(5).add(15).add(3).add(7);

console.log(bst.contains(7)); // Output: true
console.log(bst.min()); // Output: 3
console.log(bst.max()); // Output: 15
console.log(bst.size()); // Output: 5
console.log(bst.isEmpty()); // Output: false
