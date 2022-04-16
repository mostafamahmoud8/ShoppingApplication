import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
  //@Output() recipeWasSelected =new EventEmitter<Recipe>();
  recipes:Recipe[]=[]
  subscribtion:Subscription = new Subscription();
  constructor(private RecipeService:RecipeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes=this.RecipeService.getRecipes();
    this.subscribtion = this.RecipeService.recipesChanged.subscribe((recipes:Recipe[])=>{
     this.recipes = recipes;
    })
    
  }
  /*SelectedRecipe(recipe:Recipe)
  {
     this.recipeWasSelected.emit(recipe)
  }*/
  NewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }
  ngOnDestroy(): void {
      this.subscribtion.unsubscribe()
  }

}
