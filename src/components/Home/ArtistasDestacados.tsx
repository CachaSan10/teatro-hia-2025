// components/Home/ArtistasDestacados.tsx
'use client';

import { artistasData } from './data/artistasData';
import ArtistCard from './ArtistCard';

export default function ArtistasDestacados() {
  const handleVerMas = (artista: any) => {
    console.log('Ver más sobre:', artista.nombre);
    alert(`Ver más sobre: ${artista.nombre}`);
  };

  return (
    <section className="py-10">
      <h2 className="px-4 pb-5 pt-5 text-2xl font-bold leading-tight tracking-tight text-white">
        Artistas destacados
      </h2>
      
      {/* Cambiar de scroll horizontal a grid responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {artistasData.map((artista) => (
          <ArtistCard
            key={artista.id}
            artista={artista}
            onVerMas={handleVerMas}
          />
        ))}
      </div>
    </section>
  );
}