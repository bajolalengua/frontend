import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminstracionRoutingModule } from './adminstracion-routing.module';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EliminarPersonaComponent } from './empleados/eliminar-persona/eliminar-persona.component';
import { CrearPersonaComponent } from './empleados/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './empleados/editar-persona/editar-persona.component';
import { BuscarPersonaComponent } from './buscarpersona/buscar-persona.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmpleadosComponent,
    EliminarPersonaComponent,
    CrearPersonaComponent,
    EditarPersonaComponent,
    BuscarPersonaComponent
  ],
  imports: [
    CommonModule,
    AdminstracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[BuscarPersonaComponent]
})
export class AdminstracionModule { }
