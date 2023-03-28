import { useState } from "react";
interface multipleInputFMProps {
  label: string;
  type?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  max?: number;
  handleChange?: any;
}

export const MultipleInputFM = ({
  label,
  type,
  name,
  id,
  placeholder,
  max = 10,
  handleChange,
}: multipleInputFMProps) => {
  const [input, setInput] = useState<string[]>([""]);
  return (
    <div className="space-y-0">
      <div className="flex flex-row space-x-4 mt-8">
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
          Add Family Member
        </button>
      </div>
      <div className="grid grid-cols-1">
        <table className="table-auto">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-0 pl-4 pr-3 text-left text-xs font-semibold text-gray-900 sm:pl-0"
              >
                Name
              </th>
              <th
                scope="col"
                className="py-0 pl-4 pr-3 text-left text-xs font-semibold text-gray-900 sm:pl-0"
              >
                Date of Birth
              </th>
              <th
                scope="col"
                className="py-0 pl-4 pr-3 text-left text-xs font-semibold text-gray-900 sm:pl-0"
              >
                Relation
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 ">
            {input.map((e, i) => (
              <tr className="" key={i}>
                <td>
                  <input
                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6 h-10"
                    type="text"
                    name={`familyMember.${i}.name`}
                    onChange={(e) => handleChange(e)}
                  />
                </td>
                <td>
                  <input
                    className="pl-2 pr-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6 h-10"
                    type="date"
                    name={`familyMember.${i}.dob`}
                    onChange={(e) => handleChange(e)}
                  />
                </td>
                <td>
                  <select
                    className="pl-2 block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-200 sm:text-sm h-10"
                    name={`familyMember.${i}.status`}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value={"-"}>Select Relation</option>
                    <option value="brother">brother</option>
                    <option value="sister">sister</option>
                    <option value="parent">parent</option>
                    <option value="child">child</option>
                    <option value="spouse">spouse</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* {input.map((e, i) => (
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
        ))} */}
      </div>
    </div>
  );
};
