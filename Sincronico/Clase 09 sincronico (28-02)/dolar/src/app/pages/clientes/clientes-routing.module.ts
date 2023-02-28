import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';

const routes: Routes = [{ path: '', component: ClientesComponent },
 {path: "Create", component: CreateClienteComponent} ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
