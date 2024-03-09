import { atom } from "recoil";

export const userAtom = atom({
    key: "userAtom",
    default: ""
})

console.log("from atom render")