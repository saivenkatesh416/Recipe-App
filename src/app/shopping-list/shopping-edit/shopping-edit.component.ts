import {Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {shoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  /*@Output() ingredientAdded = new EventEmitter<Ingredient>(); removed when shoppinglist service is added*/

  constructor(private slService: shoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);

    this.slService.addIngredient(newIngredient);
    /*this.ingredientAdded.emit(newIngredient); removed when shoppinglist service is added*/
  }
}
