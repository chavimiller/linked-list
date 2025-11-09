class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = head;
    this.size = head === null ? 0 : 1;
  }

  appendValue(value) {
    const node = new ListNode(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.nextNode = node;
      this.tail = node;
    }

    this.size += 1;
  }

  prepend(value) {
    const node = new ListNode(value);
    if (this.tail === null) {
      this.tail = node;
    }
    node.nextNode = this.head;
    this.head = node;
    this.size += 1;
  }

  at(index) {
    let currentValue = this.head;
    let count = 0;
    if (this.head === null) {
      return null;
    } else {
      while (currentValue !== null && count !== index) {
        count++;
        currentValue = currentValue.nextNode;
      }
      return currentValue;
    }
  }

  pop() {
    let currentValue = this.head;
    if (this.head === null) {
      return;
    }
    if (this.tail === this.head) {
      this.tail = null;
      this.head = null;
      this.size = 0;
    } else {
      while (currentValue !== null) {
        if (currentValue.nextNode === this.tail) {
          this.tail = currentValue;
          this.tail.nextNode = null;
          this.size -= 1;
        }
        currentValue = currentValue.nextNode;
      }
    }
  }

  contains(value) {
    let currentValue = this.head;
    let found = false;

    while (currentValue !== null && !found) {
      if (currentValue.value === value) {
        found = true;
      }
      currentValue = currentValue.nextNode;
    }
    return found;
  }
  find(value) {
    let index = 0;
    let currentValue = this.head;
    while (currentValue !== null) {
      if (currentValue.value === value) {
        return index;
      } else {
        currentValue = currentValue.nextNode;
        index++;
      }
    }
    return null;
  }

  toString() {
    let valueString = "";
    let currentValue = this.head;
    while (currentValue !== null) {
      valueString += `(${currentValue.value}) -> `;
      currentValue = currentValue.nextNode;
    }
    valueString += `(${null})`;
    return valueString;
  }

  insertAt(value, index) {
    let count = 0;
    let currentValue = this.head;
    let newNode = new ListNode(value);
    if (index === 0) {
      newNode.nextNode = currentValue;
      this.head = newNode;
      this.size++;
    } else {
      while (currentValue !== null && count !== index - 1) {
        currentValue = currentValue.nextNode;
        count++;
      }
      newNode.nextNode = currentValue.nextNode;
      currentValue.nextNode = newNode;
      this.size++;
    }
  }

  removeAt() {}
}

class ListNode {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const node1 = new ListNode(10);
const newList = new LinkedList(node1);
newList.appendValue(20);
newList.appendValue(30);
newList.appendValue(40);

const node2 = new ListNode(200);

const secondNewList = new LinkedList(node2);

console.log(newList);
console.log("------------------------------");
console.log(newList.toString()); // ( value ) -> ( value ) -> ( value ) -> null
console.log("------------------------------");
newList.insertAt(357, 0);
console.log(newList.toString());
