// components/CompraEntradas/CompraEntradas.tsx
'use client';

import { useState, useEffect } from 'react';
import { Entrada, DatosPago } from './types';
import EventoInfo from './EventoInfo';
import SelectorEntradas from './SelectorEntradas';
import ResumenCosto from './ResumenCosto';
import MetodoPago from './MetodoPago';
import FormularioTarjeta from './FormularioTarjeta';
import { eventosData } from '../Cartelera/data/eventosData';
import ModalPagoExitoso from './ModalPagoExitoso';
import Link from 'next/link';

// Categorías de eventos
const CATEGORIAS_EVENTOS = [
  { id: 'todos', label: 'Todos' },
  { id: 'teatro', label: 'Teatro' },
  { id: 'musica', label: 'Música' },
  { id: 'danza', label: 'Danza' },
  { id: 'comedia', label: 'Comedia' },
  { id: 'opera', label: 'Ópera' },
];

interface Evento {
  id: number;
  titulo: string;
  fecha: string;
  hora: string;
  imagen: string;
  alt: string;
  descripcion?: string;
  precio: number;
  sala: string;
  categoria: 'teatro' | 'musica' | 'danza' | 'comedia' | 'opera' | 'otros';
}

export default function CompraEntradas() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('todos');
  const [eventoSeleccionado, setEventoSeleccionado] = useState<string>('');
  const [eventosFiltrados, setEventosFiltrados] = useState<Evento[]>([]);
  const [evento, setEvento] = useState<Evento | null>(null);
   const [isModalOpen, setIsModalOpen] = useState(false);



  // Simulación de datos de eventos (reemplaza esto con tu data real)
  const [todosLosEventos] = useState<Evento[]>(eventosData);

  const [entrada, setEntrada] = useState<Entrada>({
    cantidad: 2,
    precioUnitario: 75.00,
    total: 150.00
  });

  const [datosPago, setDatosPago] = useState<DatosPago>({
    metodo: 'tarjeta',
    titular: '',
    numeroTarjeta: '',
    fechaExpiracion: '',
    cvv: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  // Filtrar eventos cuando se selecciona una categoría
  useEffect(() => {
    if (categoriaSeleccionada === 'todos') {
      setEventosFiltrados(todosLosEventos);
    } else {
      const eventosFiltrados = todosLosEventos.filter(
        evento => evento.categoria === categoriaSeleccionada
      );
      setEventosFiltrados(eventosFiltrados);
    }
    setEventoSeleccionado(''); // Resetear evento seleccionado
    setEvento(null); // Resetear evento actual
  }, [categoriaSeleccionada, todosLosEventos]);

  // Actualizar evento cuando se selecciona uno
  useEffect(() => {
    if (eventoSeleccionado) {
      const eventoEncontrado = eventosFiltrados.find(
        evento => evento.id === parseInt(eventoSeleccionado)
      );
      if (eventoEncontrado) {
        setEvento(eventoEncontrado);
        // Actualizar el precio en la entrada
        setEntrada(prev => ({
          ...prev,
          precioUnitario: eventoEncontrado.precio,
          total: prev.cantidad * eventoEncontrado.precio
        }));
      }
    } else {
      setEvento(null);
    }
  }, [eventoSeleccionado, eventosFiltrados]);

  const handleCantidadChange = (cantidad: number) => {
    const nuevoTotal = cantidad * entrada.precioUnitario;
    
    setEntrada({
      ...entrada,
      cantidad,
      total: nuevoTotal
    });
  };

  const handleDatosPagoChange = (nuevosDatos: Partial<DatosPago>) => {
    setDatosPago({
      ...datosPago,
      ...nuevosDatos
    });
    // Limpiar errores cuando el usuario escribe
    if (Object.keys(nuevosDatos)[0]) {
      setErrors(prev => ({
        ...prev,
        [Object.keys(nuevosDatos)[0]]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!eventoSeleccionado) {
      newErrors.evento = 'Debes seleccionar un evento';
    }

    if (datosPago.metodo === 'tarjeta') {
      if (!datosPago.titular.trim()) {
        newErrors.titular = 'El nombre del titular es requerido';
      }
      if (!datosPago.numeroTarjeta.trim()) {
        newErrors.numeroTarjeta = 'El número de tarjeta es requerido';
      } else if (datosPago.numeroTarjeta.replace(/\s/g, '').length !== 16) {
        newErrors.numeroTarjeta = 'El número de tarjeta debe tener 16 dígitos';
      }
      if (!datosPago.fechaExpiracion.trim()) {
        newErrors.fechaExpiracion = 'La fecha de expiración es requerida';
      } else if (!/^\d{2}\/\d{2}$/.test(datosPago.fechaExpiracion)) {
        newErrors.fechaExpiracion = 'Formato inválido (MM/AA)';
      }
      if (!datosPago.cvv.trim()) {
        newErrors.cvv = 'El CVV es requerido';
      } else if (datosPago.cvv.length !== 3) {
        newErrors.cvv = 'El CVV debe tener 3 dígitos';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      // Simular procesamiento de pago
      console.log('Procesando pago...', { evento, entrada, datosPago });
      await new Promise(resolve => setTimeout(resolve, 2000));
    
     // alert('¡Pago procesado exitosamente! Recibirás un email de confirmación.');
      
      // Reset form
      setDatosPago({
        metodo: 'tarjeta',
        titular: '',
        numeroTarjeta: '',
        fechaExpiracion: '',
        cvv: ''
      });
        setIsModalOpen(true);
      
    } catch (error) {
      console.error('Error en el pago:', error);
      alert('Error en el procesamiento del pago. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const total = entrada.cantidad * entrada.precioUnitario;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        
        {/* Header fuera del card */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-3">
            Comprar Entradas
          </h1>
          <p className="text-gray-400 text-lg">
            Completa tu reserva para una experiencia inolvidable
          </p>
        </div>

        {/* Card del formulario con bordes redondeados */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 p-8">
          
          {/* Selectores de categoría y evento */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Selecciona tu Evento</h2>
            
            {/* Selector de categoría */}
            <div className="mb-4">
              <label htmlFor="categoria" className="block text-sm font-medium text-gray-300 mb-2">
                Categoría del Evento
              </label>
              <select
                id="categoria"
                value={categoriaSeleccionada}
                onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {CATEGORIAS_EVENTOS.map(categoria => (
                  <option key={categoria.id} value={categoria.id}>
                    {categoria.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Selector de evento */}
            <div className="mb-4">
              <label htmlFor="evento" className="block text-sm font-medium text-gray-300 mb-2">
                Evento
              </label>
              <select
                id="evento"
                value={eventoSeleccionado}
                onChange={(e) => setEventoSeleccionado(e.target.value)}
                disabled={eventosFiltrados.length === 0}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="">Selecciona un evento</option>
                {eventosFiltrados.map(evento => (
                  <option key={evento.id} value={evento.id}>
                    {evento.titulo} - {evento.fecha} - ${evento.precio}
                  </option>
                ))}
              </select>
              {errors.evento && (
                <p className="text-red-400 text-sm mt-1">{errors.evento}</p>
              )}
            </div>
          </div>

          {/* Información del evento */}
          {evento && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-4">Tu Evento</h2>
              <EventoInfo evento={evento} />
            </div>
          )}

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            {/* Selección de entradas */}
            {evento && (
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Cantidad de Entradas</h2>
                <SelectorEntradas 
                  cantidad={entrada.cantidad} 
                  onCantidadChange={handleCantidadChange} 
                />
              </div>
            )}

            {/* Resumen de costo */}
            {evento && (
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Resumen del Pedido</h2>
                <ResumenCosto entrada={entrada} />
              </div>
            )}

            {/* Método de pago */}
            {evento && (
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Método de Pago</h2>
                <MetodoPago 
                  metodoSeleccionado={datosPago.metodo}
                  onMetodoChange={(metodo) => handleDatosPagoChange({ metodo: metodo as 'tarjeta' | 'paypal' })}
                />
              </div>
            )}

            {/* Formulario de tarjeta */}
            {evento && datosPago.metodo === 'tarjeta' && (
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Datos de Pago</h2>
                <FormularioTarjeta 
                  datosPago={datosPago}
                  onDatosPagoChange={handleDatosPagoChange}
                  errors={errors}
                />
              </div>
            )}

            {/* Texto de seguridad y botón de envío */}
            {evento && (
              <>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mt-4">
                  <span className="material-symbols-outlined text-base">lock</span>
                  <span>Transacción 100% segura y encriptada</span>
                </div>

                {/* Botón de envío */}
                <div className="mt-4">
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-white font-bold py-4 px-4 rounded-xl shadow-lg hover:bg-primary/90 transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Procesando pago...
                      </>
                    ) : (
                      `Pagar $${total.toFixed(2)} `
                    )}
                  </button>
                </div>
              </>
            )}
          </form>

          {/* Footer Links dentro del card */}
          <div className="mt-6 pt-6 border-t border-gray-700/50">
            <div className="text-center text-xs text-gray-400">
              <p>
                Al completar tu compra, aceptas nuestros{' '}
                <a href="#" className="font-semibold text-[#F72A39] hover:underline">
                  Términos de Servicio
                </a>{' '}
                y{' '}
                <a href="#" className="font-semibold text-[#F72A39] hover:underline">
                  Política de Reembolsos
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Enlace fuera del card */}
        <div className="text-center text-sm text-gray-400 mt-8">
          <p>
            ¿Necesitas ayuda?{' '}
            <a href="/contacto" className="font-semibold text-[#F72A39] hover:underline">
              Contáctanos
            </a>
          </p>
        </div>

<div>
  <ModalPagoExitoso
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    redirectUrl="/"
  />
</div>


      </div>
    </div>
  );
}