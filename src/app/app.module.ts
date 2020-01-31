import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PlantillaComponent } from "./plantilla/plantilla.component";
import { InicioSesionComponent } from "./components/inicio-sesion/inicio-sesion.component";
import { PaginaPrincipalComponent } from "./components/pagina-principal/pagina-principal.component";
import { EncabezadoComponent } from "./plantilla/encabezado/encabezado.component";
import { PiePaginaComponent } from "./plantilla/pie-pagina/pie-pagina.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ResaltarDirective } from './core/directives/resaltar.directive';
import { FiltroPipe } from './core/pipes/filtro.pipe';
import { InicioSesionService } from './core/interceptors/inicioSesion/inicio-sesion.service';

@NgModule({
  declarations: [
    AppComponent,
    PlantillaComponent,
    InicioSesionComponent,
    PaginaPrincipalComponent,
    EncabezadoComponent,
    PiePaginaComponent,
    ResaltarDirective,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InicioSesionService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
