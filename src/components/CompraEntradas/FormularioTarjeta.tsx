// components/CompraEntradas/FormularioTarjeta.tsx
import { DatosPago } from './types';

interface FormularioTarjetaProps {
  datosPago: DatosPago;
  onDatosPagoChange: (datos: Partial<DatosPago>) => void;
  errors: Record<string, string>;
}

export default function FormularioTarjeta({ datosPago, onDatosPagoChange, errors }: FormularioTarjetaProps) {
  const handleChange = (field: keyof DatosPago, value: string) => {
    onDatosPagoChange({ [field]: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="card-holder">
          Nombre del titular
        </label>
        <input
          className={`w-full rounded-lg border bg-white text-gray-900 focus:border-primary focus:ring-primary p-3 ${
            errors.titular ? 'border-red-500' : 'border-gray-300'
          }`}
          id="card-holder"
          placeholder="John Doe"
          type="text"
          value={datosPago.titular}
          onChange={(e) => handleChange('titular', e.target.value)}
        />
        {errors.titular && (
          <p className="text-red-500 text-sm mt-1">{errors.titular}</p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="card-number">
          Número de tarjeta
        </label>
        <input
          className={`w-full rounded-lg border bg-white text-gray-900 focus:border-primary focus:ring-primary p-3 ${
            errors.numeroTarjeta ? 'border-red-500' : 'border-gray-300'
          }`}
          id="card-number"
          placeholder="1234 5678 9012 3456"
          type="text"
          maxLength={19}
          value={datosPago.numeroTarjeta}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
            handleChange('numeroTarjeta', value);
          }}
        />
        {errors.numeroTarjeta && (
          <p className="text-red-500 text-sm mt-1">{errors.numeroTarjeta}</p>
        )}
      </div>
      
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="expiry-date">
            Fecha de expiración
          </label>
          <input
            className={`w-full rounded-lg border bg-white text-gray-900 focus:border-primary focus:ring-primary p-3 ${
              errors.fechaExpiracion ? 'border-red-500' : 'border-gray-300'
            }`}
            id="expiry-date"
            placeholder="MM/AA"
            type="text"
            maxLength={5}
            value={datosPago.fechaExpiracion}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
              handleChange('fechaExpiracion', value);
            }}
          />
          {errors.fechaExpiracion && (
            <p className="text-red-500 text-sm mt-1">{errors.fechaExpiracion}</p>
          )}
        </div>
        
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="cvv">
            CVV
          </label>
          <input
            className={`w-full rounded-lg border bg-white text-gray-900 focus:border-primary focus:ring-primary p-3 ${
              errors.cvv ? 'border-red-500' : 'border-gray-300'
            }`}
            id="cvv"
            placeholder="123"
            type="text"
            maxLength={3}
            value={datosPago.cvv}
            onChange={(e) => handleChange('cvv', e.target.value.replace(/\D/g, ''))}
          />
          {errors.cvv && (
            <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
          )}
        </div>
      </div>
    </div>
  );
}