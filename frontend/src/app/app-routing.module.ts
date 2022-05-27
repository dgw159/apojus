import { ProcessoCrudComponent } from './views/processo-crud/processo-crud.component';
import { ProcessoDeleteComponent } from './components/processo/processo-delete/processo-delete.component';
import { ProcessoUpdateComponent } from './components/processo/processo-update/processo-update.component';
import { ProcessoCreateComponent } from './components/processo/processo-create/processo-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ClienteCrudComponent } from "./views/cliente-crud/cliente-crud.component";
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "clientes",
    component: ClienteCrudComponent
  },
  {
    path: "clientes/create",
    component: ClienteCreateComponent
  },
  {
    path: "clientes/update/:id",
    component: ClienteUpdateComponent
  },
  {
    path: "clientes/delete/:id",
    component: ClienteDeleteComponent
  },
  {
    path: "processos",
    component: ProcessoCrudComponent
  },
  {
    path: "processos/create",
    component: ProcessoCreateComponent
  },
  {
    path: "processos/update/:id",
    component: ProcessoUpdateComponent
  },
  {
    path: "processos/delete/:id",
    component: ProcessoDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
