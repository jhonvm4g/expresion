import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { GeneralService } from 'src/app/shared/services/general.service';
import { Experiencias } from '../../models/formulario';


@Component({
  selector: 'gc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumns: string[] = ['idExpresionInteresExperiencia', 'nombreCliente', 'nombreProyecto', 'nombrePais', 'criterio1', 'criterio2', 'criterio3','acciones'];

  userName: any;

  listExperiencias: any;
  idUsuario: number = 0;

  experiencia = new Experiencias();

  constructor(
    private toastr: ToastrService,
    private http: HttpClient,
    private router: Router,
    public dialog: MatDialog,
    private serviceGeneral: GeneralService
  ) {
    this.userName = localStorage.getItem('userName');
    let idUsuarioLocal = localStorage.getItem('idUsuario');
    
    if(idUsuarioLocal != null){
      this.idUsuario = Number(idUsuarioLocal);
    }
  }

  ngOnInit() {
    this.listarExperiencias();
    this.paginator._intl.itemsPerPageLabel = 'proyectos por página';
  }


  listarExperiencias = () => {
    this.experiencia.idUsuarioRegistro = this.idUsuario;
    this.serviceGeneral.listarExperiencias(this.experiencia).subscribe({
      next: (value) => {
        if (value != null && value != "") {
          // this.listExperiencias = value.result;

          this.listExperiencias = new MatTableDataSource<Experiencias>(value.result);
  
          // console.log(this.listExperiencias)
        }
      },
    });

    
  }


  ngAfterViewInit() {
    this.listExperiencias.paginator = this.paginator;
  }


  nuevoProyecto = () => {
    this.router.navigate(['form']);
  }

  misProcesos = () => {
    this.router.navigate(['proceso']);
  }

  misPostulaciones = () => {
    this.router.navigate(['convocatoria']);
  }

  continuar = () => {
    this.router.navigate(['preliminar']);
  }



  logOut = () => {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  regresar = () => {
    this.router.navigate(['home']);
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      if(`${result}`){
        this.router.navigate(['version-final']);
      }
    });
  }


}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogContentExampleDialog {}