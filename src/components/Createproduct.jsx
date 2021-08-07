import React, { useState, useContext } from "react";
import Dropdown from "./Dropdown";
import { ModalInput } from "./styleComponets/Modal.styles";
import { Button } from "./styleComponets/Button.styles";
import { DataContext } from "../context/DataContext";
export const Createproduct = () => {
  const { value, Create } = useContext(DataContext);

  const [selectedCat, setSelectedCat] = useState();
  const [selectedBrand, setSelectedBrand] = useState();
  const [newProduct, setNewProduct] = useState();

  const createProduct = () => {
    Create.product({
      ctx: parseInt(selectedCat, 10),
      brandx: parseInt(selectedBrand),
      name: newProduct,
    });
  };
  const disabled = !selectedCat || !selectedBrand || !newProduct;
  console.log(disabled);
  return (
    <div>
      <div>Select category</div>
      <Dropdown type={"category"} setSelected={(e) => setSelectedCat(e)} />
      {selectedCat && (
        <>
          <>Select brand</>
          <Dropdown
            type={"brand"}
            category={selectedCat}
            setSelected={(e) => setSelectedBrand(e)}
          />
        </>
      )}

      <div>Brand name</div>
      <ModalInput
        onInput={(e) => setNewProduct(e.target.value)}
        value={newProduct}
      />
      <Button disabled={disabled} onClick={() => createProduct()}>
        Create
      </Button>
    </div>
  );
};
