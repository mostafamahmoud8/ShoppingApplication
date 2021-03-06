import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { AuthGaurd } from "../services/auth.gaurd";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes.component";

const routes : Routes =[
    {path:'',component:RecipesComponent,children:[
        {path:'',component:RecipeStartComponent},
        {path:'new',component:RecipeEditComponent,canActivate:[AuthGaurd]},
        {path:':id',component:RecipeDetailComponent},
        {path:':id/edit',component:RecipeEditComponent,canActivate:[AuthGaurd]}
    ]},    
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule],
    providers:[AuthGaurd]
})
export class RecipeRouterModule{

}