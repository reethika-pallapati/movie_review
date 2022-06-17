import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Movie } from "../Models/Movie";
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: "app-review",
  templateUrl: "./review.component.html",
  styleUrls: ["./review.component.css"],
})
export class ReviewComponent implements OnInit {

  @Output() from = new EventEmitter<Movie>();

  name: string = "";
  gerner: string = "";
  cast: string = "";
  type: string = "";
  rating: number = 0;
  date: string = "";
  review: string = "";

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  ngOnInit() {}

  submit() {
    if(
      this.name === "" || 
      this.name === " " ||
      this.gerner === ""  ||
      this.cast === "" ||
      this.type === "" ||
      this.rating === 0 || 
      "" + this.date === ""|| 
      this.review === "" ||
      this.gerner  === " " ||
      this.cast === " " ||
      this.type === " " ||
      "" + this.date === " "|| 
      this.review === " " 
      ){
      this.openSnackBar("Please fill the complete Form", "Try Again");
    }else{

      let temp = new Movie(
        this.name,
        this.gerner,
        this.cast,
        this.type,
        +this.rating,
        "" + this.date,
        this.review
      );
      this.from.emit(temp);

  this.name = "";
  this.gerner = "";
  this.cast = "";
  this.type = "";
  this.rating = 0;
  this.date = "";
  this.review = "";

      this.openSnackBar("Review Uploaded Successfully", "OK :)");
    }

    
  }
}
