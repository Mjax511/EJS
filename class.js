class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(vec) {
    return new Vec(this.x + vec.x, this.y + vec.y);
  }
  minus(vec) {
    return new Vec(this.x - vec.x, this.y - vec.y);
  }

  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

class Group {
  constructor() {
    this.group = [];
  }

  add(value) {
    if (this.group.indexOf(value) == -1) this.group.push(value);
  }
  has(value) {
    if (this.group.indexOf(value) == -1) return false;
    return true;
  }
  delete(value) {
    const i = this.group.indexOf(value);
    if (i != -1) {
      this.group.splice(i, 1);
    }
  }
  [Symbol.iterator]() {
    return new GroupIterator(this);
  }

  static from(iterable) {
    const retG = new Group();
    for (let i in iterable) {
      retG.add(iterable[i]);
    }
    return retG;
  }
}
class GroupIterator {
  constructor(group) {
    this.group = group;
    this.element = 0;
  }
  next() {
    if (!this.group.group[this.element]) return { done: true };
    const retO = { value: this.group.group[this.element], done: false };
    this.element++;
    return retO;
  }
}
