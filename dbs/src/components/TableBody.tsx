export interface tableBodyProps {
  people?: any[];
}
export const TableBody = ({ people }: tableBodyProps) => {
  return (
    <tbody className="divide-y divide-gray-200">
      {people &&
        people.map((person) => (
          <tr key={person.email}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-start text-sm font-medium text-gray-900 sm:pl-0">
              {person.name}
            </td>
            <td className="whitespace-nowrap py-4 px-3 text-start text-sm text-gray-500">
              {person.title}
            </td>
            <td className="whitespace-nowrap py-4 px-3 text-start text-sm text-gray-500">
              {person.email}
            </td>
            <td className="whitespace-nowrap py-4 px-3 text-start text-sm text-gray-500">
              {person.role}
            </td>
            <td className="relative whitespace-nowrap text-start py-4 pl-3 pr-4  text-sm font-medium sm:pr-0">
              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                Edit<span className="sr-only">, {person.name}</span>
              </a>
            </td>
          </tr>
        ))}
    </tbody>
  );
};
