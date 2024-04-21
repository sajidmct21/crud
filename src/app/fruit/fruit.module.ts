import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitRoutingModule } from './fruit-routing.module';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    FruitRoutingModule,
    ReactiveFormsModule
  ]
})
export class FruitModule { }
