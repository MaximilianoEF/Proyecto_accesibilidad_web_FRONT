import { Tecnica } from "./Tecnica";

export interface Criterio {
    "codigo": string;
    "descripcion": string;
    "tecnicas": Tecnica[];
}