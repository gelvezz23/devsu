import { Link } from "react-router-dom";
import "./toggleMenu.css";
import { FC } from "react";
import { TypeToggle } from "./types";
import { fetchData } from "../../utils/fechData";
import { useRecoilState } from "recoil";
import { productsStore } from "../../core/store/products";
import { TypeProduct } from "../Table/types";
import { searchProductsStore } from "../../core/store/search";
const ToggleMenu: FC<TypeToggle> = ({ setToggleOpen, id }) => {
  const [product, setProducts] = useRecoilState<TypeProduct[]>(productsStore);
  const [search, setSearch] = useRecoilState(searchProductsStore);
  const handleDelete = async () => {
    await fetchData("DELETE", `/bp/products?id=${id}`, {});
    const newproducts = product.filter((items) => items.id !== id);
    setProducts(newproducts);
    if (search.length > 0) {
      const newsearch = search.filter((items) => items.id !== id);
      setSearch(newsearch);
    }
  };

  const dataState = () => {
    return product.filter((item) => item.id === id);
  };

  return (
    <div className="container-togglemenu" data-testid="menu-show">
      <button onClick={() => setToggleOpen({ id: "0", show: false })}>x</button>
      <Link to="/edit" state={dataState()}>
        editar
      </Link>
      <Link to="/" onClick={handleDelete}>
        eliminar
      </Link>
    </div>
  );
};

export default ToggleMenu;
