// components/Cartelera/EventoCard.tsx
import { EventoCardProps } from './types';

export default function EventoCard({ evento, onComprarEntradas }: EventoCardProps) {
  const formatFecha = (fecha: string) => {
    return new Date(fecha).toLocaleDateString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 @container">
      <div className="flex flex-col items-stretch justify-start @xl:flex-row @xl:items-start">
        {/* Imagen del Evento */}
        <div 
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl @xl:rounded-l-xl @xl:rounded-tr-none @xl:w-1/3"
          style={{ backgroundImage: `url('${evento.imagen}')` }}
          aria-label={evento.alt}
        />
        
        {/* Contenido del Evento */}
        <div className="flex w-full grow flex-col items-stretch justify-between p-4 @xl:justify-center">
          <div className="space-y-2">
            <h2 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-tight">
              {evento.titulo}
            </h2>
            
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <span className="material-symbols-outlined text-sm">calendar_today</span>
              <p className="text-base font-normal leading-normal">
                {formatFecha(evento.fecha)} - {evento.hora}
              </p>
            </div>

            {/* Información adicional */}
            {evento.sala && (
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <span className="material-symbols-outlined text-sm">location_on</span>
                <p className="text-sm">{evento.sala}</p>
              </div>
            )}

            {evento.precio && (
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <span className="material-symbols-outlined text-sm">attach_money</span>
                <p className="text-sm">Desde ${evento.precio}</p>
              </div>
            )}

             {evento.descripcion && (
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <span className="material-symbols-outlined text-sm">info</span>
                <p className="text-sm">{evento.descripcion}</p>
              </div>
            )}
          </div>

          {/* Botón de acción */}
          <div className="flex items-end gap-3 justify-end mt-4 @xl:mt-2">
            <button 
              onClick={() => onComprarEntradas(evento)}
              className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#E6192B] text-white text-sm font-medium leading-normal hover:bg-[#93101B] transition-colors duration-200"
            >
              <span className="truncate">Comprar Entradas</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}