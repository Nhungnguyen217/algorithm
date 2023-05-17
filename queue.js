/* Queues */
function Queue() {
  collection = [];
  this.print = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    collection.push(element);
  };
  this.dequeue = function () {
    return collection.shift();
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}
var myQueue = new Queue();
myQueue.enqueue("Nguyen")
myQueue.enqueue("Nhum")
myQueue.print()
myQueue.enqueue("07")
myQueue.print()
console.log(myQueue.size())