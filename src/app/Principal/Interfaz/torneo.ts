export interface Torneo {

    id:number,
    nombre:string,
    usuarios:string,
    fechaInicioVigencia:Date,
    fechaFinalVigencia:Date,
    tipo:string,
    uso:string,
    acomodo:string,
    registroUsuario:number,
    fechaRegistro:Date,
    descripcion:string,
    antecesor:number,
    estado:string;
}
