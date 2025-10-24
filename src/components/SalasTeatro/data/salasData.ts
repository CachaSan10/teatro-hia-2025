
export interface Caracteristica {
  icono: string;
  texto: string;
}

export interface Sala {
  id: number;
  nombre: string;
  descripcion: string;
  imagenPrincipal: string;
  altImagen: string;
  caracteristicas: Caracteristica[];
  botonTexto: string;
  layout: 'normal' | 'reverso';
}

export const salasData: Sala[] = [
  {
    id: 1,
    nombre: "Sala Principal",
    descripcion: "Un espacio majestuoso con acústica de clase mundial, ideal para grandes producciones, óperas y conciertos sinfónicos. Su diseño clásico evoca la grandeza de los teatros históricos.",
    imagenPrincipal: "https://lh3.googleusercontent.com/aida-public/AB6AXuDor4U7_LUGvJqHylmssqw0_oMKi4VwTIuxAIqnHOh8y0Q_zzzvVmbR_i1wulAngpiukDhrMxzP4QfioTgfzFs8FShYNcBZ9k5eOeqQtg5u8uaGcfg2d_5vUHfE4v5C_cq5mNazUYQ-xhMSr2lL9LdVlXL8lD0TOPzQu9ytfKrBdEKsRJx0LSFjeFdj80cnZCf6aBNfy33ykPO8ah8gSi3gwPzB-FDmoYssx1FNC6isZXhx1mtcay-g7Qfkw6sVVjb4pT3SLKK6pTzJ",
    altImagen: "Vista panorámica de la Sala Principal, mostrando el majestuoso escenario y las butacas.",
    layout: 'normal',
    botonTexto: "Ver Tour Virtual",
    caracteristicas: [
      { icono: "group", texto: "Capacidad: 1200 personas" },
      { icono: "theater_comedy", texto: "Escenario: Italiano" },
      { icono: "volume_up", texto: "Acústica: Excelente" }
    ]
  },
  {
    id: 2,
    nombre: "Sala Experimental",
    descripcion: "Un espacio íntimo y versátil, perfecto para obras de vanguardia, teatro experimental y performances. Su diseño de caja negra permite una total libertad creativa.",
    imagenPrincipal: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7fZsoS0vEI1-Uf0Adzk1ZjZtIatL--i7fTdEGt8Oz3ztzlIjw0LIX6mqPEegUJgtvInC_ZspBFUuI7CvSWsZ0mljr78Ary1qXeu1UnwaZkGcWkZgRq7z8ZEqK_Fq7giaw1q5-mqWRXvB4LAsqBEDaKidEVfCD8ZqsE43hWtcZq5-PKMQ0zFnyTltkAzTJ32QmojY03cf2prlUjzTTLqb_QaNrRYUiSpuCTMrQbyFMWznLQF3nLKBmNHOwZ89GGttScAMpFhAL7cjT",
    altImagen: "Vista de la Sala Experimental, un espacio oscuro e íntimo con iluminación flexible.",
    layout: 'reverso',
    botonTexto: "Explorar Mapa de Asientos",
    caracteristicas: [
      { icono: "group", texto: "Capacidad: 250 personas" },
      { icono: "theater_comedy", texto: "Escenario: Caja Negra" },
      { icono: "lightbulb", texto: "Iluminación: Profesional" }
    ]
  },
  {
    id: 3,
    nombre: "Foyer del Teatro",
    descripcion: "Un espacio elegante y acogedor para recibir al público antes de la función y durante los intermedios. Ideal para cócteles, exposiciones y pequeños eventos sociales.",
    imagenPrincipal: "https://lh3.googleusercontent.com/aida-public/AB6AXuCq1c1KasldDRga3qlXlRpZEu-0huE_Rbp-r5_TU5RBobDow8Md9uTpCIJmKkF_dGhAzy42mjFF0B4mc5QFeadnIrYFxG-IVWzDqAufI8WhZboFb2bBcDU1NbE__JFKab5bgfP_RxGcdZ7a_678QcfmCKLvFg3yTW28ODmXp6_qMe8-iq55Xth7CwzIdFh0nRBU4kz6e2HDY6Sx4EnPi5q-cJ4_ejHNKLF_GbZ50mN9qMsWD1pPK7izsXLJR_mbz1lR3tqqnK5xtDxF",
    altImagen: "Vista del Foyer del Teatro, un espacio elegante con una barra de bar.",
    layout: 'normal',
    botonTexto: "Consultar Disponibilidad",
    caracteristicas: [
      { icono: "group", texto: "Capacidad: 300 personas (de pie)" },
      { icono: "local_bar", texto: "Servicio de Bar" },
      { icono: "restaurant", texto: "Catering Disponible" }
    ]
  }
];