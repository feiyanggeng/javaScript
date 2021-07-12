const tree = {
  val: 1,
  children: [
    {
      val: 2,
      children: [{ val: 4 }, { val: 5 }],
    },
    { val: 3 },
  ],
};

const bfs = (node) => {
  let stack = [node]
  while (stack.length > 0) {
    let n = stack.pop();
    console.log(n.val)
    if (n.children) {
      n.children.forEach(item => {
        stack.unshift(item);
      })
    }
  }
};

bfs(tree);
