let pubSub = {
  pubList: {},
  // 订阅
  subscribe: function(key, fn) {
    if (this.pubList[key]) {
      this.pubList[key].push(fn)
    } else {
      this.pubList[key] = [fn]
    }
  },
  // 发布
  publish: function (key, ...args) {
    this.pubList[key].forEach(fn => {
      fn.call(this, ...args)
    })
  },
  unSubscribe: function (key) {
    delete this.pubList[key]
  }
}

pubSub.subscribe('sayName', (name) => {
  console.log(`my name is ${name}`)
});

pubSub.publish('sayName', 'zhangsan')