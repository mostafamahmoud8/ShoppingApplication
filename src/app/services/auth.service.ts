import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import * as auth  from "firebase/auth";
import { Subject } from "rxjs";
@Injectable()
export class AuthService{
    token: string = "";
    notify :Subject<any> = new Subject();
    
    constructor(private router:Router){}
    Signupuser(email:string,password:string){
         return auth.createUserWithEmailAndPassword(auth.getAuth(),email,password)
         
    }
    Signinuser(email:string,password:string){
       auth.signInWithEmailAndPassword(auth.getAuth(),email,password).then(()=>{
        auth.getAuth().currentUser?.getIdToken().then(token=>{
                this.token = token
                this.notify.next(true);
                this.router.navigate(['/']);
            }
            )
       },(err)=>{console.log(err)});
    }
    logOut(){
       return auth.getAuth().signOut()
    }
    getToken(){
        auth.getAuth().currentUser?.getIdToken()
        .then(token => this.token =token);
        return this.token
    }

    isAuthenticated(){
        return this.token != "";
    }
}