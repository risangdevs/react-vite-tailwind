export type familyMember = {
    name: string, dob: string, status: string
}
export type contact = {
    id: number,
    name: string,
    eKTP: string,
    address: string,
    job: string,
    dob: string,
    phone: string,
    familyMember: familyMember[]
}