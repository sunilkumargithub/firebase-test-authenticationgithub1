import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }
  onsignin(form: NgForm) {
    this.authservice.signinuser(form.value.email, form.value.password);
console.log(form);
  }
}
