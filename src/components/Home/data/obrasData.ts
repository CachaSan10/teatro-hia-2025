export interface Obra {
  id: number;
  titulo: string;
  temporada: string;
  imagen: string;
  alt: string;
}

export const obrasData: Obra[] = [
  {
    id: 1,
    titulo: "SIMIOTECA ‘De Mozart a Bad Bunny’",
    temporada: "Solamente Diciembre",
    imagen: "/images/eventos/simioteca.jpg",
    alt: "Poster simioteca"
  },
  {
    id: 2,
    titulo: "Concierto de Vilma Palma",
    temporada: "Solamente Noviembre",
    imagen: "/images/eventos/vilma_palma.png",
    alt: "Poster de vilma palma"
  },
  {
    id: 3,
    titulo: "Fuego y Pasion",
    temporada: "Solamente Diciembre",
    imagen: "/images/eventos/fuego_pasion.png",
    alt: "Poster fuego y pasion"
  },
  {
    id: 4,
    titulo: "¿Quien es quien?",
    temporada: "Noviembre - Diciembre",
    imagen: "/images/eventos/quien_es_quien.png",
    alt: "Poster de quien es quien"
  }
];