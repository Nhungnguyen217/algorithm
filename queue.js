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
myQueue.enqueue("Nguyen");
myQueue.enqueue("Nhum");
myQueue.print();
myQueue.enqueue("07");
myQueue.print();
console.log(myQueue.size());

/* PriorityQueue */
function PrioritQueue() {
  var collection = [];
  this.printCollection = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    if (!this.isEmpty) {
      collection.push(element);
    } else {
      var added = false;
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };
  this.dequeue = function () {
    var value = collection.shift();
    return value[0];
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
//  test
var pQueue = new PrioritQueue();
pQueue.enqueue(['Hong Nhung',2])
pQueue.enqueue(['Ty',3])
pQueue.enqueue(['Miu',1])
pQueue.enqueue(['Nhum',2])
pQueue.printCollection()



