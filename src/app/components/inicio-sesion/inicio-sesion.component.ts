import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { InicioSesionService } from "../../app/services/inicio-sesion/inicio-sesion.service";

@Component({
  selector: "app-inicio-sesion",
  templateUrl: "./inicio-sesion.component.html",
  styleUrls: ["./inicio-sesion.component.scss"]
})
export class InicioSesionComponent implements OnInit {
  inicioSesionForm: FormGroup;
  nombre = "Ricardo";

  constructor(private iniciarSesion: InicioSesionService) {}

  ngOnInit() {
    this.CrearFormulario();
  }

  CrearFormulario() {
    this.inicioSesionForm = new FormGroup({
      nombreUsuario: new FormControl(null, [
        Validators.required,
        Validators.min(2)
      ]),
      clave: new FormControl(null, Validators.required)
    });
  }

  EnviarFormulario() {
    console.log("formulario", this.inicioSesionForm.value);
    this.iniciarSesion.iniciarSesion(this.inicioSesionForm.value);
  }
}
