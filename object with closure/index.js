let b = [];



function setup() {
  createCanvas(1000, 800);
  //put setup code here
  for (let i = 0; i < 5; i++) {
    let x = i * 500 + 500;
    let y = i + 500 * 1.5;
    b[i] = new Counter(x, y);
      b[i].displayCounter();
  }
}

class Counter {
  constructor(count, wait) {
    this.count = count;
    this.wait = wait;
    this.p = createP('');

  }

  displayCounter() {
    setInterval(() => {
      this.count++
      this.p.html(this.count);
    }, this.wait);
  }
}
