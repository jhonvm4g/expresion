import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Formluario, Paises } from '../../models/formulario';
import { GeneralService } from 'src/app/shared/services/general.service';

declare var $: any;

@Component({
  selector: 'gc-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  @Input() inputCriterio1_montoInversion: boolean = true;
  @Input() inputCriterio1_fechaAdjudicacion: boolean = true;
  @Input() inputCriterio1_facturacionServicio: boolean = true;
  @Input() inputCriterio1_composicion: boolean = true;
  @Input() inputCriterio1_personasContacto: boolean = true;

  @Input() tipoDescripcion: boolean = true;
  @Input() inputCriterio1_extranjera: boolean = false;

  @Input() inputCriterio2_fechaInicio: boolean = true;
  @Input() inputCriterio2_fechaCulminacion: boolean = true;
  @Input() inputCriterio2_numeroHabitantes: boolean = true;
  @Input() inputCriterio2_componentes: boolean = true;

  @Input() inputCriterio3_caudal: boolean = true;
  @Input() inputCriterio3_modulos: boolean = true;
  @Input() inputCriterio3_componentes: boolean = true;

  formulario = new Formluario();
  chkCriterio1: any;
  chkCriterio2: any;
  chkCriterio3: any;
  panelOpenState = false;
  opcionSeleccionado: string = "0";
  
  idPeru: number = 13;
  toppings = new FormControl('');
  toppingList: string[] = ['a', 'b', 'c'];
  modulosSeleccionados: any;

  listPaises: Paises[] = [];
  idUsuario: number = 0;
  idExpresionInteresBack: number = 0;

  validarDatosGenerales: boolean = false;
  validarCriterio1: boolean = false;
  validarCriterio2: boolean = false;
  validarCriterio3: boolean = false;

  constructor(
    private toastr: ToastrService,
    private http: HttpClient,
    private router: Router,
    private serviceGeneral: GeneralService
  ) {

    let idUsuarioLocal = localStorage.getItem('idUsuario');
    
    if(idUsuarioLocal != null){
      this.idUsuario = Number(idUsuarioLocal);
    }
  }

  ngOnInit() {

    this.formulario.idTipoExperiencia = 0;
    this.listarPaises();
  }

  activarCriterio1 = (event: any) => {

    this.chkCriterio1 = event.checked;

    if (this.chkCriterio1) {
      this.inputCriterio1_montoInversion = false;
      this.inputCriterio1_fechaAdjudicacion = false;
      this.inputCriterio1_facturacionServicio = false;
      this.inputCriterio1_composicion = false;
      this.inputCriterio1_personasContacto = false;
    }
    else {
      this.formulario.criterio1MontoInversion = 0;
      this.formulario.criterio1FechaAdjudicacion = "";
      this.formulario.criterio1Facturacion = 0;
      this.formulario.criterio1Composicion = "";
      this.formulario.criterio1Contactos = "";

      this.inputCriterio1_montoInversion = true;
      this.inputCriterio1_fechaAdjudicacion = true;
      this.inputCriterio1_facturacionServicio = true;
      this.inputCriterio1_composicion = true;
      this.inputCriterio1_personasContacto = true;
    }
  }

  activarCriterio2 = (event: any) => {

    this.chkCriterio2 = event.checked;

    if (this.chkCriterio2) {
      this.inputCriterio2_fechaInicio = false;
      this.inputCriterio2_fechaCulminacion = false;
      this.inputCriterio2_numeroHabitantes = false;
      this.inputCriterio2_componentes = false;
    }
    else {
      this.formulario.criterio2FechaInicio = "";
      this.formulario.criterio2FechaCulminacion = "";
      this.formulario.criterio2NumeroHabitantes = 0;
      this.formulario.criterio2Componentes = "";

      this.inputCriterio2_fechaInicio = true;
      this.inputCriterio2_fechaCulminacion = true;
      this.inputCriterio2_numeroHabitantes = true;
      this.inputCriterio2_componentes = true;
    }
  }

  activarCriterio3 = (event: any) => {

    this.chkCriterio3 = event.checked;

    if (this.chkCriterio3) {
      this.inputCriterio3_caudal = false;
      this.inputCriterio3_modulos = false;
      this.inputCriterio3_componentes = false;
    }
    else {
      this.formulario.criterio3Caudal = 0;
      this.formulario.criterio3ModuloA = 0;
      this.formulario.criterio3ModuloB = 0;
      this.formulario.criterio3ModuloC = 0;
      this.formulario.criterio3Componentes = "";

      this.inputCriterio3_caudal = true;
      this.inputCriterio3_modulos = true;
      this.inputCriterio3_componentes = true;
    }
  }



  selectTipologia = (event: any) => {

    this.formulario.idTipologia = event.value;

    if (event.value == 3) {
      this.tipoDescripcion = false;
    }
    else {
      this.tipoDescripcion = true;
    }
  }

  validarCamposGenerales = () => {

    if (this.formulario.nombreCliente == "" || this.formulario.nombreProyecto == "" || this.formulario.idTipoExperiencia == 0 || this.formulario.tipoInfraestructura == "" ||
      this.formulario.cui == "" || this.formulario.idTipologia == 0) {
      this.toastr.error("Debe completar los campos de Datos Generales.");
      return;
    }

    if(this.formulario.idTipologia == 3){
      if(this.formulario.descripcionTipologia == ""){
        this.toastr.error("Debe completar la descripción.");
        return;
      }
    }

    debugger
    if(this.chkCriterio1 == undefined && this.chkCriterio2 == undefined && this.chkCriterio3 == undefined){
      this.toastr.error("Debe completar al menos un criterio.");
      return;
    }
    this.validarDatosGenerales = true;
  }

  validarCamposCriterio1 = () => {

    if(this.chkCriterio1){
      if (this.formulario.criterio1MontoInversion == 0 || this.formulario.criterio1FechaAdjudicacion == "" || this.formulario.criterio1Facturacion == 0 || 
          this.formulario.criterio1Composicion == "" || this.formulario.criterio1Contactos == "") {
          this.toastr.error("Debe completar los campos del criterio 1.");
          return;
      }
      this.validarCriterio1 = true;
    }
  }

  validarCamposCriterio2 = () => {

    if(this.chkCriterio2){
      if (this.formulario.criterio2FechaInicio == "" || this.formulario.criterio2FechaCulminacion == "" || this.formulario.criterio2NumeroHabitantes == 0 || this.formulario.criterio2Componentes == "") {
        this.toastr.error("Debe completar los campos del criterio 2.");
        return;
      }
      this.validarCriterio2 = true;
    }
  }

  validarCamposCriterio3 = () => {
    debugger

    if (this.chkCriterio3) {
      //Creamos la lista con la seleccion multiple del campo modulos del criterio 3
      for (let index = 0; index < this.modulosSeleccionados.length; index++) {
        const element = this.modulosSeleccionados[index];
        if (element == 'a') { this.formulario.criterio3ModuloA = 1 }
        if (element == 'b') { this.formulario.criterio3ModuloB = 2 }
        if (element == 'c') { this.formulario.criterio3ModuloC = 3 }
      }
    }

    if(this.chkCriterio3){
      if (this.formulario.criterio3Caudal == 0 || this.formulario.criterio3Componentes == "" || this.modulosSeleccionados.length == 0) {
        this.toastr.error("Debe completar los campos del criterio 3.");
        return;
      }
      this.validarCriterio3 = true;
    }
  }

  registrarFormulario = () => {

    this.validarCamposGenerales();
    this.validarCamposCriterio1();
    this.validarCamposCriterio2();
    this.validarCamposCriterio3();

    if(this.validarDatosGenerales && ( this.validarCriterio1 || this.validarCriterio2 || this.validarCriterio3) ){


   
      //Asignamos los flag para saber que criterios estan activados cuando se quiera editar
      this.formulario.criterio1 = this.chkCriterio1 ? 1 : 0;
      this.formulario.criterio2 = this.chkCriterio2 ? 1 : 0;
      this.formulario.criterio3 = this.chkCriterio3 ? 1 : 0;
  
      this.formulario.idUsuario =  this.idUsuario;    

      this.formulario.idProceso = 13;//Proceso de prueba


      this.formulario.idEstadoRegistro = 1;

      let idExpresionInteresBack = localStorage.getItem('idExpresionInteresBack');

      this.idExpresionInteresBack = Number(idExpresionInteresBack);

      this.formulario.idExpresionInteresExperiencia = (this.idExpresionInteresBack == 0) ? 0:this.idExpresionInteresBack;

      this.serviceGeneral.registrarFormulario(this.formulario).subscribe({
        next: (value) => {

          if (value != null && value != "") {
            
              localStorage.setItem('idExpresionInteresBack', value.result);
              this.toastr.success("Se registro exitosamente!");
              this.router.navigate(['home']);
          }
        },
      });


    }
  }

  listarPaises = () => {

    this.serviceGeneral.listarPaises().subscribe({
      next: (value) => {
        if (value != null && value != "") {
          this.listPaises = value.result;
        }
      },
    });
  }

  selectExperiencia = (event: any) => {
    this.inputCriterio1_extranjera = event.checked;
    this.formulario.idTipoExperiencia = this.inputCriterio1_extranjera ? this.idPeru : 0;
  };

  regresar = () => {
    this.router.navigate(['home']);
  }
}
