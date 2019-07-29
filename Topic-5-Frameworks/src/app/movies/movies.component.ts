import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  moviesArray = [];

  selectedMovie: Movies = new Movies();

  selectedForEdit(movie: Movies){
    this.selectedMovie = movie;
  }

  addOrEditMovie() {
    if (this.selectedMovie.id === 0) {
    this.selectedMovie.id = this.moviesArray.length + 1;
    this.moviesArray.push(this.selectedMovie);
    }
    this.selectedMovie = new Movies();
  }

  deleteMovie() {
    this.moviesArray = this.moviesArray.filter(x => x != this.selectedMovie);
    this.selectedMovie = new Movies();
  }
  
  constructor(private movieServie: MovieServiceService) {
    this.moviesArray = movieServie.getMovies()
  }


  ngOnInit() {
  }
}
