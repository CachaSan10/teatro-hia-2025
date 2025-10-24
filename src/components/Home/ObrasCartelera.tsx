'use client';

import { obrasData } from './data/obrasData';
import ObraCard from './ObraCard';

export default function ObrasCartelera() {
  return (
    <section className="py-10">
      <h2 className="px-4 pb-5 pt-5 text-2xl font-bold leading-tight tracking-tight text-white">
        Obras en cartelera
      </h2>
      
      {/* Mantener grid responsive consistente */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {obrasData.map((obra) => (
          <ObraCard
            key={obra.id}
            obra={obra}
          />
        ))}
      </div>
    </section>
  );
}