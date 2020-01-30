import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../../../dto/usuarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginaPrincipalService {

  constructor(private http: HttpClient) { }

  llenarTabla(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>("http://my-json-server.typicode.com/brayan1119/curso-angular/usuarios");
  }
}
