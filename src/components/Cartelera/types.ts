export interface Evento {
    id:number;
    titulo:string;
    fecha: string;
    hora:string;
    imagen:string;
    alt: string;
    descripcion?:string;
    precio:number;
    sala:string;
    categoria: 'teatro' | 'musica' | 'danza' | 'comedia' | 'opera' | 'otros';
}

export interface EventoCardProps {
    evento: Evento;
    onComprarEntradas: (evento: Evento) => void;
}