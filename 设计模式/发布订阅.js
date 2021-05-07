class Bus {
  watcher= {}
  watcherID= 0
  addWatcher(fun) {
    this.watcherID++
    this.watcher[this.watcherID] = fun
  }
  removeWatcher(id) {
    delete this.watcher[id]
  }
  run() {
    for (let w in this.watcher) {
      this.watcher[w]();
    }
  }
}

let bus = new Bus();

bus.addWatcher(() => {
  console.log("hahaha")
})

setInterval(() => {
  bus.run()
}, 1000);

setTimeout(() => {
  bus.addWatcher(() => {
    console.log("heiheihei")
  })
}, 2000);