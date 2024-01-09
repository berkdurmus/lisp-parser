/**
 * A generic stack class implementing the typical stack operations.
 * This class uses a generic type T, allowing it to be used with any data type.
 */
export class Stack<T> {
  // Array to store the elements of the stack.
  private items: T[] = [];

  /**
   * Pushes an item onto the top of the stack.
   * 
   * @param {T} item - The item to be pushed onto the stack.
   */
  push(item: T) {
    this.items.push(item);
  }

  /**
   * Removes and returns the item at the top of the stack. Returns undefined if the stack is empty.
   * 
   * @returns {T | undefined} The item at the top of the stack or undefined if the stack is empty.
   */
  pop(): T | undefined {
    return this.items.pop();
  }

  /**
   * Returns the item at the top of the stack without removing it. Returns undefined if the stack is empty.
   * 
   * @returns {T | undefined} The item at the top of the stack or undefined if the stack is empty.
   */
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  /**
   * Checks whether the stack is empty.
   * 
   * @returns {boolean} True if the stack is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Returns the number of items in the stack.
   * 
   * @returns {number} The number of items in the stack.
   */
  size(): number {
    return this.items.length;
  }

  /**
   * Clears all items from the stack.
   */
  clear(): void {
    this.items = [];
  }

  /**
   * Prints the elements of the stack to the console.
   */
  print(): void {
    console.log(this.items.toString());
  }
};
