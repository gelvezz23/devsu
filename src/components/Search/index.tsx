import { useRecoilState, useRecoilValue } from "recoil";
import { searchProductsStore } from "../../core/store/search";
import { TypeSearch } from "../Table/types";
import { productsStore } from "../../core/store/products";

export const Search = () => {
  const [, setSearch] = useRecoilState<TypeSearch[]>(searchProductsStore);
  const products = useRecoilValue(productsStore);

  const handleSearch = (event: EventTarget & HTMLInputElement) => {
    const { value } = event;
    const searching = products.filter((items) => {
      return items.name.includes(value) || items.id.includes(value);
    });

    setSearch(searching);
  };
  return (
    <input
      placeholder="Search..."
      name="search"
      onChange={(event) => handleSearch(event.target)}
    />
  );
};
