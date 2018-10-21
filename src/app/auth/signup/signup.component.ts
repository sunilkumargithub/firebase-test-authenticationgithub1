import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }


  onsignup(form: NgForm) {
    console.log(form.value.email, form.value.password);
this.authservice.sinupuser(form.value.email, form.value.password);

  }
}
