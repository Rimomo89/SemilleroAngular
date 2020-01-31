import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InicioSesionComponent } from "./components/inicio-sesion/inicio-sesion.component";
import { PaginaPrincipalComponent } from "./components/pagina-principal/pagina-principal.component";
import { PlantillaComponent } from "./plantilla/plantilla.component";
import { EncabezadoComponent } from "./plantilla/encabezado/encabezado.component";
import { PiePaginaComponent } from "./plantilla/pie-pagina/pie-pagina.component";
import { AutenticadoGuard } from './core/guard/autenticado.guard';


const routes: Routes = [
  { path: '', redirectTo: 'plantilla', pathMatch: 'full' },
  { path: 'login', component: InicioSesionComponent },
  {
    path: 'plantilla', component: PlantillaComponent, canActivate: [AutenticadoGuard], children: [{
      path: '', redirectTo: 'principal', pathMatch: 'full'
    },
    {
      path: 'principal', component: PaginaPrincipalComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
