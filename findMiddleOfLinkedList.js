// Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.
// If the total number of nodes in the LinkedList is even, return the second middle node.

// --- Examples
// Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
// Output: 3
// Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
// Output: 4
// Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> null
// Output: 4

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const findMiddleOfLinkedList = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};
