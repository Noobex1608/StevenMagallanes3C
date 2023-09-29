import { persona } from "./persona";
export class estudiante extends persona{
    private _cursos_matriculados: string;
    public get cursos_matriculados(): string {
        return this._cursos_matriculados;
    }
    public set cursos_matriculados(value: string) {
        this._cursos_matriculados = value;
    }

    constructor(nombre: string, apellido: string, id: number, estado: string, cursos:string){
        super(nombre, apellido, id, estado)
        this._cursos_matriculados = cursos;
    }
    public matriculacion_nuevo_curso(nuevo_curso: string){
        this.cursos_matriculados = nuevo_curso;
    }
    public imprimir_datos(){
        super.imprimir()
        console.log(`curso en el que se encuentra matriculado: ${this.cursos_matriculados}`)
    }
}