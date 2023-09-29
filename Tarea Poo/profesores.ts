import { empleado } from "./empleados";
export class profesor extends empleado{
    private _departamento_asignado: string;
    public get departamento_asignado(): string {
        return this._departamento_asignado;
    }
    public set departamento_asignado(value: string) {
        this._departamento_asignado = value;
    }
    public constructor(nombre: string, apellido: string, id: number, estado: string, year_incorporation: number, numero_despacho: number, departamento_asignado: string){
        super(nombre, apellido, id, estado, year_incorporation, numero_despacho)
        this._departamento_asignado = departamento_asignado;
    }
    public cambio_departamento(nuevo_departamento: string){
        this.departamento_asignado = nuevo_departamento;
    }
    public imprimir_datos(){
        super.imprimir()
        console.log(`Departamento asignado: ${this.departamento_asignado}`) 
    }
}