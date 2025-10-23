// components/CompraEntradas/MetodoPago.tsx
interface MetodoPagoProps {
  metodoSeleccionado: string;
  onMetodoChange: (metodo: string) => void;
}

export default function MetodoPago({ metodoSeleccionado, onMetodoChange }: MetodoPagoProps) {
  return (
    <div className="px-4">
      <fieldset className="flex gap-4">
        <label className="flex-1 cursor-pointer">
          <input
            checked={metodoSeleccionado === 'tarjeta'}
            className="sr-only"
            name="payment-method"
            type="radio"
            value="tarjeta"
            onChange={(e) => onMetodoChange(e.target.value)}
          />
          <div className={`flex items-center justify-center gap-2 rounded-lg border-2 p-3 ${
            metodoSeleccionado === 'tarjeta'
              ? 'border-primary bg-primary/20 text-white'
              : 'border-gray-700 text-gray-400'
          }`}>
            <span className="material-symbols-outlined">credit_card</span>
            <span className="text-sm font-medium">Tarjeta</span>
          </div>
        </label>
        <label className="flex-1 cursor-pointer">
          <input
            className="sr-only"
            name="payment-method"
            type="radio"
            value="paypal"
            onChange={(e) => onMetodoChange(e.target.value)}
          />
          <div className={`flex items-center justify-center gap-2 rounded-lg border-2 p-3 ${
            metodoSeleccionado === 'paypal'
              ? 'border-primary bg-primary/20 text-white'
              : 'border-gray-700 text-gray-400'
          }`}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.068 20.395c.534.333 1.133.522 1.765.522h6.142c3.48 0 5.662-2.31 6.004-5.632.068-.666.102-1.332.1-2-.034-1.833-.633-3.467-1.733-4.734-1.1-1.266-2.667-2.1-4.634-2.4l-1.033-6.196c-.034-.2-.167-.367-.367-.467a.554.554 0 0 0-.566.067L7.468 4.88c-.167.133-.267.333-.267.534l.867 5.197H3.334c-.2 0-.367.1-.467.267a.54.54 0 0 0-.067.566l2 6c.067.2.233.334.433.334h1.835v.001zm6.275-13.328l.3 1.8h-4.3l.534-3.198 3.466 1.398zm-6.108 8.128h2.334l-.367 2.2H4.433l1.8-2.2z"/>
            </svg>
            <span className="text-sm font-medium">PayPal</span>
          </div>
        </label>
      </fieldset>
    </div>
  );
}