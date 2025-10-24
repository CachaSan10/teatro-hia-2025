interface SubmitButtonProps {
  loading?: boolean;
}

export default function SubmitButton({ loading = false }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="flex w-full min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-[#F72A39] text-white text-base font-bold leading-normal hover:bg-[#93101B] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
    >
      <span className="truncate">
        {loading ? 'Registrando...' : 'Registrarse'}
      </span>
    </button>
  );
}