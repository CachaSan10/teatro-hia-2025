// components/Cartelera/EmptyState.tsx
export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-10 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
      <span className="material-symbols-outlined text-5xl text-gray-400 dark:text-gray-500">
        sentiment_dissatisfied
      </span>
      <h3 className="text-gray-900 dark:text-white text-lg font-semibold mt-4">
        No hay más funciones programadas
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mt-1">
        Vuelve a consultar pronto.
      </p>
    </div>
  );
}