// components/SalasTeatro/SalasTeatro.tsx
'use client';

import { salasData } from './data/salasData';
import SalaCard from './SalaCard';

export default function SalasTeatro() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-8">
      
      {/* Header Hero */}
      <div className="text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Nuestras Salas
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Descubre nuestros espacios diseñados para ofrecer la mejor experiencia teatral, 
            desde producciones clásicas hasta vanguardistas. Cada sala tiene su propia 
            personalidad y equipamiento especializado.
          </p>
        </div>
      </div>

      {/* Separador Decorativo */}
      <div className="flex justify-center mb-12">
        <div className="w-24 h-1 bg-primary rounded-full"></div>
      </div>

      {/* Lista de Salas */}
      <div className="space-y-12 max-w-7xl mx-auto">
        {salasData.map((sala) => (
          <SalaCard key={sala.id} sala={sala} />
        ))}
      </div>

      {/* Call to Action Final */}
      <div className="text-center py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Interesado en nuestras salas?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Contáctanos para más información sobre disponibilidad, precios y requisitos.
          </p>
          <button className="px-8 py-3 bg-primary text-white text-lg font-semibold rounded-xl hover:bg-primary/90 transition-colors duration-300">
            Contactar Ahora
          </button>
        </div>
      </div>
    </main>
  );
}