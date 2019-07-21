class Actor {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
 }

 const actor1 = new Actor('Leandro', 24);
 console.log(`The lead actor is ${actor1.age} years old, and his name is ${actor1.name}`);


class EvenEmitter {
  constructor () {
    this.events = {}
  }
  on (eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }
  emit (eventName) {
    this.events[eventName].forEach(callback => callback());
  }
  off (eventName, callback) {
    let newEvents = this.events[eventName].filter(c => c !== callback);
    this.events[eventName] = newEvents;
    console.log('You have unsubscribed to an event');
  }
}

const myEventEmitter = new EvenEmitter();
const TEST = () => console.log('You have subscribed to an event');
myEventEmitter.on('subscribed', TEST);
myEventEmitter.emit('subscribed');
myEventEmitter.off('subscribed', TEST);

class Movie extends EvenEmitter {
  
  constructor (name, year, duration) {
    super();
    this.title = name;
    this.year = year;
    this.duration = duration;
    this.cast = [];
  }
  play() {
    console.log(`${this.title} has been started`)
  }
  pause() {
    console.log(`${this.title} has been paused`)
  }
  resume() {
    console.log(`${this.title} has been resumed`)
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

const movie1 = new Movie('American Sniper', 2014, 132);
const movie2 = new Movie('Mi obra maestra', 2018, 100);
const movie3 = new Movie('Toc Toc', 2017, 96);
movie1.play();
movie2.pause();
movie3.resume();

console.log(`This movie: ${movie1.title} was released in ${movie1.year}, and has a duration of ${movie1.duration} minutes.`);
console.log(`This movie: ${movie2.title} was released in ${movie2.year}, and has a duration of ${movie2.duration} minutes.`);
console.log(`This movie: ${movie3.title} was released in ${movie3.year}, and has a duration of ${movie3.duration} minutes.`);

const terminator = new Movie('Terminator I', 1985, 60);
const arnold = new Actor('Arnold Schwarzenegger', 50);
const terminatorActors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];

terminator.addCast(terminatorActors);
terminator.addCast(arnold);
console.log(terminator);