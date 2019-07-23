class Actor {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
 }

 const ACTOR1 = new Actor('Leandro', 24);
 console.log(`The lead actor is ${ACTOR1.age} years old, and his name is ${ACTOR1.name}`);

class EventEmitter {
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
    if (this.events[eventName]) {
    this.events[eventName].forEach(callback => callback());
    }
  }
  off (eventName, callback) {
    let newEvents = this.events[eventName].filter(c => c !== callback);
    this.events[eventName] = newEvents;
    console.log('You have unsubscribed to an event');
  }
}

const MYEVENTEMITTER = new EventEmitter();
const TEST = () => console.log('You have subscribed to an event');
MYEVENTEMITTER.on('subscribed', TEST);
MYEVENTEMITTER.emit('subscribed');
MYEVENTEMITTER.off('subscribed', TEST);

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

const MOVIE1 = new Movie('American Sniper', 2014, 132);
const MOVIE2 = new Movie('Mi obra maestra', 2018, 100);
const MOVIE3 = new Movie('Toc Toc', 2017, 96);
MOVIE1.play();
MOVIE2.pause();
MOVIE3.resume();

console.log(`This movie: ${MOVIE1.title} was released in ${MOVIE1.year}, and has a duration of ${MOVIE1.duration} minutes.`);
console.log(`This movie: ${MOVIE2.title} was released in ${MOVIE2.year}, and has a duration of ${MOVIE2.duration} minutes.`);
console.log(`This movie: ${MOVIE3.title} was released in ${MOVIE3.year}, and has a duration of ${MOVIE3.duration} minutes.`);

const TERMINATOR = new Movie('Terminator I', 1985, 60);
const ARNOLD = new Actor('Arnold Schwarzenegger', 50);
const TERMINATORACTORS = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];

TERMINATOR.addCast(TERMINATORACTORS);
TERMINATOR.addCast(ARNOLD);

class Logger {
  constructor () {}
  log(info) {
    console.log(info);
  }
}

const logger = new Logger();
function playEvent(){
  logger.log("The 'play' event has been emitted");
}
TERMINATOR.on('play', playEvent);
TERMINATOR.play();


const SOCIAL = {
  share (friendName) {
    console.log(`${friendName} shares ${this.title}`);
  },
  like (friendName) {
    console.log(`${friendName} likes ${this.title}`);
  }
};

let ironMan = new Movie('Iron Man', 2008, 126)
ironMan = Object.assign(ironMan, SOCIAL);
ironMan.share('Mike Blossom');
ironMan.like('Mike Blossom');