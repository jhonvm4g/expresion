import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../components/models/formulario';
import { GeneralService } from '../shared/services/general.service';
import { environment } from 'src/environments/environments';
import { LoaderService } from '../shared/services/spinner.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'gc-login',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})

export class AuthenticationComponent implements OnInit {
  title = 'gestion-conocimiento';

  constructor(
    private router: Router,
    private http: HttpClient,
    private serviceGeneral: GeneralService,
    private loadingService: LoaderService,
    private toastr: ToastrService,
  ) {

  }

  usuario = new Usuario();

  ngOnInit() {

  }

  login =()=> {

    this.loadingService.setLoading(true);
    this.serviceGeneral.login(this.usuario).subscribe({
      next: (value) => {
        if (value.result > 0) {
          debugger
          let idUsuario = value.result;
          localStorage.setItem('userName', this.usuario.userName);
          localStorage.setItem('idUsuario', idUsuario);

          const objeto = {
            UserName: environment.UserName,
            Password: environment.Password
          }

          this.serviceGeneral.obtenerLoginToken(objeto).subscribe({
            next: (value) => {
              if (value != null && value != "") {
                this.loadingService.setLoading(false);
                localStorage.setItem('loginToken', value);
                console.log(value);
                this.router.navigate(['home']);
              }
            },
          },);
        }
        else if(value.message == "Error"){
          this.loadingService.setLoading(false);
          this.toastr.error('Usuario y/o Contraseña incorrecta.');
        }
      },
    },);
  }

  registrar =()=> {
    this.router.navigate(['registrar']);
  }
}
