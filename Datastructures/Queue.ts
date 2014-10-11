/// <reference path="DoublyLinkedList.ts" />
/**
 * The Standard TypeScript Library (STL) is a collection of interfaces and classes that are meant to solve common problems.
 */
module STL {

    /**
     * The Queue class provides the main functionality of a queue implemented using a doubly linked list.
     */
    class Queue extends DoublyLinkedList {

        /**
         * Adds an element to the queue
         *
         * @param value The value to enqueue.
         * @return void
         */
        public enqueue(value:any) {
            return this.push(value);
        }

        /**
         * Dequeues a node from the queue
         * @return any  The value of the dequeued node.
         */
        public dequeue() {
            return this.pop();
        }
    }
}