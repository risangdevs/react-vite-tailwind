import { Fragment, useState, useMemo } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { familyMember } from "../types/contacts";
interface FamilyModalProps {
  isOpen: boolean;
  setIsOpen: any;
  familyMember?: familyMember[];
}
export const FamilyModal = ({
  isOpen = false,
  setIsOpen,
  familyMember,
}: FamilyModalProps) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Family Member
                    </Dialog.Title>
                    <div className="mt-2">
                      <table className="w-full">
                        <th
                          scope="col"
                          className="py-1.5 px-3 text-left text-sm font-semibold text-gray-900"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="py-1.5 px-3 text-left text-sm font-semibold text-gray-900"
                        >
                          Date of Birth
                        </th>
                        <th
                          scope="col"
                          className="py-1.5 px-3 text-left text-sm font-semibold text-gray-900"
                        >
                          Relation
                        </th>
                        {familyMember &&
                          familyMember.map((member, index) => {
                            return (
                              <tr className="text-sm text-gray-500" key={index}>
                                <td className="py-0.5 px-3 text-left">
                                  {member.name}
                                </td>
                                <td className="py-0.5 px-3 text-left">
                                  {member.dob}
                                </td>
                                <td className="py-0.5 px-3 text-left">
                                  {member.status}
                                </td>
                              </tr>
                            );
                          })}
                      </table>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
