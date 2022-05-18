import { Actor } from "./actor";

export class Pelicula {
    public id: string;
    public nombre: string;
    public tipo: string;
    public fechaEstreno: string;
    public cantidadPublico: number;
    public foto: string;
    public actor: Actor = new Actor();
}