// components/CompraEntradas/EventoInfo.tsx
import { Evento } from './types';

interface EventoInfoProps {
  evento: Evento;
}

export default function EventoInfo({ evento }: EventoInfoProps) {
  return (
    <div className="flex items-stretch justify-between gap-4 rounded-lg bg-gray-700/50 p-4 border border-gray-600">
      <div className="flex flex-col gap-1 flex-[2_2_0px]">
        <p className="text-white text-lg font-bold leading-tight">
          {evento.titulo}
        </p>
        <p className="text-gray-300 text-sm font-normal leading-normal">
          {evento.fecha} - {evento.hora}
        </p>
        <p className="text-gray-300 text-sm font-normal leading-normal">
          {evento.teatro}
        </p>
        <p className="text-primary font-semibold text-base mt-2">
          $ {evento.precio.toFixed(2)}  por entrada
        </p>
      </div>
      <div className="flex-1">
        <div className="w-full aspect-square rounded-lg overflow-hidden bg-gray-600">
          <img
            src={evento.imagen}
            alt={`Poster de ${evento.titulo}`}
            className="w-full h-full object-cover rounded-lg"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </div>
    </div>
  );
}