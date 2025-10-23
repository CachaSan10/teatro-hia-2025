// components/CompraEntradas/SelectorEntradas.tsx
'use client';

import { useState } from 'react';

interface SelectorEntradasProps {
  cantidad: number;
  onCantidadChange: (cantidad: number) => void;
}

export default function SelectorEntradas({ cantidad, onCantidadChange }: SelectorEntradasProps) {
  const incrementar = () => {
    onCantidadChange(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) {
      onCantidadChange(cantidad - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      onCantidadChange(value);
    }
  };

  return (
    <div className="flex items-center gap-4 bg-gray-700/50 p-4 rounded-lg border border-gray-600 justify-between">
      <div className="flex items-center gap-4">
        <div className="text-white flex items-center justify-center rounded-lg bg-gray-600 shrink-0 size-10">
          <span className="material-symbols-outlined">confirmation_number</span>
        </div>
        <p className="text-white text-base font-normal leading-normal">
          Cantidad de Entradas
        </p>
      </div>
      <div className="shrink-0">
        <div className="flex items-center gap-2 text-white">
          <button
            type="button"
            onClick={decrementar}
            className="text-lg font-medium leading-normal flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 cursor-pointer hover:bg-gray-500 transition-colors"
          >
            -
          </button>
          <input
            className="text-base font-medium leading-normal w-12 p-0 text-center bg-transparent focus:outline-0 focus:ring-0 focus:border-none border-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            type="number"
            value={cantidad}
            onChange={handleInputChange}
            min="1"
          />
          <button
            type="button"
            onClick={incrementar}
            className="text-lg font-medium leading-normal flex h-8 w-8 items-center justify-center rounded-full bg-primary cursor-pointer hover:bg-primary/90 transition-colors"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}