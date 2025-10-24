'use client';

import { useState } from 'react';
import { FormData } from './types';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import ModalEnvioExitoso from './ModalEnvioExitoso'; // Asegúrate de ajustar la ruta
import Link from 'next/link';

export default function Contacto() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    tema: '',
    mensaje: ''
  });
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const temasConsulta = [
    'Información general',
    'Reserva de entradas',
    'Problemas técnicos',
    'Sugerencias',
    'Prensa y medios',
    'Patrocinios',
    'Otro'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Aquí iría la lógica de envío del formulario
      console.log('Datos del formulario:', formData);
      
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mostrar modal de éxito en lugar de alert
      setIsModalOpen(true);
      
      // Reset form
      setFormData({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        tema: '',
        mensaje: ''
      });
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        
        {/* Header fuera del card */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-3">
            Contáctenos
          </h1>
          <p className="text-gray-400 text-lg">
            Estamos aquí para ayudarte. Envíanos tu consulta.
          </p>
        </div>

        {/* Card del formulario con bordes redondeados */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 p-8">
          
          {/* Formulario */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* ... resto del formulario igual ... */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                id="nombre"
                name="nombre"
                label="Nombre"
                type="text"
                placeholder="Tu nombre"
                required
                value={formData.nombre}
                onChange={handleInputChange}
              />

              <InputField
                id="apellido"
                name="apellido"
                label="Apellido"
                type="text"
                placeholder="Tu apellido"
                required
                value={formData.apellido}
                onChange={handleInputChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                id="telefono"
                name="telefono"
                label="Teléfono"
                type="tel"
                placeholder="+1 234 567 890"
                value={formData.telefono}
                onChange={handleInputChange}
              />

              <InputField
                id="email"
                name="email"
                label="Correo electrónico"
                type="email"
                placeholder="tu@email.com"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <InputField
              id="tema"
              name="tema"
              label="Tema de consulta"
              type="text"
              placeholder="Selecciona el tema de tu consulta"
              required
              value={formData.tema}
              onChange={handleInputChange}
              select
              options={temasConsulta}
            />

            <InputField
              id="mensaje"
              name="mensaje"
              label="Tu mensaje"
              type="text"
              placeholder="Describe tu consulta en detalle..."
              required
              value={formData.mensaje}
              onChange={handleInputChange}
              textarea
            />

            {/* Botón de envío */}
            <div className="mt-2">
              <SubmitButton loading={loading} />
            </div>
          </form>

          {/* Información de contacto adicional */}
          <div className="mt-6 pt-6 border-t border-gray-700/50">
            <div className="text-center text-sm text-gray-400">
              <p>
                También puedes contactarnos directamente al{' '}
                <a href="tel:+1234567890" className="font-semibold text-[#F72A39] hover:underline">
                 +54 (388) 4221342
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Enlace de volver al home */}
        <div className="text-center text-sm text-gray-400 mt-8">
  <p>
    <Link href="/" className="font-semibold text-[#F72A39] hover:underline">
      Volver al inicio
    </Link>
  </p>
</div>
      </div>

      {/* Modal de envío exitoso */}
      <ModalEnvioExitoso
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        redirectUrl="/"
      />
    </div>
  );
}