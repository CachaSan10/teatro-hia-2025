// components/Cartelera/Cartelera.tsx
'use client';

import { useState } from 'react';
import { Evento } from './types';
import EventoCard from './EventoCard';
import EmptyState from './EmptyState';
import { eventosData, getEventosPorCategoria } from './data/eventosData';

export default function Cartelera() {
  const [eventos] = useState<Evento[]>(eventosData);
  const [categoriaActiva, setCategoriaActiva] = useState<string>('todos');

  const categorias = [
    { id: 'todos', label: 'Todos' },
    { id: 'teatro', label: 'Teatro' },
    { id: 'musica', label: 'Música' },
    { id: 'danza', label: 'Danza' },
    { id: 'comedia', label: 'Comedia' },
    { id: 'opera', label: 'Ópera' },
  ];

  const eventosFiltrados = getEventosPorCategoria(
    categoriaActiva === 'todos' ? undefined : categoriaActiva
  );

  const handleComprarEntradas = (evento: Evento) => {
    console.log('Comprar entradas para:', evento.titulo);
    alert(`Redirigiendo a compra de entradas para: ${evento.titulo}`);
  };

  const handleFiltrarCategoria = (categoria: string) => {
    setCategoriaActiva(categoria);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black  py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white  mb-4">
            Cartelera
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Descubre los próximos eventos y espectáculos en nuestro teatro
          </p>
        </div>

        {/* Filtros por Categoría */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categorias.map((categoria) => (
            <button
              key={categoria.id}
              onClick={() => handleFiltrarCategoria(categoria.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                categoriaActiva === categoria.id
                  ? 'bg-[#E6192B] text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {categoria.label}
            </button>
          ))}
        </div>

        {/* Contador de eventos */}
        <div className="text-center mb-6">
          <p className="text-white">
            Mostrando {eventosFiltrados.length} de {eventos.length} eventos
          </p>
        </div>

        {/* Grid de Eventos */}
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {eventosFiltrados.map((evento) => (
            <EventoCard
              key={evento.id}
              evento={evento}
              onComprarEntradas={handleComprarEntradas}
            />
          ))}
          
          {/* Estado vacío */}
          {eventosFiltrados.length === 0 && <EmptyState />}
        </div>
      </div>
    </div>
  );
}