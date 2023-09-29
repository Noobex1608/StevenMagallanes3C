export class persona{
    public nombre: string;

    public apellido: string;

    public num_identifacion: number;

    public estado_civil: string;

    public constructor(nombre: string, apellido: string, id: number, estado_civil: string){

        this.nombre= nombre;
        this.apellido = apellido;
        this.num_identifacion = id;
        this.estado_civil = estado_civil;

    }
    public cambio_estado_civil(nuevo_estado:string){
        this.estado_civil = nuevo_estado;
    }
    imprimir() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellidos: ${this.apellido}`);
        console.log(`Numero de Identificacion: ${this.num_identifacion}`);
        console.log(`Estado Civil: ${this.estado_civil}`);
    }
}

