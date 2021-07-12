const tree = {
  val: 1,
  children: [
    {
      val: 2,
      children: [
        { val: 4 },
        { val: 5 }
      ]
    },
    {val: 3}
  ]
}

const dfs = (node) => {
  console.log(node.val)
  if (node.children) {
    node.children.forEach(dfs)
  }
}

dfs(tree)
