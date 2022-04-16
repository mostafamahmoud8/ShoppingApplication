import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
  }
  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authservice.Signinuser(email,password);
  }
}
