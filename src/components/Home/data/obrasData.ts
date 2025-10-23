// components/Home/data/obrasData.ts
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
    titulo: "El fantasma de la ópera",
    temporada: "Octubre - Diciembre",
    imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6HoeyfSzNnJhu7qExSdTyt7TUHxSLAiwa1ttkkhvLhLgZEWupACV1kahXGl0tFrXXnoCF9wmx2BC0rBL5mZQdcaCr6nnvzfCtDSukCFbbPO3515_QiZ60Al2Zw-spU-RsULOIaID4MZHpHdBwIxd4BlhqEt_jb_2BtvZib1xItkxLt_rDp7H7BkwlAMjgYdBhvXxdGXYFgfe3_9feTGiM6PdvTpWepFQJd2kVE3SDo6LcEy8HzUElgpQzBjLndZ2ycrKKzJIMRg10",
    alt: "Poster for The Phantom of the Opera"
  },
  {
    id: 2,
    titulo: "Los miserables",
    temporada: "Noviembre - Enero",
    imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHKNODqgyG5IwL70VtgAiE3yY0cqHt0SvUcjxkmXUIyli8792QU_YN5CCxhOPB8MsyMdoMbTvYQEv2CfMQk_fQq8iOIW1YcciiQ1HXkOUIV_htmsMdWMoq6BDmqiZgo6RqPGIE6e7zbP7XlA8BwQPWkzNtjLORmcONy51ZVuYAKVE6d8EmB7f7qCO4ELj0Bf6VUVmEBfeGZ_ZfqtYcCx3Aty5EPbDg-k9MP3IISiKf5cDdEXzeCKqLuMOphxD5SVGeM3DOZxVTbGKs",
    alt: "Poster for Les Misérables"
  },
  {
    id: 3,
    titulo: "El rey león",
    temporada: "Todo el año",
    imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHP8F2Wzjog9AhzUarPJDD9dnitaIIgc1ldkZ4u7oS0L4lOHkJoW60wO2yWWCFccNscX7Fts3do7a6Yq4Lt-mC1zGS4k9ZZmrdIjYLEjqjM_0-aFL5uOF-Yxw-FG03FNISjIPGdt9PyQD1KiHzcYWr4yV3DpjOPOh_VVmgcwTG34fQgShCFNBr2l8QJAvBivAiwRRv-gqLKCwNjl6FioitYB2tupxyNw8bH9Rzww3QO-zho2dVskVAAv4tr3k44Ucms9BwSxyt4Jan",
    alt: "Poster for The Lion King"
  },
  {
    id: 4,
    titulo: "Hamlet",
    temporada: "Funciones especiales en diciembre",
    imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjLVGS_uTWKd0UF5V4r2avg52wQxg0N2zgHt1kKI-Mq_8uMMVYwWjKr9Wcdq7-Mzd77K0Su1HjTfsuIgkzfcHfiI7HEe0DuWhO0SOs5vbbF1Q6UXalff7sCRLirwqAME3ij-tvkSgbo_4ZotqaOtxQut2QBoO0-UQV9Ci_D_mw5wUfqZHasNf92xyCAvB95qQKm8sQpGRPJRop6uib4u3sv5dGkLiLR0R_F9BCAUojPA6Wg5gQueJXD3wwzreL-DaqzU9zNuV6rfo3",
    alt: "Poster for Hamlet"
  }
];