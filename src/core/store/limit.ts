import { atom } from "recoil";

export const selectLimitStore = atom<number>({
  key: "select",
  default: 5,
});
