import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { <%= classify(className) %>RoutingModule } from './<%= dasherize(className) %>-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    <%= classify(className) %>RoutingModule,
  ],
  declarations: [],
  entryComponents: [],
})
export class <%= classify(className) %>Module {}
