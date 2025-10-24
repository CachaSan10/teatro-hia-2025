// components/CompraEntradas/types.ts
export interface Evento {
  id: number;
  titulo: string;
  fecha: string;
  hora: string;
  sala: string;
  imagen: string;
  precio: number;
  categoria: 'teatro' | 'musica' | 'danza' | 'comedia' | 'opera' | 'otros';
}

export interface Entrada {
  cantidad: number;
  precioUnitario: number;
  total: number;
}

export interface DatosPago {
  metodo: 'tarjeta' | 'paypal';
  titular: string;
  numeroTarjeta: string;
  fechaExpiracion: string;
  cvv: string;
}