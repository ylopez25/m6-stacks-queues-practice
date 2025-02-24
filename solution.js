const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.max = null;
    this.size = 0;
  }
  enqueue(data) {
    let newItem = new Node(data);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    return ++this.size;
  }
  isEmpty() {
    return this.first === null;
  
  }
  dequeue() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    const item = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return item.data;
  }
  peek() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    return this.first;
  }
  last() {

  }
  size() {
    return this.size;
  }
  max() {

  }
}

class Stack {
  constructor(top = null) {
    this.top =top;
  }
  isEmpty () {
    return this.top === null;
  }
  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }
  peek() {
    if(this.top == null) {
      throw new Error('This stack is empty')
    }
    return this.top;
  }
  pop () {
    if (this.top == null) {
      throw new Error("The stack is empty");
    }
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }
  size() {

  }
  findMin () {
    let min = Infinity;
    let current = this.top;
    while (current) {
      if (current.data < min) {
        min = current.data;
      }
      current = current.next;
    }
    return min;
  }
  sort () {

  }

  
   
  
  
}
module.exports = {
  Node,
  Queue,
  Stack,
};
