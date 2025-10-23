// components/Registro/FormDivider.tsx
export default function FormDivider() {
  return (
    <div className="relative my-6 flex items-center justify-center">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-600"></div>
      </div>
      <div className="relative bg-gray-900 px-2 text-sm text-gray-400">O</div>
    </div>
  );
}