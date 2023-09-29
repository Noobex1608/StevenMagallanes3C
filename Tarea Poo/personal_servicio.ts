import { empleado } from "./empleados";
export class personal_servicio extends empleado{
    private _seccion_asignada: string;
    public get seccion_asignada(): string {
        return this._seccion_asignada;
    }
    public set seccion_asignada(value: string) {
        this._seccion_asignada = value;
    }
    constructor(nombre: string, apellido: string, id: number, estado: string, year_incorporation: number, numero_despacho: number, seccion: string){
        super(nombre, apellido, id, estado, year_incorporation, numero_despacho)
        this._seccion_asignada = seccion;
    }
    public traslado_seccion(traslado:string){
        this.seccion_asignada = traslado;
    }

    public imprimir_datos(){
        super.imprimir()
        console.log(`Seccion asignada: ${this.seccion_asignada}`)
    }
}