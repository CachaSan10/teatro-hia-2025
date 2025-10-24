interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  textarea?: boolean;
  select?: boolean;
  options?: string[];
}

export default function InputField({
  id,
  name,
  label,
  type,
  placeholder,
  required = false,
  value,
  onChange,
  textarea = false,
  select = false,
  options = []
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-gray-300">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      
      {textarea ? (
        <textarea
          id={id}
          name={name}
          rows={4}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F72A39] focus:border-transparent transition-all resize-none"
        />
      ) : select ? (
        <select
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#F72A39] focus:border-transparent transition-all"
        >
          <option value="">Selecciona un tema</option>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F72A39] focus:border-transparent transition-all"
        />
      )}
    </div>
  );
}