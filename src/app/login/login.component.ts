import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() login = new EventEmitter<{email: string, password: string}>(); 

  email: string = "";
  password: string = "";

  constructor() { }

  ngOnInit() {
  }

  submit(){
    this.login.emit({
      email: this.email,
      password: this.password
    });
  }

  

}
