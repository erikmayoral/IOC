export interface Elemento {
    id: number;
    nombre: string;
    cantidad: number;
    // ? Implica que es opcional. Define en qué lugar está el producto de la despensa.
    ubicacion?: string;
}