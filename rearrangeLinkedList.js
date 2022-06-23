// Given the head of a Singly LinkedList, write a method to modify the LinkedList such that
// the nodes from the second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order.
// So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.
// Your algorithm should not use any extra space and the input LinkedList should be modified in-place.
// --- Examples
// Input: 2 -> 4 -> 6 -> 8 -> 10 -> 12 -> null
// Output: 2 -> 12 -> 4 -> 10 -> 6 -> 8 -> null
// Input: 2 -> 4 -> 6 -> 8 -> 10 -> null
// Output: 2 -> 10 -> 4 -> 8 -> 6 -> null

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  printList() {
    let result = "";
    let temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    console.log(result);
  }
}

const rearrangeLinkedList = function (head) {
  if (!head || !head.next) return head;
  let slow = head;
  let fast = head;

  // find the middle
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the second half
  let secondHalfHead = reverse(slow);
  let firstHalfHead = head;

  return rearrange(firstHalfHead, secondHalfHead);
};

const reverse = (head) => {
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

const rearrange = (head1, head2) => {
  while (head1 && head2) {
    let temp = head1.next;
    head1.next = head2;
    head1 = temp;

    temp = head2.next;
    head2.next = head1;
    head2 = temp;
  }

  if (head1 !== null) {
    head1.next = null;
  }

  return head1;
};
