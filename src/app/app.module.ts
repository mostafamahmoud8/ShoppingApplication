import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RecipeModule } from './recipes/recipe.module';
import { ShoppingListService } from './services/shopping.service';
import { AppRouterModule } from './app-router.module';
import { RecipeService } from './services/recipe.service';
import { DatabaseService } from './services/Database.service';
import { AuthService } from './services/auth.service';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ShoppingListModule } from './shopping-list/shoppinglist.module';
import { CoreModule } from './core/core.module';
import { AuthInterceptor } from './services/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouterModule,
    RecipeModule,
    ShoppingListModule,
    SharedModule,
    AuthModule,
    CoreModule
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DatabaseService,
    AuthService,
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
