import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe=new Recipe();
  id:any;
  isAuthenticated:boolean = false
  constructor(private route:ActivatedRoute,private authservice:AuthService,private recipeService:RecipeService,private router :Router) { }

  ngOnInit(): void {
     this.route.params.subscribe((params:Params)=>{
       this.id= +params['id']
       this.recipe = this.recipeService.getRecipe(this.id)
     })
     this.isAuthenticated=this.authservice.isAuthenticated();
  }
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'],{relativeTo:this.route});
  }

  /*AddIngredients(){
   this.recipeService.addIngredientsToshoppingList((this.recipe.ingredients as Ingredient[]))
  }*/
}
