// components/Footer/Copyright.tsx
export default function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
      <p>© {currentYear} Teatro Principal. Todos los derechos reservados.</p>
    </div>
  );
}