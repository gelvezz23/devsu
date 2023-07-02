import { atom } from "recoil";
import { TypeSearch } from "../../components/Table/types";

export const searchProductsStore = atom<TypeSearch[]>({
  key: "searchProducts",
  default: [],
});
