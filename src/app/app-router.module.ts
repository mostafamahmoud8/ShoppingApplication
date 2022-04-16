import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./core/home/home.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const routes : Routes =[
    {path:'',component:HomeComponent},
    {path:'recipes',loadChildren:()=> import('./recipes/recipe.module').then(mod => mod.RecipeModule)},
    {path:'shoppinglist',component:ShoppingListComponent},

]

@NgModule({
    imports:[RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
    exports:[RouterModule]
})
export class AppRouterModule{

}