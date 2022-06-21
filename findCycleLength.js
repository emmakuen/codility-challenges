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
