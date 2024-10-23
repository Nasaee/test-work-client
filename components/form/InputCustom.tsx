import { cn } from '@/lib/utils';
import { InputHTMLAttributes } from 'react';

interface CustomInputProps {
  label: string;
  name: string;
  type: InputHTMLAttributes<HTMLInputElement>['type'];
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  capitalize?: boolean;
}

function CustomInput({
  label,
  name,
  type,
  value,
  onChange,
  required = true,
  capitalize = false,
}: CustomInputProps) {
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={name} className='tracking-wide text-left'>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={cn(
          'border border-gray-300 rounded-md w-full p-2 focus:border-primary focus:outline-primary px-3',
          capitalize && 'capitalize'
        )}
      />
    </div>
  );
}
export default CustomInput;
