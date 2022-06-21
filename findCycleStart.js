// Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const findCycleStart = (head) => {
  let cycleNode = null;
  let cycleLength = 0;
  let slow = head;
  let fast = head;

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
    if (slow === cycleNode) {
      break;
    }
  }

  if (!cycleNode) return null;

  slow = head;
  fast = head;

  while (cycleLength > 0) {
    fast = fast.next;
    cycleLength--;
  }

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};
