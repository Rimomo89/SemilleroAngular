import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { InicioSesion } from 'src/app/dto/inicio-sesion';

@Injectable({
  providedIn: "root"
})
export class InicioSesionService {
  constructor(private http: HttpClient) { }

  iniciarSesion(valor1: any): Observable<InicioSesion> {
    valor1.token = "HOLA12345FDGJOJO79808098";
    console.log("Estoy capturando los valores del formulario ", valor1);
    return this.http.post<InicioSesion>("http://my-json-server.typicode.com/brayan1119/curso-angular/login", valor1.subscribe(datos => {
      console.log('datos', datos);
    },
      error => {
        console.error(error);
      },
      () => { console.log('console'); }


    ));

  }
}