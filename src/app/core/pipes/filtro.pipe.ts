import { Pipe, PipeTransform } from '@angular/core';
import { Usuarios } from '../../dto/usuarios';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(usuarios: Usuarios[], texto: string): Usuarios[] {
    if (!texto || !usuarios) {
      return usuarios;
    }
    return usuarios.filter(usuario => usuario.cedula.toString().includes(texto.toString()));
  }

}
