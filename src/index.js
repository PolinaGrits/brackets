module.exports = function check(str, bracketsConfig) {
  // your solution
  let heap = [];
  let collection = new Map(bracketsConfig);

  str.split('').forEach((item, i) => {
    if(item == collection.get(heap[heap.length - 1])) {
      heap.pop();
    } else {
      heap.push(item);
    }
  })

  return heap.length !== 0 ? false : true;
}