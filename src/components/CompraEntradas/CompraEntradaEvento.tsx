// components/CompraEntradas/CompraEntradas.tsx
'use client';

import { useState } from 'react';
import { Evento, Entrada, DatosPago } from './types';
import EventoInfo from './EventoInfo';
import SelectorEntradas from './SelectorEntradas';
import ResumenCosto from './ResumenCosto';
import MetodoPago from './MetodoPago';
import FormularioTarjeta from './FormularioTarjeta';

interface PropsEvento {
    id: number,
    titulo: string,
    fecha: string,
    hora: string,
    sala: string,
    imagen: string,
    precio: number
};

export default function CompraEntradas(props: PropsEvento) {
    const {id, titulo, fecha, hora, sala, imagen, precio} = props;
  const [evento] = useState<Evento>({
    id: id,
    titulo: titulo,
    fecha: fecha,
    hora: hora,
    teatro: sala,
    imagen: imagen,
    precio: precio
  });

  const [entrada, setEntrada] = useState<Entrada>({
    cantidad: 2,
    precioUnitario: 75.00,
    gastosGestion: 5.00,
    total: 155.00
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

  const handleCantidadChange = (cantidad: number) => {
    const nuevoSubtotal = cantidad * entrada.precioUnitario;
    const nuevoTotal = nuevoSubtotal + entrada.gastosGestion;
    
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
      
      alert('¡Pago procesado exitosamente! Recibirás un email de confirmación.');
      
      // Reset form
      setDatosPago({
        metodo: 'tarjeta',
        titular: '',
        numeroTarjeta: '',
        fechaExpiracion: '',
        cvv: ''
      });
      
    } catch (error) {
      console.error('Error en el pago:', error);
      alert('Error en el procesamiento del pago. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const total = entrada.cantidad * entrada.precioUnitario + entrada.gastosGestion;

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
          
          {/* Información del evento */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Tu Evento</h2>
            <EventoInfo evento={evento} />
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            {/* Selección de entradas */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Cantidad de Entradas</h2>
              <SelectorEntradas 
                cantidad={entrada.cantidad} 
                onCantidadChange={handleCantidadChange} 
              />
            </div>

            {/* Resumen de costo */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Resumen del Pedido</h2>
              <ResumenCosto entrada={entrada} />
            </div>

            {/* Método de pago */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Método de Pago</h2>
              <MetodoPago 
                metodoSeleccionado={datosPago.metodo}
                onMetodoChange={(metodo) => handleDatosPagoChange({ metodo: metodo as 'tarjeta' | 'paypal' })}
              />
            </div>

            {/* Formulario de tarjeta */}
            {datosPago.metodo === 'tarjeta' && (
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Datos de Pago</h2>
                <FormularioTarjeta 
                  datosPago={datosPago}
                  onDatosPagoChange={handleDatosPagoChange}
                  errors={errors}
                />
              </div>
            )}

            {/* Texto de seguridad */}
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
                  `Pagar ${total.toFixed(2)} €`
                )}
              </button>
            </div>
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
      </div>
    </div>
  );
}