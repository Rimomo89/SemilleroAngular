import { Component, OnInit } from '@angular/core';
import { PaginaPrincipalService } from '../../app/services/pagina-principal/pagina-principal.service';
import { Usuarios } from '../../dto/usuarios';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {

  private arreglo: Usuarios[];

  constructor(private diligenciar: PaginaPrincipalService) { }

  llenarTabla() {
    this.diligenciar.llenarTabla().subscribe(datos => {
      console.log('datos', datos);
      this.arreglo = datos;
    },
      error => {
        console.error(error);
      },
      () => { console.log('console'); }
    );
  }

  ngOnInit() {
    this.llenarTabla();
  }


}
