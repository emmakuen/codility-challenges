// Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.
// Your algorithm should use constant space and the input LinkedList should be in the original form
// once the algorithm is finished. The algorithm should have O(N) time complexity where ‘N’ is the number of nodes in the LinkedList.
// --- Examples
// Input: 2 -> 4 -> 6 -> 4 -> 2 -> null
// Output: true
// Input: 2 -> 4 -> 6 -> 4 -> 2 -> 2 -> null
// Output: false

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const isPalindromicLinkedList = (head) => {
  if (!head || !head.next) return true;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let headSecondHalf = reverseLinkedList(slow);

  // save the head of second half to reverse it back later
  let copyHeadSecondHalf = headSecondHalf;

  while (headSecondHalf && head) {
    if (head.value !== headSecondHalf.value) break;
    head = head.next;
    headSecondHalf = headSecondHalf.next;
  }

  reverseLinkedList(copyHeadSecondHalf);

  return !headSecondHalf || !head;
};

const reverseLinkedList = (head) => {
  let current = head;
  let previous = null;
  while (current) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
};
