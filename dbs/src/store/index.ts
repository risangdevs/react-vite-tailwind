import { createStore } from "redux"
import { contact } from "../types/contacts";

const initialState = {
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
interface action {
    type: string,
    payload: contact
}
const reducer = (state = initialState, action: action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: state.contacts.push(action.payload)
            };
        default:
            return state;
    }
};
const store = createStore(reducer)
export default store