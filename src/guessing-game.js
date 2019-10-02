class GuessingGame {
    constructor() {
      this.start;
      this.finish;
    }

    setRange(min, max) {
      this.start = min;
      this.finish = max;
    }

    guess() {
      return Math.round(this.start + (this.finish - this.start)/2);
    }

    lower() {
      this.finish = Math.round(this.finish - (this.finish - this.start)/2);
    }

    greater() {
      this.start = Math.round(this.start + (this.finish - this.start)/2);
    }
}

module.exports = GuessingGame;
