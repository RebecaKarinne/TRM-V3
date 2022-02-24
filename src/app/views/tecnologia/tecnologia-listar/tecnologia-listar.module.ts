import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnologiaListarRoutingModule } from './tecnologia-listar-routing.module';
import { TecnologiaListarComponent } from './tecnologia-listar/tecnologia-listar.component';

import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";


@NgModule({
  declarations: [
    TecnologiaListarComponent
  ],
  imports: [
    CommonModule,
    TecnologiaListarRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class TecnologiaListarModule { }
