import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../material/material.module";
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "../routing/routing.module";

@NgModule({
  declarations:[],
  imports: [],
  exports:[
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    CommonModule,
    FormsModule
  ]
})
export class CommonAppModule {}
