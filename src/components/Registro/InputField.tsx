// components/Registro/InputField.tsx
import { InputFieldProps } from './types';

export default function InputField({
  id,
  name,
  label,
  type,
  placeholder,
  required = false,
  value,
  onChange
}: InputFieldProps) {
  return (
    <div>
      <label 
        htmlFor={id}
        className="block text-sm font-medium text-gray-400 mb-1.5"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-[#F72A39] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors duration-200"
      />
    </div>
  );
}