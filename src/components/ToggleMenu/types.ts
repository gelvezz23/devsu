import { Dispatch, SetStateAction } from "react";

export type TypeToggle = {
  setToggleOpen: Dispatch<SetStateAction<TypeToggleStore>>;
  id: string | number;
};

export type TypeToggleStore = { id: string; show: boolean };
