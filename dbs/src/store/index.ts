import { createStore } from "redux"
import { contact, familyMember } from "../types/contacts";

interface State {
    contacts: contact[]
}
const initialState: State = {
    contacts: [
        {
            id: 1, name: "Agus",
            eKTP: "320410123124",
            address: "Jln. Kembang No.23",
            job: "Manager", dob: "12-12-1990",
            phone: "08123123123",
            familyMember: [
                { name: "Tara", dob: "01-01-1993", status: "spouse" },
                { name: "Zara", dob: "01-02-1995", status: "sister" },
            ]
        }
    ]
}

export const addContact = () => {
    return {
        type: 'ADD_CONTACT'
    };
};
type Action = { type: string, payload: contact }

const reducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return { ...state, contacts: [...state.contacts, action.payload] }

        default:
            return state
    }
};
const store = createStore(reducer)
export default store