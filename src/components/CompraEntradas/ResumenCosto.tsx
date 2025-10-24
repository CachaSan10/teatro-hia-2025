import { Entrada } from './types';

interface ResumenCostoProps {
  entrada: Entrada;
}

export default function ResumenCosto({ entrada }: ResumenCostoProps) {
  const subtotal = entrada.cantidad * entrada.precioUnitario;
  const total = subtotal;

  return (
    <div className="bg-gray-700/50 rounded-lg border border-gray-600 p-4 space-y-3 text-gray-300">
      <div className="flex justify-between items-center text-base">
        <span>{entrada.cantidad} Entradas x ${entrada.precioUnitario.toFixed(2)} </span>
        <span className="font-medium text-white">${subtotal.toFixed(2)} </span>
      </div>
     
      <div className="border-t border-gray-600 my-3"></div>
      <div className="flex justify-between items-center text-lg font-bold text-white">
        <span>Total a pagar</span>
        <span className="text-primary">${total.toFixed(2)} </span>
      </div>
    </div>
  );
}