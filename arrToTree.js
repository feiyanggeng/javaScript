const a = [
  { id: 1, pid: 0 },
  { id: 2, pid: 1 },
  { id: 3, pid: 1 },
  { id: 4, pid: 2 },
  { id: 5, pid: 3 },
  { id: 6, pid: 3 },
  { id: 7, pid: 5 }
]
// 利用 map
function arrToTree(arr) {
  let map = {}, res = null
  arr.forEach(item => {
    map[item.id] = { ...item , children: []};
  })
  arr.forEach(item => {
    let child = map[item.id]
    if (map[item.pid]) {
      map[item.pid].children.push(child);
    } else {
      res = child;
    }
  })
  return res
}

// 利用递归
function recArrToTree(arr) {
  let res = {id: 1, pid: 0, children: []}
  let rec = (node) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].pid == node.id) {
        let child = { ...arr[i], children: [] }
        node.children.push(child)
        rec(child)
      }
    }
  }
  rec(res)
  return res
}

console.log(JSON.stringify(recArrToTree(a)));