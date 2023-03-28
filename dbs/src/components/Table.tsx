import { contact } from "../types/contacts";
import { TableBody, TableHeader } from "./index";
export interface tableProps {
  people?: contact[];
}
export const Table = ({ people }: tableProps) => {
  return (
    <div className="mt-8 flow-root">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <TableHeader />
            <TableBody people={people} />
          </table>
        </div>
      </div>
    </div>
  );
};
