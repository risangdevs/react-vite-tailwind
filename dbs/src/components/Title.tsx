import { useState } from "react";
import { FormModal } from "./FormModal";

export const Title = () => {
  const [openForm, setOpenForm] = useState<boolean>(false);
  return (
    <div className="sm:flex sm:items-center">
      <div className="sm:flex-auto">
        <h1 className="text-start font-semibold leading-6 text-gray-900">
          Contacts
        </h1>
        <p className="mt-2 text-sm text-gray-700 text-start">
          A list of all the contacts.
        </p>
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button
          onClick={() => {
            setOpenForm(!openForm);
          }}
          type="button"
          className="block rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Contact
        </button>
      </div>
      <FormModal isOpen={openForm} setIsOpen={setOpenForm} />
    </div>
  );
};
