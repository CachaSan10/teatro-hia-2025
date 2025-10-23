// components/SalasTeatro/SalaCard.tsx
'use client';

import { Sala } from './data/salasData';

interface SalaCardProps {
  sala: Sala;
}

const colores = {
  dorado : "bg-[#996e02]",
  textoDorado: "text-[#996e02]"
};

export default function SalaCard({ sala }: SalaCardProps) {
  const handleBotonClick = () => {
    console.log(`Acción para: ${sala.nombre}`);
    alert(`Acción: ${sala.botonTexto} para ${sala.nombre}`);
  };

  const layoutClass = sala.layout === 'reverso' 
    ? 'lg:flex-row-reverse' 
    : 'lg:flex-row';

  return (
    <section className="p-6">
      <div className={`flex flex-col ${layoutClass} items-stretch gap-8 rounded-2xl bg-gray-800 p-6 shadow-2xl`}>
        
        {/* Imagen Principal */}
        <div className="flex-1">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={sala.imagenPrincipal}
              alt={sala.altImagen}
              className="w-full h-64 lg:h-80 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzc0MTUxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzljYTdmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBkZSB7c2FsYS5ub21icmV9PC90ZXh0Pjwvc3ZnPg==';
              }}
            />
          </div>
        </div>

        {/* Información de la Sala */}
        <div className="flex-1 flex flex-col justify-center space-y-4">
          <h2 className="text-3xl font-bold text-white">
            {sala.nombre}
          </h2>
          
          <p className="text-gray-300 text-lg leading-relaxed">
            {sala.descripcion}
          </p>

          {/* Características */}
          <div className="space-y-3">
            {sala.caracteristicas.map((caracteristica, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-200">
                <span className={`material-symbols-outlined ${colores.textoDorado} text-xl`}>
                  {caracteristica.icono}
                </span>
                <span className="text-base">{caracteristica.texto}</span>
              </div>
            ))}
          </div>

          {/* Botón de acción */}
          <button 
            onClick={handleBotonClick}
            className={`w-full lg:w-auto px-8 py-3 ${colores.dorado} text-white text-lg font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
          >
            {sala.botonTexto}
          </button>
        </div>
      </div>
    </section>
  );
}