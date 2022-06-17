import { Component } from '@angular/core';
import { Movie } from './Movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-review';

  public movies: Movie[] = [];

  constructor(){
       this.movies.push({
    name: "Black Adam",
    gerner: "Action, Drama",
    cast: "D Jhonson",
    type: "movie", // movie or series
    rating: 4, //scale 1-5
    date: "07-10-2022",
    review: "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods-and imprisoned just as quickly-Black Adam (Johnson) is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world."
  })
  this.movies.push(
  {
    name: "Jurassic World",
    gerner: "Action, Fantasy",
    cast: "Chris Pratt",
    type: "series", // type is movie or series
    rating: 5, //scale 1-5
    date: "06-09-2022",
    review: "Four years after the destruction of Isla Nublar, dinosaurs now live--and hunt--alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history's most fearsome creatures in a new Era."
  })
  this.movies.push({
    name: "Twilight Saga",
    gerner: "Horror, Fantasy, Drama, Romance, Melodrama",
    cast: "Robert Pattinson",
    type: "series", // type is movie or series
    rating: 2, //scale 1-5
    date: "21-11-2008",
    review: "Love it or hate it, you can't deny one thing- there is something about Twilight that makes it a defining feature of the late 2000s. It presented a fantasy that many found laughable and yet plenty were willing to buy- a wonderful escape for (mainly) girls that there could be a world where someone would come to save them from a mundane, vapid existence- someone exciting, dangerous and attractive who would make them feel special, make their boring lives secretly thrilling. "
  })
  this.movies.push({
    name: "Fantastic Beasts: The Secrets of Dumbledore",
    gerner: "Action, Adventure, Fantasy",
    cast: "Eddie Redmayne",
    type: "Movie", // type is movie or series
    rating: 4, //scale 1-5
    date: "15-04-2022",
    review: "I LOVED this film, I really don’t understand where all the hatred is coming from! Mads did a great job of taking over the role from Johnny, Eddie Redmayne was (as always) amazing and Jude Law played Dumbledore so well! "
  })
  this.movies.push({
    name: "1 - Nenokkadine",
    gerner: "Action, Thriller",
    cast: "Mahesh Babu",
    type: "Movie", // type is movie or series
    rating: 3.5, //scale 1-5
    date: "10-01-2014",
    review: "Film is just fantastic Best performance of mahesh babu till dateCinematography is next level by Ratnavelu Background score speaks a lot and maintains the same intensity throughout the film which lacks now a days. "
  })
  this.movies.push({
    name: "Robot 2.0",
    gerner: "Action, Scientific",
    cast: "Rajinikanth",
    type: "Movie", // type is movie or series
    rating: 1, //scale 1-5
    date: "20-11-2019",
    review: "2.0 is a remarkable visual extravaganza! Factors like an excellent screenplay, watertight editing, breakneck action and high quality VFX prove why we go to movies. It's a terrific, creative sci-fi actioner. Hats off to Shankar, Akshay, Amy and Rajni sir."
  })
  this.movies.push({
    name: "KGF",
    gerner: "Action, Romance",
    cast: "Yash Rocky",
    type: "Movie", // type is movie or series
    rating: 5, //scale 1-5
    date: "20-12-2018",
    review: "No doubt. This film is the changing phase for Sandalwood industry. Each and every people have put seeminglessly a hard work and effort. When watching the film, we can cleverly analyze it. KGF: Chapter 1 is not a film. But, it's an epic and must watch for all those, who love high-octane action films."
  })
  
}
addMovie(ele: Movie){
  console.log('parent', ele);
  this.movies.push(ele)
}



}
