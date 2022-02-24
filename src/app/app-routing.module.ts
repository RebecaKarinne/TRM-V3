import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home/home.component';
import { TecnologiaListarComponent } from './views/tecnologia/tecnologia-listar/tecnologia-listar/tecnologia-listar.component';

const routes: Routes = [
  {
    path: "tecnologias", loadChildren: () =>
      import('./views/tecnologia/tecnologia-listar/tecnologia-listar.module').then(modulo => modulo.TecnologiaListarModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
