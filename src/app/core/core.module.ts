import { NgModule } from "@angular/core";
import { AppRouterModule } from "../app-router.module";
import { SharedModule } from "../shared/shared.module";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
   declarations:[
    HomeComponent,
    HeaderComponent
   ],
   imports:[
       AppRouterModule,
       SharedModule
   ],
   exports:[
       HeaderComponent
   ]
   
})
export class CoreModule{}