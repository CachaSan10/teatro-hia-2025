// components/Cartelera/EventoCard.tsx
'use client';

import { useState } from 'react';
import { EventoCardProps } from './types';
import Link from 'next/link';

export default function EventoCard({ evento, onComprarEntradas }: EventoCardProps) {
  const [descripcionExpandida, setDescripcionExpandida] = useState(false);
  
  const formatFecha = (fecha: string) => {
    return new Date(fecha).toLocaleDateString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    });
  };

  const eventoParams = {
    id: evento.id.toString(),
    titulo: encodeURIComponent(evento.titulo),
    fecha: encodeURIComponent(evento.fecha),
    hora: encodeURIComponent(evento.hora),
    sala: encodeURIComponent(evento.sala || 'Teatro Principal'),
    imagen: encodeURIComponent(evento.imagen),
    precio: evento.precio?.toString() || '0'
  };

  const necesitaExpandir = evento.descripcion && evento.descripcion.length > 120;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 @container group">
      <div className="flex flex-col items-stretch justify-start @xl:flex-row @xl:items-stretch">
        {/* Imagen del Evento - CENTRADA VERTICALMENTE */}
        <div className="w-full @xl:w-2/5 rounded-t-xl @xl:rounded-l-xl @xl:rounded-tr-none overflow-hidden dark:bg-gray-700">
          <div className="relative w-full aspect-[4/3] flex items-center justify-center p-2">
            <img
              src={evento.imagen}
              alt={evento.alt}
              className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                // Fallback si la imagen no carga
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.classList.remove('bg-gray-100', 'dark:bg-gray-700');
                  parent.classList.add('bg-gradient-to-br', 'from-gray-300', 'to-gray-400', 'dark:from-gray-600', 'dark:to-gray-700');
                  parent.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center p-4">
                      <span class="text-gray-500 dark:text-gray-400 text-center text-sm">
                        ${evento.titulo}
                      </span>
                    </div>
                  `;
                }
              }}
            />
          </div>
        </div>
        
        {/* Contenido del Evento - 60% */}
        <div className="flex w-full grow flex-col justify-between p-4 @xl:justify-start @xl:w-3/5">
          <div className="space-y-3">
            <h2 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-tight">
              {evento.titulo}
            </h2>
            
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <span className="material-symbols-outlined text-sm flex-shrink-0">calendar_today</span>
              <p className="text-base font-normal leading-normal">
                {formatFecha(evento.fecha)} - {evento.hora}
              </p>
            </div>

           <div className="space-y-3">
  {/* Localización */}
  {evento.sala && (
    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
      <span className="material-symbols-outlined text-sm flex-shrink-0">location_on</span>
      <p className="text-sm">{evento.sala}</p>
    </div>
  )}

  {/* Precio con más destacado */}
  {evento.precio && (
    <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2">
      <span className="material-symbols-outlined text-sm flex-shrink-0 text-primary">attach_money</span>
      <p className="text-sm font-bold text-primary">${evento.precio} por entrada</p>
    </div>
  )}
</div>

            {/* Descripción EXPANDIBLE */}
            {evento.descripcion && (
              <div className="mt-3">
                <div className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                  <span className="material-symbols-outlined text-sm flex-shrink-0 mt-0.5">info</span>
                  <div className="flex-1">
                    <p className={`text-sm leading-relaxed ${
                      !descripcionExpandida && necesitaExpandir ? 'line-clamp-3' : ''
                    }`}>
                      {evento.descripcion}
                    </p>
                    
                    {/* Botón para expandir/contraer */}
                    {necesitaExpandir && (
                      <button
                        onClick={() => setDescripcionExpandida(!descripcionExpandida)}
                        className="text-xs text-primary mt-1 hover:underline focus:outline-none flex items-center gap-1 transition-colors"
                      >
                        {descripcionExpandida ? (
                          <>
                            <span className="material-symbols-outlined text-xs">expand_less</span>
                            Ver menos
                          </>
                        ) : (
                          <>
                            <span className="material-symbols-outlined text-xs">expand_more</span>
                            Ver más
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Botón de acción */}
          <div className="flex space-x-3 pt-4 mt-4">
            <Link 
              href={{
                pathname: '/compra-entrada-evento',
                query: eventoParams
              }}
              className="flex-1 bg-primary text-white text-center py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Comprar Entradas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}