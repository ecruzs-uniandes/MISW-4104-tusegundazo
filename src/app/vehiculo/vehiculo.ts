export class Vehiculo {
    id: number;
    marca: string;
    linea: string;
    referencia: string;
    modelo: number;
    color: string;
    imagen: string;

    constructor(
        id: number,
        marca: string,
        linea: string,
        referencia: string,
        modelo: number,
        color: string,
        imagen: string

      ) {
        this.id = id;
        this.marca = marca;
        this.linea = linea;
        this.referencia = referencia;
        this.modelo = modelo;
        this.color = color;
        this.linea = linea;
        this.imagen = imagen;
      }
}
