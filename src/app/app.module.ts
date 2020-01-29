import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PlantillaComponent } from "./plantilla/plantilla.component";
import { InicioSesionComponent } from "./components/inicio-sesion/inicio-sesion.component";
import { PaginaPrincipalComponent } from "./components/pagina-principal/pagina-principal.component";
import { EncabezadoComponent } from "./plantilla/encabezado/encabezado.component";
import { PiePaginaComponent } from "./plantilla/pie-pagina/pie-pagina.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PlantillaComponent,
    InicioSesionComponent,
    PaginaPrincipalComponent,
    EncabezadoComponent,
    PiePaginaComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
