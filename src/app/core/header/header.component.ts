import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DatabaseService } from '../../services/Database.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 // @Output() featureselected = new EventEmitter<string>() 
  isAuthenticated :boolean = false;
  constructor(private dataService:DatabaseService,private router:Router,private authserivce:AuthService) { }

  ngOnInit(): void {
    this.authserivce.notify.subscribe((responce:boolean)=>{
      this.isAuthenticated = responce;
    });
  }
  OnSave(){
     this.dataService.StoreRecipes().subscribe((responce:object)=>{
       console.log(responce);
     })
  }
  OnFetch(){
    this.dataService.SetRecipes();
  }
  onLogOut(){
     this.authserivce.logOut().then(()=>{
          this.authserivce.notify.next(false);
          this.authserivce.token='';
          this.router.navigate(['/signin']);
     },(err)=>{console.log(err)})
  }
  /*OnSelect(feature:string)
  {
    this.featureselected.emit(feature);
  }*/

}
