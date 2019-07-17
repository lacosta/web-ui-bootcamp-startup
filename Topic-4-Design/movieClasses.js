class Movie {
  constructor(name, year, duration){
    this.title = name;
    this.year = year;
    this.duration = duration;
  }
  play() {}
  pause() {}
  resume() {}
}

const movie1 = new Movie('American Sniper', 2014, 132);
const movie2 = new Movie('Mi obra maestra', 2018, 100);
const movie3 = new Movie('Toc Toc', 2017, 96);
console.log(`This movie: ${movie1.title} was released in ${movie1.year}, and has a duration of ${movie1.duration} minutes.`);
console.log(`This movie: ${movie2.title} was released in ${movie2.year}, and has a duration of ${movie2.duration} minutes.`);
console.log(`This movie: ${movie3.title} was released in ${movie3.year}, and has a duration of ${movie3.duration} minutes.`);