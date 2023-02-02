import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputTextModule} from "primeng/inputtext";
import { InputNumberModule} from "primeng/inputnumber";
import { DropdownModule } from "primeng/dropdown";
import { AppComponent } from './app.component';
import {SelectButtonModule} from "primeng/selectbutton";
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    ButtonModule,
    BrowserModule,
    DropdownModule,
    InputTextModule,
    InputNumberModule,
    SelectButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
