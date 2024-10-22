import { cn } from '@/lib/utils';
import { InputHTMLAttributes } from 'react';

function CustomInput({
  label,
  name,
  type,
  required = true,
  capitalize = false,
}: {
  label: string;
  name: string;
  type: InputHTMLAttributes<HTMLInputElement>['type'];
  required?: boolean;
  capitalize?: boolean;
}) {
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={name} className='tracking-wide text-left'>
        {label}
      </label>
      <input
        type={type}
        name={name}
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
