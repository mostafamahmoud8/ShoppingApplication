import {NgModule} from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeRouterModule } from './recipe-router.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
   declarations:[
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
   ],
   imports:[
    CommonModule,   
    ReactiveFormsModule,
    RecipeRouterModule,
    SharedModule,
   ],
})
export class RecipeModule { }