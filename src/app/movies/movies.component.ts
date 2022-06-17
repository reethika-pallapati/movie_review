import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../Models/Movie';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  @Input() movies: Movie [];
  @Input() ti: [];

  constructor() { }

  test(){
    console.log(this.movies, this.ti);
    
  }
  ngOnInit() {

  }

}
