// components/Cartelera/data/eventosData.ts
import { Evento } from '../types';

export const eventosData: Evento[] = [
  {
    id: 1,
    titulo: "Hamlet",
    fecha: "2024-11-25",
    hora: "20:30h",
    imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6Mlcdgp7brseSvYgMhN0lwNa9uL7SJuu7b5q-aXlSTFGcIvquaBwnqMu0nQjz8MYHghAB-fvY9NeqK9uBtK0JuB8yKYvTKofbfPSJPEcDEY0c4Ua7QEmIWQoT3p0PQtbpjsv43fnx4l4qxgKoCRrH2ATDlEvkP325eqiZgSjwgTNe9OZ-vtOcvuS8AFyb_crKfLeTiJM3d-E6ZTa5muwm5hJfw1LddzjzKzzkYsQh245ADdGTYwkXEfOZdjUdNuDjhQk-ECuteYwb",
    alt: "Escena de la obra Hamlet con actores en el escenario.",
    sala: "Sala Principal",
    precio: 25,
    categoria: "teatro",
    descripcion: "La tragedia clásica de Shakespeare sobre la venganza y la locura."
  },
  {
    id: 2,
    titulo: "Concierto de Jazz Acústico",
    fecha: "2024-11-26",
    hora: "19:00h",
    imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhV0WFic5DFMDqLa8nKxJZrQchU9394dlwkIsOm4Em-xQsGGnfgJAIa9QRuvW0OfTsP99cVInHJ0o1wJ8frAulyM1mJ4ddtiUNr4odZ8ek9U1H6xMGqpqhScTOgclyAMT3Snihl_I0KWEQFt5-O7x8jBbOqsOigkRVdtk9W8b_lgAmVlTcRTAOGVWQ31dq_U1iM-_0h9rm-jtu4DUnDgYzCHnCPguCC2j8G7bcXsr89zDjD9RSLyNkv6gHG5sWSjXSODk31a2p0tHr",
    alt: "Músico tocando un saxofón en un concierto de jazz.",
    sala: "Sala Intima",
    precio: 20,
    categoria: "musica",
    descripcion: "Una noche mágica con los mejores standards de jazz en formato acústico."
  },
  {
    id: 3,
    titulo: "El Cascanueces",
    fecha: "2024-12-01",
    hora: "21:00h",
    imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxbIEVy9oQMJMmxQMBtMlPgZ1wp0AZh8gWwb2mXZ_I4iKEsOYFTJpOSVIMqqIozAwAisc5FHpgyf3yvbhlNBkz9raKuIyF-lgiEyBxtjFKHdjK6FADIbInfvjBV5G2hhvv4MqzeGPXSS2WYBoDf5vf7zDmhv25ZDh9xt0Pu-xaKrPp3Nn0cAkUwZLhcNEOxDWUGZQBJbCU2JpcxdF6GA0R-ZmmwTNZrUM-0DfBomIDQ_YN7j_RQyKRzw1Me_EmB1y2fdPE5QTOn9N1",
    alt: "Bailarines de ballet interpretando El Cascanueces en el escenario.",
    sala: "Sala Principal",
    precio: 30,
    categoria: "danza",
    descripcion: "El ballet clásico más famoso de Tchaikovsky en una producción espectacular."
  },
  {
    id: 4,
    titulo: "Comedia Improvisada",
    fecha: "2024-12-05",
    hora: "22:00h",
    imagen: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=500&h=300&fit=crop",
    alt: "Comediantes improvisando en el escenario.",
    sala: "Sala Experimental",
    precio: 15,
    categoria: "comedia",
    descripcion: "Risas garantizadas con nuestro equipo de comediantes improvisados."
  },
  {
    id: 5,
    titulo: "Ópera: La Traviata",
    fecha: "2024-12-10",
    hora: "20:00h",
    imagen: "https://images.unsplash.com/photo-1574235828370-57c13bc808b8?w=500&h=300&fit=crop",
    alt: "Cantantes de ópera en el escenario.",
    sala: "Sala Principal",
    precio: 40,
    categoria: "opera",
    descripcion: "La obra maestra de Verdi interpretada por la Orquesta Sinfónica Nacional."
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