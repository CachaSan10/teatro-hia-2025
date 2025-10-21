// app/registro/page.tsx
'use client';

import { useState } from 'react';

export default function Registro() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipo: 'espectador',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    alert('¡Registro enviado! Te contactaremos pronto.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Registro</h1>
          <p className="text-lg text-gray-600">
            Únete a nuestra comunidad teatral como espectador o artista
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            {/* Tipo de Registro */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Me quiero registrar como:
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="tipo"
                    value="espectador"
                    checked={formData.tipo === 'espectador'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Espectador
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="tipo"
                    value="artista"
                    checked={formData.tipo === 'artista'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Artista
                </label>
              </div>
            </div>

            {/* Nombre */}
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                {formData.tipo === 'artista' ? 'Cuéntanos sobre tu proyecto:' : '¿Algo que quieras comentar?'}
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Enviar Registro
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}