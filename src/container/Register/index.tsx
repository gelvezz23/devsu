import { FormEvent, useState } from "react";
import "./register.css";
import { TypeProduct } from "../../components/Table/types";
import { Error } from "../../components/Error";
import { formatDate } from "../../utils/formatDate";
import { getDateRevision } from "../../utils/getDateRevision";
import { invalid } from "../../utils/validateForm";
import { fetchData } from "../../utils/fechData";
import { useLocation } from "react-router";
import iconBack from "./../../assets/back-icon.svg";
const Register = () => {
  const location = useLocation();
  const state: TypeProduct = location.state ? location?.state[0] : null;

  const date = new Date();
  const today = date.setDate(date.getDate() - 1);
  const yesterday = new Date(today).toISOString().split("T")[0];
  const [dateRelease, setDateRelease] = useState<string>(formatDate(date));
  const [values, setValues] = useState<TypeProduct>({
    id: state?.id || "",
    description: state?.description || "",
    logo: state?.logo || "",
    name: state?.name || "",
    date_release: state?.date_release || date,
    date_revision: date,
  });
  const handleChange = (event: EventTarget & HTMLInputElement) => {
    const { name, value } = event;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (invalid(values)) {
      const response = state
        ? await fetchData("PUT", "/bp/products", values)
        : await fetchData("POST", "/bp/products", values);
      if (response.name) {
        setTimeout(() => window.history.back(), 1000);
      }
    }
  };

  const handleReset = () => {
    setValues({
      id: state?.id || "",
      description: state?.description || "",
      logo: state?.logo || "",
      name: state?.name || "",
      date_release: state?.date_release || date,
      date_revision: date,
    });
  };
  return (
    <section className="container">
      <div className="container-register">
        <div className="container-register_title">
          <img
            src={iconBack}
            width="30px"
            onClick={() => window.history.back()}
          />
          <h1>Formulario de Registro</h1>
        </div>
        <form onSubmit={(event) => handleSubmit(event)}>
          <article>
            <div className="container-register_left">
              <div>
                <label htmlFor="id">ID</label>
                <input
                  className={`${
                    (values.id.length < 3 || values.id.length > 10) && "error"
                  } ${state?.id && "disabled"}`}
                  type="number"
                  name="id"
                  id="id"
                  pattern="\d{3,}"
                  minLength={3}
                  placeholder="id"
                  value={values.id}
                  onChange={(event) => handleChange(event.target)}
                  disabled={state?.id ? true : false}
                  required
                />
                <Error
                  message={
                    values.id.length < 3 || values.id.length > 10
                      ? "ID invalido"
                      : ""
                  }
                />
              </div>
              <div>
                <label htmlFor="description">Descripción</label>
                <input
                  className={`${
                    (values.description.length < 10 ||
                      values.description.length > 200) &&
                    "error"
                  }`}
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Descripción"
                  value={values.description}
                  onChange={(event) => handleChange(event.target)}
                />
                <Error
                  message={
                    values.description.length < 10 ||
                    values.description.length > 200
                      ? "Este campo es requerido"
                      : ""
                  }
                />
              </div>
              <div>
                <label htmlFor="date_release">Fecha de Liberacion</label>
                <input
                  type="date"
                  min={yesterday}
                  name="date_release"
                  id="date_release"
                  placeholder="Fecha de Liberación"
                  value={dateRelease}
                  onChange={(event) => setDateRelease(event.target.value)}
                />
              </div>
            </div>
            <div className="container-register_right">
              <div>
                <label htmlFor="name">Nombre</label>

                <input
                  id="name"
                  className={`${
                    (values.name.length < 5 || values.name.length > 100) &&
                    "error"
                  }`}
                  name="name"
                  placeholder="Nombre"
                  value={values.name}
                  onChange={(event) => handleChange(event.target)}
                />
                <Error
                  message={
                    values.name.length < 5 || values.name.length > 100
                      ? "Este campo es requerido"
                      : ""
                  }
                />
              </div>
              <div>
                <label>Logo</label>
                <input
                  type="text"
                  className={`${values.logo.length < 1 && "error"}`}
                  name="logo"
                  placeholder="Logo"
                  value={values.logo}
                  onChange={(event) => handleChange(event.target)}
                />
                {values.logo.length < 1 && (
                  <Error message="Este campo es requerido" />
                )}
              </div>
              <div>
                <label>Fecha de Revisión</label>
                <input
                  type="date"
                  className="disabled"
                  name="date_revision"
                  id="date_revision"
                  placeholder="Fecha de Liberación"
                  value={getDateRevision(dateRelease)}
                  onChange={(event) => handleChange(event.target)}
                  disabled
                />
              </div>
            </div>
          </article>
          <div className="container-register_footer">
            <button className="disabled" onClick={handleReset}>
              Reiniciar
            </button>
            <button
              type="submit"
              className={invalid(values) ? "" : "invalid"}
              disabled={!invalid(values)}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
