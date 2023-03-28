import { contact, familyMember } from "../types/contacts";
import { FamilyModal } from "./FamilyModal";
import { useState } from "react";
export interface tableBodyProps {
  people?: contact[];
}
export const TableBody = ({ people }: tableBodyProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [familyMember, setFamilyMember] = useState<familyMember[]>();
  return (
    <tbody className="divide-y divide-gray-200">
      {people &&
        people.map((person) => (
          <tr key={person.id}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-start text-sm font-medium text-gray-900 sm:pl-0">
              {person.name}
            </td>
            <td className="whitespace-nowrap py-4 px-3 text-start text-sm text-gray-500">
              {person.eKTP}
            </td>
            <td className="whitespace-nowrap py-4 px-3 text-start text-sm text-gray-500">
              {person.address}
            </td>
            <td className="whitespace-nowrap py-4 px-3 text-start text-sm text-gray-500">
              {person.job}
            </td>
            <td className="whitespace-nowrap py-4 px-3 text-start text-sm text-gray-500">
              {person.dob}
            </td>
            <td className="whitespace-nowrap py-4 px-3 text-start text-sm text-gray-500">
              {person.phone[0]||"N/A"}
            </td>
            <td className="relative whitespace-nowrap text-start py-4 pl-3 pr-4  text-sm font-medium sm:pr-0">
              <button
                type="button"
                className="text-indigo-600 hover:text-indigo-900"
                onClick={() => {
                  setFamilyMember(person.familyMember);
                  setIsOpen(!isOpen);
                }}
              >
                Show ({person.familyMember.length})
              </button>
            </td>
          </tr>
        ))}
      <FamilyModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        familyMember={familyMember}
      />
    </tbody>
  );
};
