import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    // ingredientsUpdated = new EventEmitter<Ingredient[]>()
    ingredientsUpdated:Subject<Ingredient[]> = new Subject();
    startEditing:Subject<number> = new Subject();

    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    getIngredients(){
       return this.ingredients.slice();
    }

    getIngredient(index:number){
        return this.ingredients[index];
    }

    AddIngredient(ingredient:Ingredient)
    {
        this.ingredients.push(ingredient);
        this.ingredientsUpdated.next(this.ingredients);
    }

    UpdateIngredient(index:number,ingredient:Ingredient)
    {
        this.ingredients[index]=ingredient;
        this.ingredientsUpdated.next(this.ingredients);
    }
    DeleteIngredient(index:number)
    {
        this.ingredients.splice(index,1);
        this.ingredientsUpdated.next(this.ingredients);
    }

    AddIngredients(ingredients:Ingredient[])
    {
        this.ingredients.push(...ingredients);
        this.ingredientsUpdated.next(this.ingredients);
    }
}