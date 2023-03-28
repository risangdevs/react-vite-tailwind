interface inputProps {
  label: string;
  type: string;
  name?: string;
  id?: string;
  placeholder?: string;
  handleChange?: any;
}
export default function Input({
  label,
  type,
  name,
  id,
  placeholder,
  handleChange,
}: inputProps) {
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-0.5">
        {type === "textarea" ? (
          <textarea
            name={name}
            onChange={(e) => handleChange(e)}
            rows={3}
            placeholder={placeholder}
            className="pl-2 pr-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
          />
        ) : (
          <input
            onChange={(e) => handleChange(e)}
            type={type}
            name={name}
            id={id}
            className="pl-2 pr-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
            placeholder={placeholder}
          />
        )}
      </div>
    </div>
  );
}
