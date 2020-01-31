import { Component, OnInit } from '@angular/core';
import { PaginaPrincipalService } from '../../app/services/pagina-principal/pagina-principal.service';
import { Usuarios } from '../../dto/usuarios';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {

  arreglo: Usuarios[];
  cedula: number;

  constructor(private diligenciar: PaginaPrincipalService) { }


  llenarTabla() {
    this.diligenciar.llenarTabla().subscribe(datos => {
      this.arreglo = datos;
      console.log('datos', datos.sort());
    },
      error => {
        console.error(error);
      },
      () => {
        console.log("complete");
        this.arreglo = this.arreglo.sort((a, b) => a.primerNombre.localeCompare(b.primerNombre));
      }
    );
  }


  ngOnInit() {
    this.llenarTabla();
  }


}
