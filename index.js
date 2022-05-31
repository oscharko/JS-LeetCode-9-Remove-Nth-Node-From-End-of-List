let head = [[1, 2, 3, 4, 5], [1], [1, 2]],
    n = [2, 1, 1];
    expects = [[1, 2, 3, 5], [], [1]];

const removeNthFromEnd = function (head, n, expects) {
  expectsReturns = [];
  for (let i = 0; i < head.length; i++) {
    head[i].splice([head[i].length - n[i]], 1);
    if (JSON.stringify(head[i]) === JSON.stringify(expects[i])) {
      expectsReturns.push(true);
    } else {
      expectsReturns.push(false);
    }
  }
  return expectsReturns;
};

console.log(removeNthFromEnd(head, n, expects));
