import React, { useState, useContext } from "react";
import Dropdown from "./Dropdown";
import { ModalInput } from "./styleComponets/Modal.styles";
import { Button } from "./styleComponets/Button.styles";
import { DataContext } from "../context/DataContext";
export const Createbrand = () => {
  const { value, Create } = useContext(DataContext);

  const [selected, setSelected] = useState();
  const [newBrand, setNewBrand] = useState();
  const disabled = selected === newBrand;
  console.log(disabled);
  const createBrand = () => {
    Create.brand({ ctx: parseInt(selected, 10), name: newBrand });
  };
  return (
    <div>
      <div>Select category</div>
      <Dropdown type={"category"} setSelected={(e) => setSelected(e)} />
      <div>Brand name</div>
      <ModalInput
        onInput={(e) => setNewBrand(e.target.value)}
        value={newBrand}
      />
      <Button disabled={disabled} onClick={() => createBrand()}>
        Create
      </Button>
    </div>
  );
};
