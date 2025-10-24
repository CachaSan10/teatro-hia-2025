interface SubmitButtonProps {
  loading: boolean;
}

export default function SubmitButton({ loading }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full bg-[#F72A39] hover:bg-[#e02432] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F72A39] focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? (
        <div className="flex items-center justify-center gap-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          Enviando...
        </div>
      ) : (
        'Enviar Mensaje'
      )}
    </button>
  );
}