// components/Home/ArtistCard.tsx
'use client';

import { Artista } from './data/artistasData';

interface ArtistCardProps {
  artista: Artista;
  onVerMas: (artista: Artista) => void;
}

export default function ArtistCard({ artista, onVerMas }: ArtistCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-[#331a1b] shadow-[0_0_4px_rgba(0,0,0,0.1)] hover:shadow-[0_0_8px_rgba(0,0,0,0.2)] transition-shadow duration-300">
      <div 
        className="w-full aspect-[3/4] rounded-t-lg bg-cover bg-center"
        style={{ backgroundImage: `url('${artista.imagen}')` }}
        role="img"
        aria-label={artista.alt}
      />
      
      <div className="flex flex-1 flex-col justify-between gap-4 p-4">
        <div className="text-center">
          <p className="text-lg font-medium text-white mb-1">{artista.nombre}</p>
          <p className="text-sm text-[#c89295]">{artista.especialidad}</p>
        </div>
        
        <button 
          onClick={() => onVerMas(artista)}
          className="w-full cursor-pointer rounded-lg bg-[#472426] px-4 py-2 text-sm font-bold text-white hover:bg-[#5a2d2f] transition-colors duration-200"
        >
          Ver más
        </button>
      </div>
    </div>
  );
}