import { persona } from "./persona";
export class empleado extends persona{
    private _year_incorporation: number;
    public get year_incorporation(): number {
        return this._year_incorporation;
    }
    public set year_incorporation(value: number) {
        this._year_incorporation = value;
    }
    private _numero_despacho: number;
    public get numero_despacho(): number {
        return this._numero_despacho;
    }
    public set numero_despacho(value: number) {
        this._numero_despacho = value;
    }

    public constructor(nombre: string, apellido: string, id: number, estado: string, year_incorporation: number, numero_despacho: number){
        super(nombre, apellido, id, estado)
        this._year_incorporation = year_incorporation;
        this._numero_despacho = numero_despacho;
    }   

    public reasignacion_despacho(reasignacion: number){
        this.numero_despacho = reasignacion;
    }
    imprimir() {
        super.imprimir();
        console.log(`año de incorporacion: ${this.year_incorporation}`);
        console.log(`numero de despacho: ${this.numero_despacho}`);
    }

}