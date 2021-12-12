import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPersonaComponent } from './buscarpersona/buscar-persona.component';
import { CrearPersonaComponent } from './empleados/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './empleados/editar-persona/editar-persona.component';

const routes: Routes = [
   {
    path: 'crear-persona',
    component : CrearPersonaComponent
  },
  {
    path: 'editar-persona/:id',
    component : EditarPersonaComponent
  },

  {
    path: 'buscar-persona/:id',
    component : BuscarPersonaComponent
  },

    {
    path: 'buscarpersona',
    component : BuscarPersonaComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminstracionRoutingModule { }
