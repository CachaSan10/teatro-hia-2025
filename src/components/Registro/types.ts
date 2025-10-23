// components/Registro/types.ts
export interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}