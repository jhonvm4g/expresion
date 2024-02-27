import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ExpresionInteresUsuario } from '../../models/formulario';
import { GeneralService } from 'src/app/shared/services/general.service';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'gc-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})

export class RegistrarComponent implements OnInit {

  expresionInteresUsuario = new ExpresionInteresUsuario();
  validarCampos: boolean = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private serviceGeneral: GeneralService,
    private toastr: ToastrService,
    private loadingService: LoaderService
  ) {

  }

  ngOnInit() {

  }

  validarCamposRequeridos = () => {
    if(this.expresionInteresUsuario.nombreUsuario == "" || this.expresionInteresUsuario.apellidosUsuario  == "" || this.expresionInteresUsuario.idTipoDocumento == 0 || 
       this.expresionInteresUsuario.numeroDocumento == "" || this.expresionInteresUsuario.emailContacto == "" || this.expresionInteresUsuario.password == "" || 
       this.expresionInteresUsuario.nombreEmpresa == "" || this.expresionInteresUsuario.direccion == "" || this.expresionInteresUsuario.emailEmpresa == "" || this.expresionInteresUsuario.telefono == "")
    {
      this.toastr.error("Todos los campos son obligatorios.")
      return;
    }
    this.validarCampos = true;
  }


  registrarUsuario = () => {

    this.validarCamposRequeridos();
    if(this.validarCampos)
    { 
      this.expresionInteresUsuario.idEstadoRegistro = 1;
      this.expresionInteresUsuario.fechaRegistro = new Date;
      this.expresionInteresUsuario.fechaEnvioNotificacion = new Date;
      this.loadingService.setLoading(true);
      this.serviceGeneral.registrarUsuario(this.expresionInteresUsuario).subscribe({
        next: (value) => {
          if (value != null && value != "") {
            this.loadingService.setLoading(false);
            this.expresionInteresUsuario = new ExpresionInteresUsuario();
            this.toastr.success('Se registro exitosamente!')
          }
        },
      });
    }
  }

  login = () => {
    this.router.navigate(['login']);
  }

  regresar = () => {
    this.router.navigate(['login']);
  }
}
