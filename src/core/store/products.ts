import { atom } from "recoil";
import { TypeProduct } from "../../components/Table/types";

export const productsStore = atom<TypeProduct[]>({
  key: "products",
  default: [],
});
