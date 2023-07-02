import "./table.css";
import OptionsIcon from "./../../assets/options-icon.svg";
import InfoIcon from "./../../assets/info-icon.svg";
import { Link } from "react-router-dom";
import { FC, useState } from "react";
import { TypeProduct } from "./types";
import { formatDate } from "../../utils/formatDate";
import ToggleMenu from "../ToggleMenu";
import { TypeToggleStore } from "../ToggleMenu/types";
import { getDateRevision } from "../../utils/getDateRevision";
import { useRecoilValue } from "recoil";
import { Search } from "../Search";
import { searchProductsStore } from "../../core/store/search";
import SelectPagination from "../SelectPagination";
import { selectLimitStore } from "../../core/store/limit";
const Table: FC<{ product: TypeProduct[] }> = ({ product }) => {
  const limit = useRecoilValue<number>(selectLimitStore);
  const [toggleOpen, setToggleOpen] = useState<TypeToggleStore>({
    id: "0",
    show: false,
  });

  const search = useRecoilValue<TypeProduct[]>(searchProductsStore);
  const handleToggle = (id: string) => {
    setToggleOpen({
      id,
      show: !toggleOpen.show,
    });
  };
  return (
    <section>
      <div className="container-table_header">
        <Search />
        <Link to="/register">
          <button>Agregar</button>
        </Link>
      </div>
      <div className="container-table">
        <div className="container-table_overflow">
          <table>
            <thead>
              <tr>
                <th>
                  <span>Logo</span>
                </th>
                <th>
                  <span>Nombre del producto</span>
                </th>
                <th>
                  <span>
                    descrición <img src={InfoIcon} />
                  </span>
                </th>
                <th>
                  <span>
                    Fecha de liberación <img src={InfoIcon} />
                  </span>
                </th>
                <th>
                  <span>
                    Fecha de reestructuración <img src={InfoIcon} />
                  </span>
                </th>
                <th></th>
              </tr>
            </thead>
            {search.length > 0 ? (
              <tbody>
                {search.map((items) => {
                  return (
                    <tr key={items.id}>
                      <td>
                        <img width="50px" src={items.logo} />
                      </td>
                      <td>{items.name}</td>
                      <td>
                        <span style={{ maxWidth: "10rem" }}>
                          {items.description}
                        </span>
                      </td>
                      <td>
                        {formatDate(items.date_release).replace(/-/g, "/")}
                      </td>
                      <td>
                        {getDateRevision(items.date_revision)?.replace(
                          /-/g,
                          "/"
                        )}
                      </td>
                      <td>
                        {toggleOpen.show && items.id === toggleOpen.id ? (
                          <ToggleMenu
                            setToggleOpen={setToggleOpen}
                            id={items.id}
                          />
                        ) : (
                          <img
                            data-testid="toggle-menu"
                            onClick={() => handleToggle(items.id)}
                            src={OptionsIcon}
                          />
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            ) : (
              <tbody>
                {product &&
                  product.slice(0, limit).map((items) => {
                    return (
                      <tr key={items.id}>
                        <td>
                          <img width="50px" src={items.logo} />
                        </td>
                        <td>{items.name}</td>
                        <td>
                          <span style={{ maxWidth: "10rem" }}>
                            {items.description}
                          </span>
                        </td>
                        <td>
                          {formatDate(items.date_release).replace(/-/g, "/")}
                        </td>
                        <td>
                          {getDateRevision(items.date_revision)?.replace(
                            /-/g,
                            "/"
                          )}
                        </td>
                        <td>
                          {toggleOpen.show && items.id === toggleOpen.id ? (
                            <ToggleMenu
                              setToggleOpen={setToggleOpen}
                              id={items.id}
                            />
                          ) : (
                            <img
                              data-testid="toggle-menu"
                              onClick={() => handleToggle(items.id)}
                              src={OptionsIcon}
                            />
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            )}
          </table>
        </div>
        <SelectPagination />
      </div>
    </section>
  );
};

export default Table;
