// app/comprar-entradas/page.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import CompraEntradaEvento from '@/components/CompraEntradas/CompraEntradaEvento';

export default function ComprarEntradasPage() {
  const searchParams = useSearchParams();

  // Obtener los datos del evento desde los query params
  const eventoProps = {
    id: Number(searchParams.get('id') || 0),
    titulo: decodeURIComponent(searchParams.get('titulo') || 'Evento no especificado'),
    fecha: decodeURIComponent(searchParams.get('fecha') || 'Fecha no especificada'),
    hora: decodeURIComponent(searchParams.get('hora') || 'Hora no especificada'),
    sala: decodeURIComponent(searchParams.get('sala') || 'Teatro Principal'),
    imagen: decodeURIComponent(searchParams.get('imagen') || ''),
    precio: parseFloat(searchParams.get('precio') || '0')
  };

  return <CompraEntradaEvento {...eventoProps} />;
}