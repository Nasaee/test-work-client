interface OptionValue {
  id: string;
  gender: string;
}

function SelectInput({
  label,
  name,
  options = [],
  defaultValue,
}: {
  label: string;
  name: string;
  options: OptionValue[];
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={name} className='tracking-wide text-left'>
        {label}
      </label>
      <select
        name={name}
        defaultValue={defaultValue ? defaultValue : options[0].id}
        className='border border-gray-300 rounded-md w-full p-2 focus:border-primary focus:outline-primary min-w-28'
      >
        {options.map((opt) => {
          return (
            <option key={opt.id} value={opt.id}>
              {opt.gender}
            </option>
          );
        })}
      </select>
    </div>
  );
}
export default SelectInput;
