import React, { useState, useContext } from "react";
import Dropdown from "./Dropdown";
import { ModalInput } from "./styleComponets/Modal.styles";
import { Button } from "./styleComponets/Button.styles";
import { DataContext } from "../context/DataContext";

//
export const Createbrand = () => {
  const { Create } = useContext(DataContext);
  //
  const [selected, setSelected] = useState();
  const [newBrand, setNewBrand] = useState();
  //

  const btnDisabled = !selected || !newBrand || selected === "none";

  const createBrand = () => {
    Create.brand({ categoryIndex: parseInt(selected, 10), name: newBrand });
    setNewBrand("");
  };
  return (
    <div>
      <p>
        <h1>Create Brand</h1>
      </p>
      <div>Select category</div>
      <Dropdown type={"category"} setSelected={(e) => setSelected(e)} />
      <div>Brand name</div>
      <ModalInput
        onInput={(e) => setNewBrand(e.target.value)}
        value={newBrand}
      />
      <Button disabled={btnDisabled} onClick={() => createBrand()}>
        Create
      </Button>
    </div>
  );
};
