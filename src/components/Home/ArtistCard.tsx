// components/Home/ArtistCard.tsx - Versión mejorada
'use client';

import { Artista } from './data/artistasData';

interface ArtistCardProps {
  artista: Artista;
  onVerMas: (artista: Artista) => void;
}

export default function ArtistCard({ artista, onVerMas }: ArtistCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl bg-[#331a1b] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
      {/* Imagen del Artista con overlay */}
      <div className="relative overflow-hidden">
        <div 
          className="w-full aspect-[3/4] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url('${artista.imagen}')` }}
          role="img"
          aria-label={artista.alt}
        />
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/10" />
      </div>
      
      {/* Información del Artista */}
      <div className="flex flex-1 flex-col justify-between gap-4 p-6">
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#f8b4b7] transition-colors">
            {artista.nombre}
          </h3>
          <p className="text-[#c89295] text-sm font-medium">{artista.especialidad}</p>
        </div>
        
        <button 
          onClick={() => onVerMas(artista)}
          className="w-full rounded-lg bg-[#472426] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#5a2d2f] hover:shadow-lg transform hover:-translate-y-1"
        >
          Ver perfil
        </button>
      </div>
    </div>
  );
}