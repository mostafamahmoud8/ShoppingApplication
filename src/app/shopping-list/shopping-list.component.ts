import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingListService } from '../services/shopping.service';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients:Ingredient[]=[];
  subscribtion:Subscription = new Subscription();
  constructor( private ShLiService:ShoppingListService ) { }

  ngOnInit(): void {
    this.ingredients= this.ShLiService.getIngredients();
    this.subscribtion=this.ShLiService.ingredientsUpdated.subscribe((ingredients:Ingredient[])=>{
       this.ingredients = ingredients;
    }) 
  }
  OnEdit(index:number){
     this.ShLiService.startEditing.next(index);
  }
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

}
