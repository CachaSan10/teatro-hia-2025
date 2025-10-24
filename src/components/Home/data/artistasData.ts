export interface Artista {
  id: number;
  nombre: string;
  especialidad: string;
  imagen: string;
  alt: string;
}

export const artistasData: Artista[] = [
  {
    id: 1,
    nombre: "Leandro Serodino",
    especialidad: "Virtuoso musico y productor musical",
    imagen: "/images/artistas/leandro_serodino.png",
    alt: "A male pianist playing a grand piano"
  },
  {
    id: 2,
    nombre: "Hernam Piquin",
    especialidad: "Bailarín y coreográfo",
    imagen: "/images/artistas/hernam_piquin.png",
    alt: "A female jazz singer performing on stage"
  },
  {
    id: 3,
    nombre: "Luis Brandoni",
    especialidad: "Actor",
    imagen: "/images/artistas/luis_brandoni.png",
    alt: "A male violinist playing with passion"
  },
  {
    id: 4,
    nombre: "Mora Godoy",
    especialidad: "Bailarina y coreógrafa",
    imagen: "/images/artistas/mora_godoy.webp",
    alt: "A silhouette of a female singer on stage"
  }
];