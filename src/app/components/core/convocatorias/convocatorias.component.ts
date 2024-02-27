import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  position: string;
  nombre: string;
  fechaInicio: string;
  fechaFIn: string;
  Postular: string;
  // eliminar: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: "1", nombre: "Hydrogen", fechaInicio: "16/02/2024", fechaFIn: "16/02/2024", Postular: ""},
  {position: "1", nombre: "Hydrogen", fechaInicio: "16/02/2024", fechaFIn: "16/02/2024", Postular: ""},
  {position: "1", nombre: "Hydrogen", fechaInicio: "16/02/2024", fechaFIn: "16/02/2024", Postular: ""},
  {position: "1", nombre: "Hydrogen", fechaInicio: "16/02/2024", fechaFIn: "16/02/2024", Postular: ""},
  {position: "1", nombre: "Hydrogen", fechaInicio: "16/02/2024", fechaFIn: "16/02/2024", Postular: ""},
  {position: "1", nombre: "Hydrogen", fechaInicio: "16/02/2024", fechaFIn: "16/02/2024", Postular: ""},
];

@Component({
  selector: 'gc-convocatorias',
  templateUrl: './convocatorias.component.html',
  styleUrls: ['./convocatorias.component.css'],
})
export class ConvocatoriasComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumns: string[] = ['position', 'nombre', 'fechaInicio', 'fechaFIn', 'Postular'];
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

  logOut = () => {
    this.router.navigate(['login']);
  }

  regresar = () => {
    this.router.navigate(['home']);
  }

  formulario = () => {
    this.router.navigate(['form']);
  }



}
