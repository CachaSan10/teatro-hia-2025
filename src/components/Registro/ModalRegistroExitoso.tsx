'use client';

import Link from 'next/link';

interface ModalRegistroExitosoProps {
  isOpen: boolean;
  onClose: () => void;
  redirectUrl?: string;
}

export default function ModalRegistroExitoso({
  isOpen,
  onClose,
  redirectUrl = '/'
}: ModalRegistroExitosoProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6">
        {/* Ícono de éxito */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <svg 
              className="w-6 h-6 text-green-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
        </div>
        
        {/* Mensaje */}
        <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
          ¡Registro Exitoso!
        </h3>
        
        <p className="text-gray-600 text-center mb-6">
          Tu cuenta ha sido creada correctamente. Revisa tu email para verificar tu cuenta.
        </p>

        {/* Botón que redirige */}
        <Link
          href={redirectUrl}
          className="block w-full bg-[#F72A39] hover:bg-[#e02432] text-white font-medium py-2 px-4 rounded text-center transition-colors"
          onClick={onClose}
        >
          Continuar al Inicio
        </Link>
      </div>
    </div>
  );
}