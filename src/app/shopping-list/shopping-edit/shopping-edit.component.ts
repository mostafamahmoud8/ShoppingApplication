import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShoppingListService } from 'src/app/services/shopping.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('form') slForm:NgForm | undefined;
  subscribtion:Subscription = new Subscription();
  editMode:boolean=false;
  editItemIndex:any;
  editItem:Ingredient | undefined;
  constructor(private shliService:ShoppingListService) {   
  }

  ngOnInit(): void {
    this.subscribtion = this.shliService.startEditing.subscribe((index:number)=>{
      this.editMode=true;
      this.editItemIndex=index;
      this.editItem=this.shliService.getIngredient(index);
      this.slForm?.setValue({
        'name':this.editItem.name,
        'amount':this.editItem.amount 
      });
    });
  } 

  onSubmit(form:NgForm)
  {
    const ingrident = new Ingredient(form.value.name,form.value.amount);
    if(this.editMode){
        this.shliService.UpdateIngredient(this.editItemIndex,ingrident);
        this.editMode = false;
    }else{
      this.shliService.AddIngredient(ingrident);
    }
    form.reset();
  }
  Cancel(){
    this.slForm?.reset();
    this.editMode = false;
  }
  onDelete(){
    this.shliService.DeleteIngredient(this.editItemIndex);
    this.Cancel()
  }
  ngOnDestroy(): void {
      this.subscribtion.unsubscribe();
  }

}
