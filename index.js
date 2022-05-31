let head = [1, 2, 3, 4, 5],
  n = 2;

const removeNthFromEnd = function (head, n) {
  let count = 0;
  let current = head;

  while (current) {
    count++;
    current = current.next;
  }

  if (n < 0 || n >= count) {
    return head.next;
  }

  let indexNB = count - n - 1;
  current = head;

  for (let i = 0; i < indexNB; i++) {
    current = current.next;
  }

  current.next = current.next.next;

  return head;
};

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prependValue(value) {
    let node = {
      value: value,
      next: null,
    };
    if (!this.head) {
      this.head = this.tail = node;
    }
    node.next = this.head;
    this.head = node;
  }

  prependArray(array) {
    for (let i = 0; i < array.length; i++) {
      let node = {
        value: value,
        next: null,
      };
      if (!this.head) {
        this.head = this.tail = node;
      }
      node.next = this.head;
      this.head = node;
    }
  }

  appendValue(value) {
    let node = {
      value: value,
      next: null,
    };
    if (!this.tail) {
      this.head = this.tail = node;
    }
    this.tail.next = node;
    this.tail = node;
  }

  appendArray(array) {
    for (let i = 0; i < array.length; i++) {
      let node = {
        value: array[i],
        next: null,
      };
      if (!this.tail) {
        this.head = this.tail = node;
      }
      this.tail.next = node;
      this.tail = node;
    }
  }

  removeFirst() {
    if (!this.head) {
      return null;
    }
    let nodeToRemove = this.head;
    this.head = nodeToRemove.next;
    nodeToRemove.next = null;
    if (nodeToRemove === this.tail) {
      this.tail = null;
    }
    return nodeToRemove;
  }

  findNodeBefore(node) {
    if (!node) {
      return null;
    }
    if (node === this.head) {
      return null;
    }
    let current = this.head;
    while (current) {
      if (current.next === node) {
        break;
      }
      current = current.next;
    }
    return current;
  }

  removeLast() {
    if (!this.tail) {
      return null;
    }
    let nodeToRemove = this.tail;
    console.log(this.findNodeBefore(this.tail));
    this.tail = this.findNodeBefore(this.tail);

    if (nodeToRemove === this.head) {
      this.head = null;
    }
    return nodeToRemove;
  }

  getLength() {
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  insert(value, asIndex) {
    let previous = null;
    let current = this.head;
    let currentIndex = 0;
    if (asIndex <= 0 || !asIndex) {
      return this.prepend(value);
    }
    if (asIndex >= this.length) {
      return this.append(value);
    }
    let node = {
      value: value,
      next: null,
    };
    while (current && currentIndex !== asIndex) {
      previous = current;
      current = current.next;
      currentIndex++;
    }
    previous.next = node;
    node.next = current;
    this.length++;
    return node;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index === 0) {
      return this.removeFirst();
    }
    let current = this.head;
    let previous = null;
    let currentIndex = 0;
    while (current && currentIndex !== index) {
      previous = current;
      current = current.next;
      currentIndex++;
    }
    previous.next = current.next;
    current.next = null;
    this.length--;
    return current;
  }

  print() {
    let list = this.head;
    while (list) {
      console.log(list.value);
      list = list.next;
    }
  }
}

let headLL = new LinkedList();
headLL.appendArray(head);
headLL.remove(headLL.getLength() - n);
headLL.print();
