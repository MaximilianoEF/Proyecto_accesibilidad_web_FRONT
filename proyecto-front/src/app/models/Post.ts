import { Pauta } from "./Pauta";

export interface Post {
    "codigo": string;
    "detalle": string;
    "pautas": Pauta[];
}