import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authservice:AuthService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  onSignup(form:NgForm){
     const email = form.value.email
     const password = form.value.password
     this.authservice.Signupuser(email,password).then(()=>{
         this.router.navigate(['signin']);
     },(err)=>{console.log(err)});
  }

}
