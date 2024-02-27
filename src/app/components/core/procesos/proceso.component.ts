import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  position: string;
  nombre: string;
  Nro: string;
  fecha: string;
  Descargar: string;
  // eliminar: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: "1", nombre: "PTAR MALDONADO", Nro: "7856", fecha: "16/02/2024", Descargar: ""},
  {position: "2", nombre: "PTAR MALDONADO", Nro: "4587", fecha: "16/02/2024", Descargar: ""},
  {position: "3", nombre: "PTAR MALDONADO", Nro: "1567", fecha: "16/02/2024", Descargar: ""},
  {position: "4", nombre: "PTAR MALDONADO", Nro: "5641", fecha: "16/02/2024", Descargar: ""},
  {position: "5", nombre: "PTAR MALDONADO", Nro: "2587", fecha: "16/02/2024", Descargar: ""},
  {position: "6", nombre: "PTAR MALDONADO", Nro: "5744", fecha: "16/02/2024", Descargar: ""},
];
@Component({
  selector: 'gc-roceso',
  templateUrl: './proceso.component.html',
  styleUrls: ['./proceso.component.css'],
})
export class ProcesoComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumns: string[] = ['position', 'nombre', 'Nro', 'fecha', 'Descargar'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  

  constructor(
    private toastr: ToastrService,
    private http: HttpClient,
    private router: Router,
  ) {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {

    this.paginator._intl.itemsPerPageLabel = 'proyectos por página';
  }

  misProcesos = () => {
    this.router.navigate(['proceso']);
  }

  misPostulaciones = () => {
    this.router.navigate(['convocatoria']);
  }

  nuevoProyecto = () => {
    this.router.navigate(['form']);
  }

  logOut = () => {
    this.router.navigate(['login']);
  }

  regresar = () => {
    this.router.navigate(['home']);
  }


}
