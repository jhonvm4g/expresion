export class Formluario {

    idExpresionInteresDetalle: number;
    idExpresionInteresExperiencia: number;
    idProceso: number;
    nombreCliente: string;
    nombreProyecto: string;
    idTipoExperiencia: number;
    descripcionServicio: string;
    tipoInfraestructura: string;
    cui: string;
    idTipologia: number;
    descripcionTipologia: string;
    criterio1: number;
    criterio2: number;
    criterio3: number;
    criterio1MontoInversion: number;
    criterio1FechaAdjudicacion: string;
    criterio1Facturacion: number;
    criterio1Composicion: string;
    criterio1Contactos: string;
    criterio2FechaInicio: string;
    criterio2FechaCulminacion: string;
    criterio2NumeroHabitantes: number;
    criterio2Componentes: string;
    criterio3Caudal: number;
    criterio3ModuloA: number;
    criterio3ModuloB: number;
    criterio3ModuloC: number;
    criterio3Componentes: string;
    idEstadoRegistro: number;
    fechaRegistro: string;
    idUsuarioRegistro: number;
    fechaModificacion: string;
    idUsuarioModificacion: number;
    idUsuario: number;

    constructor() {

        this.idExpresionInteresDetalle = 0;
        this.idExpresionInteresExperiencia = 0;
        this.idProceso = 0;
        this.nombreCliente = "";
        this.nombreProyecto = "";
        this.idTipoExperiencia = 0;
        this.descripcionServicio = "";
        this.tipoInfraestructura = "";
        this.cui = "";
        this.idTipologia = 0;
        this.descripcionTipologia = "";
        this.criterio1 = 0;
        this.criterio2 = 0;
        this.criterio3 = 0;
        this.criterio1MontoInversion = 0;
        this.criterio1FechaAdjudicacion = "";
        this.criterio1Facturacion = 0;
        this.criterio1Composicion = "";
        this.criterio1Contactos = "";
        this.criterio2FechaInicio = "";
        this.criterio2FechaCulminacion = "";
        this.criterio2NumeroHabitantes = 0;
        this.criterio2Componentes = "";
        this.criterio3Caudal = 0;
        this.criterio3ModuloA = 0;
        this.criterio3ModuloB = 0;
        this.criterio3ModuloC = 0;
        this.criterio3Componentes = "";
        this.idEstadoRegistro = 0;
        this.fechaRegistro = "";
        this.idUsuarioRegistro = 0;
        this.fechaModificacion = "";
        this.idUsuarioModificacion = 0;
        this.idUsuario = 0;
    }
}

export class Usuario {

    userName: string;
    password: string;

    constructor() {

        this.userName = "";
        this.password = "";
    }
}

export class ExpresionInteresUsuario {

    idUsuario: number;
    nombreUsuario: string;
    apellidosUsuario: string;
    password: string;
    nombreEmpresa: string;
    idTipoDocumento: number;
    numeroDocumento: string;
    direccion: string;
    emailEmpresa: string;
    emailContacto: string;
    telefono: string;
    idEstadoRegistro: number;
    fechaRegistro: Date;
    fechaModificacion: Date;
    fechaEnvioNotificacion: Date;
    idEstado: number;
    fechaConfirmacion: Date;

    constructor() {

        this.idUsuario = 0;
        this.nombreUsuario = "";
        this.apellidosUsuario = "";
        this.password = "";
        this.nombreEmpresa = "";
        this.idTipoDocumento = 0;
        this.numeroDocumento = "";
        this.direccion = "";
        this.emailEmpresa = "";
        this.emailContacto = "";
        this.telefono = "";
        this.idEstadoRegistro = 0;
        this.fechaRegistro = new Date;
        this.fechaModificacion = new Date;
        this.fechaEnvioNotificacion = new Date;
        this.idEstado = 0;
        this.fechaConfirmacion = new Date;
    }
}

export class Paises {

    idPais: number;
    nombre: string;
    nombreENG: string;
    idEstadoRegistro: number;

    constructor() {

        this.idPais = 0;
        this.nombre = "";
        this.nombreENG = "";
        this.idEstadoRegistro = 0;
    }
}

export class Experiencias {

    idExpresionInteresExperiencia: number;
    nombreCliente: string;
    nombreProyecto: string;
    criterio1: number;
    criterio2: number;
    criterio3: number;
    fechaRegistro: string;
    idUsuarioRegistro: number;


    constructor() {

        this.idExpresionInteresExperiencia = 0;
        this.nombreCliente = "";
        this.nombreProyecto = "";
        this.criterio1 = 0;
        this.criterio2 = 0;
        this.criterio3 = 0;
        this.fechaRegistro = "";
        this.idUsuarioRegistro = 0;
    }
}