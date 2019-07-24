class Movie extends EventEmitter {
  constructor (name, year, duration) {
    super();
    this.title = name;
    this.year = year;
    this.duration = duration;
    this.cast = [];
  }
  play() {
    console.log(`${this.title} has been started`);
    this.emit('play');
  }
  pause() {
    console.log(`${this.title} has been paused`);
  }
  resume() {
    console.log(`${this.title} has been resumed`);
  }
  addCast(actor) {
    if (Array.isArray(actor)) {
      actor.forEach((element) => {
        this.cast.push(element);
      })
    } else {
      this.cast.push(actor);
    }
  }
}