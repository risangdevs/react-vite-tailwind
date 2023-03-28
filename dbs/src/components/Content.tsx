import { useState } from "react";
import { contact } from "../types/contacts";
import { Title, Table } from "./index";

import { useDispatch, useSelector } from "react-redux";

interface appState {
  contacts: contact[];
}
export default function Content() {
  const { contacts }: { contacts: contact[] } = useSelector(
    (state: appState) => state
  );
  console.log(contacts)
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <Title />
      <Table people={contacts} />
    </div>
  );
}
