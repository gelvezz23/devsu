import { TypeProduct } from "../components/Table/types";

export const invalid = (data: TypeProduct) => {
  const { name, logo, description, id } = data;
  if (
    name.length === 0 ||
    logo.length === 0 ||
    description.length === 0 ||
    id.length === 0 ||
    id.length < 3 ||
    id.length > 10 ||
    description.length < 10 ||
    description.length > 200 ||
    name.length < 5 ||
    name.length > 100 ||
    logo.length < 1
  ) {
    return false;
  }

  return true;
};
