import { useState, useMemo, useEffect } from "react";
interface multipleInputProps {
  label: string;
  type: string;
  name?: string;
  id?: string;
  placeholder?: string;
  max?: number;
  handleChange?: any;
}

export const MultipleInput = ({
  label,
  type,
  name,
  id,
  placeholder,
  max = 5,
  handleChange,
}: multipleInputProps) => {
  const [input, setInput] = useState<string[]>([""]);
  return (
    <div className="space-y-2">
      <div className="flex flex-row space-x-4 mt-2">
        <label
          htmlFor={label}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        <button
          onClick={() => {
            if (input.length < max) setInput((prev) => [...prev, ""]);
          }}
          type="button"
          className="rounded bg-indigo-500 py-1 px-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Add Phone
        </button>
      </div>
      <div className="grid grid-cols-2 gap-1">
        {input.map((e, i) => (
          <input
            key={i}
            type={type}
            name={`${name}.${i}`}
            id={id}
            className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
            placeholder={placeholder}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        ))}
      </div>
    </div>
  );
};
