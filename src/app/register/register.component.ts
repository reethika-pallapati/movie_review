import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import {} from "protractor";
import { User } from "../Models/user";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  @Output() register = new EventEmitter<User>();

  fname: string = "";
  lname: string = "";
  password: string = "";
  cpassword: string = "";
  email: string = "";
  date: string = "";

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  ngOnInit() {}

  submit() {
    if (this.fname.length < 3 || this.lname.length < 3) {
      this.openSnackBar("Enter Complete Name", "Try Again");
    } else if (this.email.length < 9) {
      this.openSnackBar("Enter Valid Email", "Try Again");
    } else if (this.password === "") {
      this.openSnackBar("Enter Password", "Try Again");
    } else if (this.password.length < 8) {
      this.openSnackBar("Password Too short", "Try Again");
    } else if (this.date === "") {
      this.openSnackBar("Provide Date of Birth", "Try Again");
    } else if (this.password !== this.cpassword) {
      this.openSnackBar("Password Not Match", "Try Again");
    } else {
      this.register.emit({
        fname: this.fname,
        lname: this.lname,
        email: this.email,
        password: this.password,
        type: "user",
      });

      this.fname = "";
      this.lname = "";
      this.password = "";
      this.cpassword = "";
      this.email = "";
      this.date = "";
      this.openSnackBar("Success", "Hurray :)");
    }
  }
}
