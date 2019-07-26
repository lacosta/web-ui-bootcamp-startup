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
