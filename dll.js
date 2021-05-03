export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export default class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Push a new value to the tail of the linked list.
   */

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  /**
   * Remove an item from the end of the linked list.
   */
  pop() {
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return "linked list is now empty";
    } else if (this.length > 1) {
      this.tail.prev.next = null; // set prev tail as tail
      this.tail = this.tail.prev; // set next to null
      this.prev = this.tail.prev;
      this.length--;
      return this;
    } else {
      return "empty";
    }
  }

  /**
   * Remove a node from the beginning of the list.
   */
  shift() {
    if (this.length > 1) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length = this.length - 1;
      return this;
    } else if (this.length == 1) {
      this.head = this.head.next;
      this.tail = null;
      this.length = this.length - 1;
      return "no value to remove";
    }
  }

  /**
   * Add a node to the head of the linked list.
   */
  unshift(value) {
    const node = new Node(value);

    if (this.head) {
      this.head.prev = node;
      this.head.prev.next = this.head;
      this.head = node;
      return this;
    } else {
      return "no value to remove";
    }
  }

  /**
   * Get a Node at a specific index
   */
  getNodeAtIndex(index) {
    let count = 0;
    let curr = this.head;

    while (curr != null) {
      if (count == index) {
        return curr.value + " is the value at index: " + index;
      } else {
        count++; // increase count
        curr = curr.next; // replace curr with next value
      }
    }
    return "no index with that number";
  }

  /**
   * Set a node at a specific index.
   */
  setNodeAtIndex(index, value) {
    let node = new Node(value); // creates new node
    let count = 0; // keep track of index
    let curr = this.head; // curr node selection
    // find current index
    while (curr != null) {
      if (count == index) {
        if (curr == this.head) {
          // if head is index
          let oldHead = this.head;
          this.head.prev = node;
          this.head = node;
          this.head.next = oldHead;
        } else if (curr == this.tail) {
          // if tail is index
          let oldTail = this.tail;
          this.tail.next = node;
          this.tail = node;
          this.tail.prev = oldTail;
        } else {
          // if other indexes
          node.prev = curr.prev; // replace prev
          curr.prev.next = node;
          curr.prev = node;
          node.next = curr;
        }
      } else {
        count++;
        curr = curr.next;
      }
    }
    // replace value with new node;
  }

  /**
   *  Insert a node at a specific index.
   */
  insertAtIndex(index, val) {}

  /**
   * Remove a node at a specific index.
   */
  removeAtIndex(index) {}

  print() {
    let curr = this.head;

    while (curr != null) {
      if (curr) {
        console.log(curr);
      } else {
        curr = curr.next;
      }
      return this;
    }
  }
}

let list = new DoubleLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
// console.log(list);
// list.pop();
// console.log(list);
// list.shift();
// list.unshift("unshift");
console.log(list.print());
console.log(list.getNodeAtIndex(3));
list.setNodeAtIndex(0, 100);
console.log(list.setNodeAtIndex(0, 100));
