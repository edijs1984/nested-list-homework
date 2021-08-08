import React, { useState, useContext } from "react";
import Dropdown from "./Dropdown";
import { ModalInput } from "./styleComponets/Modal.styles";
import { Button } from "./styleComponets/Button.styles";
import { DataContext } from "../context/DataContext";

export const Createproduct = () => {
  const { Create } = useContext(DataContext);
  const [selectedCat, setSelectedCat] = useState();
  const [selectedBrand, setSelectedBrand] = useState();
  const [newProduct, setNewProduct] = useState();

  const createProduct = () => {
    Create.product({
      ctx: parseInt(selectedCat, 10),
      brandx: parseInt(selectedBrand),
      name: newProduct,
    });
    setNewProduct("");
  };
  const btnDisabled = !selectedCat || !selectedBrand || !newProduct;

  return (
    <div>
      <p>
        <h1>Create Product</h1>
      </p>
      <div>Select category</div>
      <Dropdown type={"category"} setSelected={(e) => setSelectedCat(e)} />
      {selectedCat && (
        <div>
          <div>Select brand</div>
          <Dropdown
            type={"brand"}
            category={selectedCat}
            setSelected={(e) => setSelectedBrand(e)}
          />
        </div>
      )}

      <div>Brand name</div>
      <ModalInput
        onInput={(e) => setNewProduct(e.target.value)}
        value={newProduct}
      />
      <Button disabled={btnDisabled} onClick={() => createProduct()}>
        Create
      </Button>
    </div>
  );
};
