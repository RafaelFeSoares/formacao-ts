import { Imprimivel } from "../decorators/imprimivel.js";

export function imprimir(...objetos: Imprimivel[]) {
    for(let objeto of objetos) {
        console.log(objeto.paraTexto());
    }
}