import React, { useContext } from "react";
import { Button } from "./styleComponets/Button.styles";
import { DataContext } from "../context/DataContext";
export const TopButtons = () => {
  const { HandleModal } = useContext(DataContext);

  return (
    <div>
      <Button onClick={() => HandleModal.open("category")}>Add category</Button>
      <Button onClick={() => HandleModal.open("brand")}>Add brand</Button>
      <Button onClick={() => HandleModal.open("product")}>Add product</Button>
    </div>
  );
};
