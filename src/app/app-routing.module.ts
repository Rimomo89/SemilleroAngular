import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InicioSesionComponent } from "./components/inicio-sesion/inicio-sesion.component";
import { PaginaPrincipalComponent } from "./components/pagina-principal/pagina-principal.component";
import { PlantillaComponent } from "./plantilla/plantilla.component";
import { EncabezadoComponent } from "./plantilla/encabezado/encabezado.component";
import { PiePaginaComponent } from "./plantilla/pie-pagina/pie-pagina.component";

const routes: Routes = [
  { path: "login", component: InicioSesionComponent },
  { path: "principal", component: PaginaPrincipalComponent },
  { path: "plantilla", component: PlantillaComponent },
  { path: "encabezado", component: EncabezadoComponent },
  { path: "piepagina", component: PiePaginaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
