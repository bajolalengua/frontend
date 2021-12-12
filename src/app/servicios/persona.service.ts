import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloPersona } from '../modelos/persona.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url="http://localhost:3000";
  token:string='';
  constructor(private http: HttpClient, 
    private seguridad: SeguridadService){
      this.token=this.seguridad.ObtenerToken();
    }

  ObtenerPersonas(): Observable<ModeloPersona[]>{
    return this.http.get <ModeloPersona[]>(`${this.url}/empleados`);

  }

  CrearPersonas(persona:ModeloPersona): Observable<ModeloPersona>{
    return this.http.post <ModeloPersona>(`${this.url}/empleados`,persona,{
      headers:new HttpHeaders({
        "Authorization":`Bearer${this.token}`
      })
    })

  }

  ActualizarPersonas(persona:ModeloPersona): Observable<ModeloPersona>{
      return this.http.put <ModeloPersona>(`${this.url}/empleados`,persona,{
        headers:new HttpHeaders({
          "Authorization":`Bearer${this.token}`
        })
      })

  }

  EliminarPersonas(id:string): Observable<any>{
    return this.http.delete (`${this.url}/empleados/${id}`,{
      headers:new HttpHeaders({
        "Authorization":`Bearer${this.token}`
      })
    })

  }
}