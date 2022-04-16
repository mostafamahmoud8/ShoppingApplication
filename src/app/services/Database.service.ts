import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { Recipe } from "../recipes/recipe-model";
import { AuthService } from "./auth.service";
import { RecipeService } from "./recipe.service";

@Injectable()

export class DatabaseService{
    API_ENDPOINT = "https://recipe-book-7bebd-default-rtdb.firebaseio.com/recipe.json" 
    
    constructor(private httpclient:HttpClient,private auth:AuthService,private recipeService:RecipeService){

    }
    StoreRecipes(){
        const token = this.auth.getToken();
        return this.httpclient.put(this.API_ENDPOINT,this.recipeService.getRecipes())
    }
    SetRecipes(){
        const token = this.auth.getToken();
        return this.httpclient.get<Recipe[]>(this.API_ENDPOINT).pipe(map(responce=>{
            const recipes:Recipe[]=[]
            for(let recipe of responce){
                if(recipe.ingredients == null){
                    recipe.ingredients = [];
                }
                recipes.push(recipe);
            }
            return recipes;
        })).subscribe((recipes)=>{
            console.log(recipes)
            this.recipeService.setRecipes(recipes);
        })
    }
}