// function getDashboardMessage(role) {
//   let message = "Role not recognized.";
//   // Switch statement is used for multiple conditions
//   switch (role) {
//     case "admin":
//       message = "Welcome Admin! You have full access.";
//       // Break kills the switch statement and stops it from running the next cases
//       // This is for a more efficient code
//       break; 
    
//     case "user":
//       message = "Welcome User! You have limited access.";
//       break;
//     default:
//       message = "Welcome Guest! Please log in.";
//   }
//   return message;
// }
// function getUsername(user){
//   let name = user;
// }

// // Palindrome Checker
// function isPalindrome(str) {
//   const universal = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//   return universal === universal.split('').reverse().join('');
// }
// // Using a loop, write a function that adds all the values in an array
// const values = [121, -111, 123, 23, 10, -101, 30];
// function addArrayValues(){
//   let sum = 0;
//   for (let i = 0; i < values.length; i++) {
//     sum += values[i];
//   }
//   return sum;
// }
// // array.reduce() method executes a reducer function on each element of the array, resulting in a single output value.
// // array.forEach() method executes a provided function once for each array element.
// function addArrayValuesAlt(){
//   return values.reduce((acc, val) => acc + val, 0);
// }
// function addArrayValuesAlt2(){
//   let sum = 0;
//   values.forEach(index => {
//     sum += values[index];
//   });
//   return sum;
// }
// // Objects
// const car = {
//   make: 'Toyota',
//   model: 'Camry',
//   year: 2020,
//   color: 'blue',
//   mileage: 15000,
//   engine:{
//     cylinders: 4,
//   },
//   getCylinders: function() {
//     return this.engine.cylinders;
//   }
// };
// // Accessing object properties
// console.log(car.make); // Output: Toyota
// car.getCylinders(); // Output: 4


// Binary Search Tree
// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Binary Search Tree class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  // Delete Method
  delete(value) {
    const rmvNode = (node, value) => {
      if (!node) return null;
      if (value === node.value) {
        // Node with no children
        if (!node.left && !node.right) return null;
        // Node with only right child
        if (!node.left) return node.right;
        // Node with only left child
        if (!node.right) return node.left;
        // Node with two children
        let tempNode = node.right;
        while (tempNode.left) {
          tempNode = tempNode.left;
        }
        node.value = tempNode.value;
        node.right = rmvNode(node.right, tempNode.value);
        return node;
        
      } else if (value < node.value) {
        node.left = rmvNode(node.left, value);
        return node;
      } else {
        node.right = rmvNode(node.right, value);
        return node;
      }
    };

    this.root = rmvNode(this.root, value);
  }
  // Remove Method
  remove(value) {
    this.root = rmvNode(this.root, value);
  }
  // Search Method
  find(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) {
        return true;
      }
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
    inOrder(node = this.root, result = []) {
    if (node) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
    return result;
  }
} 
const bst = new BinarySearchTree();
const hardcodedValues = [10, 5, 15, 3, 7, 100, 20];
// Inserting hardcoded values into the BST
hardcodedValues.forEach(value => bst.insert(value));
console.log("In-order traversal (sorted):", bst.inOrder());
console.log(bst.find(7));  // Output: true
console.log(bst.find(99)); // Output: false