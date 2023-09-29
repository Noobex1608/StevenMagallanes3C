import { personal_servicio } from "./personal_servicio"
import { empleado } from "./empleados"
import { persona } from "./persona"
import { estudiante } from "./estudiantes"
import { profesor } from "./profesores"

const personal_servicio1 = new personal_servicio("Juan", "Vera",132415789,"Soltero",2017, 17, "Biblioteca")
const estudiante1 = new estudiante("Carlos","Cevallos",134278542,"Soltero","Lengua")
const profesor1 = new profesor("David", "Benavides",16478932,"Soltero",2018,19,"Lengua y Literatura")

//
//estudiante1.imprimir_datos()
profesor1.imprimir_datos()
//personal_servicio1.imprimir_datos()
//personal_servicio1.traslado_seccion("Conserje")
//personal_servicio1.imprimir_datos()

//estudiante1.matriculacion_nuevo_curso("matematicas")
//estudiante1.imprimir_datos()

profesor1.cambio_departamento("Ciencias")
profesor1.imprimir_datos()