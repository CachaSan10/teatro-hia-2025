// components/Registro/Registro.tsx
'use client';

import { useState } from 'react';
import { FormData } from './types';
import GoogleButton from './GoogleButton';
import FormDivider from './FormDivider';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import FooterLinks from './FooterLinks';

export default function Registro() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGoogleSignIn = () => {
    console.log('Iniciando sesión con Google...');
    // Aquí iría la lógica de autenticación con Google
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validaciones básicas
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      setLoading(false);
      return;
    }

    try {
      // Aquí iría la lógica de registro
      console.log('Datos del formulario:', formData);
      
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('¡Registro exitoso! Revisa tu email para verificar tu cuenta.');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error('Error en el registro:', error);
      alert('Error en el registro. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black  flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        
        {/* Header fuera del card */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-3">
            Crea tu Cuenta
          </h1>
          <p className="text-gray-400 text-lg">
            Únete para descubrir un mundo de espectáculos.
          </p>
        </div>

        {/* Card del formulario con bordes redondeados */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 p-8">
          
          {/* Botón de Google */}
          <div className="flex flex-col gap-4">
            <GoogleButton onClick={handleGoogleSignIn} />
          </div>

          {/* Divisor */}
          <FormDivider />

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <InputField
              id="full-name"
              name="fullName"
              label="Nombre completo"
              type="text"
              placeholder="Tu nombre y apellidos"
              required
              value={formData.fullName}
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

            <InputField
              id="password"
              name="password"
              label="Contraseña"
              type="password"
              placeholder="••••••••"
              required
              value={formData.password}
              onChange={handleInputChange}
            />

            <InputField
              id="confirm-password"
              name="confirmPassword"
              label="Confirmar contraseña"
              type="password"
              placeholder="••••••••"
              required
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />

            {/* Botón de envío */}
            <div className="mt-2">
              <SubmitButton loading={loading} />
            </div>
          </form>

          {/* Footer Links dentro del card */}
          <div className="mt-6 pt-6 border-t border-gray-700/50">
            <div className="text-center text-xs text-gray-400">
              <p>
                Al registrarte, aceptas nuestros{' '}
                <a href="#" className="font-semibold text-[#F72A39] hover:underline">
                  Términos de Servicio
                </a>{' '}
                y{' '}
                <a href="#" className="font-semibold text-[#F72A39] hover:underline">
                  Política de Privacidad
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Enlace a login fuera del card */}
        <div className="text-center text-sm text-gray-400 mt-8">
          <p>
            ¿Ya tienes una cuenta?{' '}
            <a href="/login" className="font-semibold text-[#F72A39] hover:underline">
              Inicia sesión
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}