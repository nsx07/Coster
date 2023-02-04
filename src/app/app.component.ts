import { Cloth, ClothBase, AdditionalValues, OPERATIONS } from './models/ClothBase';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  addValues : AdditionalValues[] = []
  formCoster! : FormGroup
  result : string = ""


  operations = [
    {label : "Divisão" , code : OPERATIONS.DIVISION},
    {label : "Menos" , code : OPERATIONS.MINUS},
    {label : "Mais" , code : OPERATIONS.PLUS},
    {label : "Vezes" , code : OPERATIONS.TIMES},
  ]

  constructor(
    private formBuilder : FormBuilder
  ) {}

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.formCoster = this.formBuilder.group({
      yealdPeerKg : ["", Validators.compose([Validators.required, Validators.min(1)])],
      costRoll : ["", Validators.compose([Validators.required, Validators.min(1)])],
      units : ["", Validators.compose([Validators.required, Validators.min(1)])],
      yeald : ["", Validators.compose([Validators.required, Validators.min(1)])],
    })
  }

  calculate() {
    const form : Cloth = this.formCoster.value
    const cloth = new ClothBase(form)
    cloth.calculatePrice(this.addValues)
    this.result = `R$ ${cloth.cloth.basePrice?.toFixed(2)}`
  }

  addField() {
    let field = {id: this.addValues.length, name: "", cost: 0, typeOperation : OPERATIONS.PLUS}
    this.addValues.push(field)
  }

  removeField(item : AdditionalValues) {
    this.addValues = this.addValues.filter(value => value.id != item.id)
  }

}
