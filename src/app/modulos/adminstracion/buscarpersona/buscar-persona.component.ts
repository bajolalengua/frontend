import { Component, OnInit } from '@angular/core';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-buscar-persona',
  templateUrl: './buscar-persona.component.html',
  styleUrls: ['./buscar-persona.component.css']
})
export class BuscarPersonaComponent implements OnInit {

  listadoRegistros: ModeloPersona[]=[];
  constructor(
    private personaServicio: PersonaService
  ) { }

  ngOnInit(): void {
  }
  
    ObtenerListadoPersonas(){
    this.personaServicio.ObtenerPersonas().subscribe((datos: ModeloPersona[]) => {
      this.listadoRegistros= datos;
    })
    }
  
}
