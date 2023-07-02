/* eslint-disable react-hooks/exhaustive-deps */
import { useRecoilState } from "recoil";
import Table from "../../components/Table";
import { fetchData } from "../../utils/fechData";
import "./home.css";
import { TypeProduct } from "../../components/Table/types";
import { productsStore } from "../../core/store/products";
import { useEffect } from "react";
const Home = () => {
  const [product, setProducts] = useRecoilState<TypeProduct[]>(productsStore);
  const getData = async () => {
    const response = await fetchData("GET", "/bp/products", null);
    setProducts(response);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="container">
      <div className="container-home">
        <Table product={product} />
      </div>
    </section>
  );
};

export default Home;
