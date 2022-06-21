// Given the head of a LinkedList with a cycle, find the length of the cycle.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const findCycleLength = (head) => {
  let slow = head;
  let fast = head;
  let cycleNode = null;
  let cycleLength = 0;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      cycleNode = slow;
      break;
    }
  }

  while (slow) {
    slow = slow.next;
    cycleLength++;
    if (slow === cycleNode) break;
  }

  return cycleLength;
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle length: ${findCycleLength(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle length: ${findCycleLength(head)}`);
