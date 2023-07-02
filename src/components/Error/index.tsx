import { FC } from "react";
import "./error.css";
export const Error: FC<{ message: string }> = ({ message }) => {
  return <p className="error">{message}</p>;
};
