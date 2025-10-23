// components/Home/data/artistasData.ts
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
    nombre: "Juan Pérez",
    especialidad: "Virtuoso del piano",
    imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaEfasMtF6zngzIBLBQgezJE_8G2juP_zapQ0XXwOO5W-zw7wtTQkoL1J6qK7WqZzusxX-Kq0hdgD46mmsVn8F7NYKZ9kJl7RKtFoLfA9ysc5xBdAh9bDgexB8ThHxNOiG8LGB8i-kBSBg_q4q9-vBpZxT9D0phOaPDnB1Jo2B_ixrIewW_Vlj8AjLR1HI4ykgkHkpY_bAHufDrCx91231476gCtjCw_cXpQ5SGKPwamE2hxVYl1YdC5n6bKUVsGgdUQXrts2S8q4i",
    alt: "A male pianist playing a grand piano"
  },
  {
    id: 2,
    nombre: "María García",
    especialidad: "La voz del jazz contemporáneo",
    imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEfwNEzhw9PvVl1LfPi92F_OM6V3eCQ9hFIXKSLrM61tj1GwqVkMsoKu6jTl9IDIYOmYL7ZnPU4F32ZBx5BWyFVyrsvYdhcbCnwCVJ6Dn_OkrxCG0HHJzSYZPrzgjUhUhhl_diwHLh1-0c59Zij5PEItQkaKcXbnJAYLTVgSiKw-ps_gXaXo_TzbQIO507wo2tltnZ6xdbqB3821gAe2hP8aJ_IqTlNSLAQ2ar7IpTYuEW_3pxI2UyLR5xmPOnU6jfYI6zLe0Q_v1F",
    alt: "A female jazz singer performing on stage"
  },
  {
    id: 3,
    nombre: "Carlos Rodríguez",
    especialidad: "Maestro del violín",
    imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuASSQEZ3QL_abAoW5GIpNQRg3B_39asM4i3AAR2VqQZ0DCO9yBLrgWnWTyQy6NBdk_NrHQe1zlf-TwVKgz2fpjXlZ2qkPgMyd6apGHW0-Ayg4-3JZApjCBqWluVkK7jmCx4YQ-_DNk9d2AtshelPWguX42sjdU8Lm-Vf9Yh--7zcCQwEoqXfphNM-WHlDIcm1UFZ22pPKcW94timF-ZI9iADr0B3s3ybCF6R67rRXp3TBMDdNE_HdVlxLVaZeNzKBbksaFB4E8xapsj",
    alt: "A male violinist playing with passion"
  },
  {
    id: 4,
    nombre: "Ana López",
    especialidad: "Soprano lírica",
    imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4pzapyvydDEqBJrPiU2-qUdwtNEeEIPB4AZrCrliV6yWUH22gMztnoT-gDJ0GEM-PP_Kt3ilfBcCFp27pdlwJi0dnRu18IfHjeQ0IYEGjcgK0MpdyuF2Vl8ivfpEi7G8TylryiRBtnNocVV_2_iYeGhjIfAgA5UcWcHNHg9xPPgXtIzhnIWCCGTw947s96ntqBvLfCSnpgS2aVlAOGkTXTQzuoY_QGSIVTfh-ysaAL1oQJckkzL8oM0umYfvkfq90Sb_nXG04Q2Y4",
    alt: "A silhouette of a female singer on stage"
  }
];