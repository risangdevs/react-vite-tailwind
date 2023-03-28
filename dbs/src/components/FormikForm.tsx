import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Dialog } from "@headlessui/react";
import Input from "./Input";
import { ErrorText } from "./ErrorText";
import { MultipleInput } from "./MultipleInput";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  eKTP: Yup.string().required("eKTP is required"),
  address: Yup.string().required("Address is required"),
  job: Yup.string().required("Job is required"),
  dob: Yup.string().required("Date of Birth is required"),
  phone: Yup.array()
    .required("Phone Number required")
    .test("validity", "Please Insert Phone Number", (val, context) => {
      if (!val[0]) {
        return false;
      }
      return true;
    }),
});
interface formikFormProps {
  setIsOpen: any;
  isOpen: boolean;
}
const initialValues = {
  name: "",
  address: "",
  eKTP: "",
  job: "",
  dob: "",
  phone: [""],
};

const onSubmit = (values: any) => {
  console.log(values);
};

const FormikForm = ({ isOpen, setIsOpen }: formikFormProps) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, handleChange, values }) => {
        return (
          <Form>
            <div>
              <Dialog.Title
                as="h3"
                className="text-base font-semibold leading-6 text-gray-900"
              >
                Add New Contact
              </Dialog.Title>
            </div>
            <div className=" space-x-4 grid grid-cols-2 gap-x-4">
              <div className="mt-2 space-y-2">
                <Input
                  label="Name"
                  type="text"
                  name="name"
                  placeholder="Contact's Name"
                  handleChange={handleChange}
                />
                <ErrorMessage component={ErrorText} name="name" />
                <Input
                  label="eKTP"
                  type="text"
                  placeholder="Contact's eKTP"
                  name="eKTP"
                  handleChange={handleChange}
                />
                <ErrorMessage component={ErrorText} name="eKTP" />
                <Input
                  label="Job"
                  type="text"
                  placeholder="Contact's job"
                  name="job"
                  handleChange={handleChange}
                />
                <ErrorMessage component={ErrorText} name="job" />
                <Input
                  label="Date of Birth"
                  type="date"
                  placeholder="Contact's DoB"
                  name="dob"
                  handleChange={handleChange}
                />
                <ErrorMessage component={ErrorText} name="dob" />
              </div>
              <div className="mt-2">
                <Input
                  label="Address"
                  type="textarea"
                  placeholder="Contact's Address"
                  name="address"
                  handleChange={handleChange}
                />
                <ErrorMessage component={ErrorText} name="address" />
                <MultipleInput
                  handleChange={handleChange}
                  label="Phone"
                  type="text"
                  name="phone"
                />
                <ErrorMessage component={ErrorText} name="phone" />
              </div>
            </div>

            <div className="mt-5 sm:mt-6 flex flex-row space-x-4">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => setIsOpen(!isOpen)}
              >
                Close
              </button>
              <button
                type="submit"
                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                // onClick={() => setIsOpen(!isOpen)}
              >
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikForm;