class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

}
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  emit(eventName) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(callback => callback());
    }
  }

  off(eventName, callback) {
    let newEvents = this.events[eventName].filter(c => c !== callback);
    this.events[eventName] = newEvents;
    console.log('You have unsubscribed to an event');
  }

}
class Logger {
  constructor() {}

  log(info) {
    console.log(info);
  }

}
class Movie extends EventEmitter {
  constructor(name, year, duration) {
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
      actor.forEach(element => {
        this.cast.push(element);
      });
    } else {
      this.cast.push(actor);
    }
  }

}
const SOCIAL = {
  share(friendName) {
    console.log(`${friendName} shares ${this.title}`);
  },

  like(friendName) {
    console.log(`${friendName} likes ${this.title}`);
  }

};
