// components/Cartelera/data/eventosData.ts
import { Evento } from '../types';

export const eventosData: Evento[] = [
  {
    id: 1,
    titulo: "SIMIOTECA ‘De Mozart a Bad Bunny’",
    fecha: "2025-12-05",
    hora: "21:00h",
    imagen: "/images/eventos/simioteca.jpg",
    alt: "Cartelera de simioteca.",
    sala: "Sala Principal",
    precio: 30000,
    categoria: "comedia",
    descripcion: "En su nuevo unipersonal, Leandro Serodino combina monólogos incisivos, música en vivo y debate con el público. Un espectáculo desenfadado y profundo que cuestiona sin piedad la evolución – o retroceso – de la música argentina actual."
  },
  {
    id: 2,
    titulo: "Concierto de Vilma Palma",
    fecha: "2025-11-22",
    hora: "19:00h",
    imagen: "/images/eventos/vilma_palma.png",
    alt: "Músicos de la banda Vilma Palma",
    sala: "Sala Intima",
    precio: 50000,
    categoria: "musica",
    descripcion: "Una noche mágica con la mejor banda de Rock Argentino."
  },
  {
    id: 3,
    titulo: "BALLET CLÁSICO DE SAN PETERSBURGO / El Lago de los Cisnes – versión completa",
    fecha: "2025-11-14",
    hora: "21:00h",
    imagen: "/images/eventos/lago_cisnes.png",
    alt: "Bailarines de ballet de San Petersburgo",
    sala: "Sala Principal",
    precio: 40000,
    categoria: "danza",
    descripcion: " El Ballet de San Petersburgo es conocido por su compromiso con las raíces del ballet clásico, manteniendo viva la tradición y la belleza del arte en cada actuación. Si buscas una experiencia única y emotiva, no te pierdas la oportunidad de ver al Ballet de San Petersburgo en acción."
  },
  {
    id: 4,
    titulo: "¿QUIEN ES QUIEN?",
    fecha: "2025-11-07",
    hora: "22:00h",
    imagen: "/images/eventos/quien_es_quien.png",
    alt: "Comediantes improvisando en el escenario.",
    sala: "Sala Experimental",
    precio: 25000,
    categoria: "teatro",
    descripcion: "Quién es Quién? de Audrey Schebat es una comedia fresca y aguda que se adentra en la vida de una pareja moderna atrapada en la rutina. Ante la espera de una pareja de amigos a cenar, se desatan un torrente de situaciones hilarantes y reflexiones profundas sobre el amor, la comunicación y la búsqueda de la felicidad. A través de diálogos ingeniosos y un ritmo dinámico, la obra explora cómo lo cotidiano puede transformarse en extraordinario con un toque de locura."
  },
  {
    id: 5,
    titulo: "Fuego y Pasion",
    fecha: "2025-12-12",
    hora: "20:00h",
    imagen: "/images/eventos/fuego_pasion.png",
    alt: "Cantantes de ópera en el escenario.",
    sala: "Sala Principal",
    precio: 45000,
    categoria: "danza",
    descripcion: "El reconocido bailarín Hernán Piquín regresa a los escenarios con “Fuego y Pasión” un espectáculo de ballet y teatro que promete emocionar y cautivar al público."
  },
    {
    id: 6,
    titulo: "La Máquina Tanguera",
    fecha: "2025-12-11",
    hora: "20:00h",
    imagen: "/images/eventos/la_maquina_tanguera.png",
    alt: "Cantantes de ópera en el escenario.",
    sala: "Foyer del Teatro",
    precio: 50000,
    categoria: "danza",
    descripcion: "Un show ágil, emocionante y auténtico, con bailarines magistrales que conquistan al público en cada función. Pensado para todas las edades, sin fronteras ni géneros, es una experiencia única que emociona y sorprende. Viví la magia, la pasión y la innovación de una artista que transformó el tango a nivel internacional"
  }
];

// Función auxiliar para obtener eventos por categoría
export const getEventosPorCategoria = (categoria?: string): Evento[] => {
  if (!categoria || categoria === 'todos') {
    return eventosData;
  }
  return eventosData.filter(evento => evento.categoria === categoria);
};

// Función para buscar eventos
export const buscarEventos = (termino: string): Evento[] => {
  return eventosData.filter(evento => 
    evento.titulo.toLowerCase().includes(termino.toLowerCase()) ||
    evento.descripcion?.toLowerCase().includes(termino.toLowerCase())
  );
};