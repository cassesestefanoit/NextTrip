export interface Paquete {
  id: number;
  titulo?: string;       // opcional
  destino?: string;      // opcional
  descripcion: string;
  precio: string | number;
  duracion?: string;
  imagen: string;
  destacado?: boolean;
}
