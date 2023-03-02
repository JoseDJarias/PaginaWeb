import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    ClientesComponent,
    CreateClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MaterialModule
  ]
})
export class ClientesModule { }
