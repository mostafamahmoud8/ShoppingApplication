import {NgModule} from '@angular/core'
import { FormsModule } from '@angular/forms';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
   declarations:[
    ShoppingListComponent,
    ShoppingEditComponent,  
   ],
   imports:[   
    FormsModule,
   ],
})
export class ShoppingListModule { }