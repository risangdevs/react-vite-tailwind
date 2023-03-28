export const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th
          scope="col"
          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
        >
          Name
        </th>
        <th
          scope="col"
          className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
        >
          Title
        </th>
        <th
          scope="col"
          className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
        >
          Email
        </th>
        <th
          scope="col"
          className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
        >
          Role
        </th>
        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
          <span className="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
  );
};
