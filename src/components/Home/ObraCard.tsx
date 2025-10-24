'use client';

import { Obra } from './data/obrasData';

interface ObraCardProps {
  obra: Obra;
}

export default function ObraCard({ obra }: ObraCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl bg-[#331a1b] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
      {/* Imagen de la Obra con overlay */}
      <div className="relative overflow-hidden">
        <div 
          className="w-full aspect-[3/4] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url('${obra.imagen}')` }}
          role="img"
          aria-label={obra.alt}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
      </div>
      
      {/* Información de la Obra */}
      <div className="flex flex-1 flex-col justify-center p-6 text-center">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f8b4b7] transition-colors">
          {obra.titulo}
        </h3>
        <p className="text-[#c89295] text-sm font-medium">{obra.temporada}</p>
        
        <button className="mt-4 rounded-lg bg-[#472426] px-4 py-2 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-[#5a2d2f]">
          Ver detalles
        </button>
      </div>
    </div>
  );
}