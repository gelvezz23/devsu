import { useRecoilState, useRecoilValue } from "recoil";
import { TypeProduct } from "../Table/types";
import { productsStore } from "../../core/store/products";
import { selectLimitStore } from "../../core/store/limit";

const SelectPagination = () => {
  const product = useRecoilValue<TypeProduct[]>(productsStore);

  const [, setLimit] = useRecoilState<number>(selectLimitStore);
  const handleSelected = (event: EventTarget & HTMLSelectElement) => {
    const { value } = event;

    setLimit(Number(value));
  };

  return (
    <div className="container-table_footer">
      <span>{product?.length} resultados</span>
      <select onChange={(event) => handleSelected(event.target)}>
        <option value="5">5</option>
        <option value="15">15</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
    </div>
  );
};

export default SelectPagination;
