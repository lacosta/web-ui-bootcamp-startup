import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from './../movie-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie = {}
  constructor(private movieService: MovieServiceService, private route: ActivatedRoute) { 
    const id = this.route.snapshot.paramMap.get('id'); 
    this.movie = movieService.getMovieById(id)
  }
  ngOnInit() {
  }

}
