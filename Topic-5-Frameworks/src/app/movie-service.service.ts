import { Injectable } from '@angular/core';
import { Movies } from './models/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  
  moviesArray: Movies[] = [
    {id: 1, name: "American Sniper", gender: "Drama", descr: "Navy S.E.A.L. sniper Chris Kyle's pinpoint accuracy saves countless lives on the battlefield and turns him into a legend. Back home to his wife and kids after four tours of duty, however, Chris finds that it is the war he can't leave behind."},
    {id: 2, name: "Toc Toc", gender: "Comedy", descr: " The film portrays a group of patients with Obsessive Compulsive Disorder (OCD). The film’s title is a play on words in Spanish, with “toc” being both the onomatopoeia for “knock” and the abbreviation for OCD in Spanish (trastorno obsesivo compulsivo)"},
    {id: 3, name: "Mi Obra Maestra", gender: "Comedy", descr: "Arthur is a charming gallery owner and a scoundrel. Renzo is a painter with a declining career and, despite their differences, they are great friends. Arturo tries to relaunch Renzo's career, but his proposal seems as crazy as it is risky."}
  ];

  constructor() { }

  getMovies() {
    return this.moviesArray;
  }

  getMovieById(id){
    return this.moviesArray.find(movie => movie.id == id)
  }
}
