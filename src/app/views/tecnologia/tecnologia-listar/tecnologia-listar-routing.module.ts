import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnologiaListarComponent } from './tecnologia-listar/tecnologia-listar.component';

const routes: Routes = [
  {path: "", component: TecnologiaListarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TecnologiaListarRoutingModule { }
