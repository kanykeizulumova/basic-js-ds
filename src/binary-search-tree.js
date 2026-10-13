const { NotImplementedError } = require('../lib');
// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  root() {
    this.root = null;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (data === current.data) return undefined;

      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
      else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(data) {
    let current = this.root;

    while (current) {
      if (data === current.data) {
        return true;
      }

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }


  has(data) {
    if (this.root === null) return false;

    let current = this.root;
    while (current) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);

    removeNode(node, key)
    {
      if (node === null)
        return null;
      else if (key < node.data) {
        node.left = this.removeNode(node.left, key);
        return node;
      }
      else if (key > node.data) {
        node.right = this.removeNode(node.right, key);
        return node;
      }


      else {
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }


        if (node.left === null) {
          node = node.right;
          return node;
        }

        else if (node.right === null) {
          node = node.left;
          return node;
        }
        var aux = this.findMinNode(node.right);
        node.data = aux.data;

        node.right = this.removeNode(node.right, aux.data);
        return node;
      }

    }

  }

  min() {
    if (this.root === null) return null;

    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (this.root === null) return null;

    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};