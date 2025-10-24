import Link from 'next/link';

export default function FooterLinks() {
  return (
    <>
      {/* Términos y condiciones */}
      <div className="text-center text-xs text-gray-400 mt-6">
        <p>
          Al registrarte, aceptas nuestros{' '}
          <Link href="#" className="font-semibold text-primary hover:underline">
            Términos de Servicio
          </Link>{' '}
          y{' '}
          <Link href="#" className="font-semibold text-primary hover:underline">
            Política de Privacidad
          </Link>
          .
        </p>
      </div>

      {/* Enlace a login */}
      <div className="text-center text-sm text-gray-400 mt-8">
        <p>
          ¿Ya tienes una cuenta?{' '}
          <Link href="/login" className="font-semibold text-primary hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </>
  );
}