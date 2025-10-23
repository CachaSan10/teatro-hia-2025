// components/CompraEntradas/types.ts
export interface Evento {
  id: number;
  titulo: string;
  fecha: string;
  hora: string;
  teatro: string;
  imagen: string;
  precio: number;
}

export interface Entrada {
  cantidad: number;
  precioUnitario: number;
  gastosGestion: number;
  total: number;
}

export interface DatosPago {
  metodo: 'tarjeta' | 'paypal';
  titular: string;
  numeroTarjeta: string;
  fechaExpiracion: string;
  cvv: string;
}