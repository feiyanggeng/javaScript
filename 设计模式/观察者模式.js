class student {
  constructor(name, age) {
    this.name = name,
    this.age = age
  }
  getName() {
    return this.name
  }
}

const s = new student("zhangsan", 12)

console.log(s);

console.log({...s});