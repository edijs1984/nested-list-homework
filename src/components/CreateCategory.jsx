import React, { useState, useContext } from "react";
import { ModalInput } from "./styleComponets/Modal.styles";
import { Button } from "./styleComponets/Button.styles";
import { DataContext } from "../context/DataContext";

export const CreateCategory = () => {
  const { Create } = useContext(DataContext);

  const [newCategory, setNewCategory] = useState();
  const disabled = !newCategory;
  console.log(disabled);
  const createCategory = () => {
    Create.category({ name: newCategory });
    setNewCategory();
  };
  return (
    <div>
      <div>Category name</div>
      <ModalInput
        onInput={(e) => setNewCategory(e.target.value)}
        value={newCategory}
      />
      <Button disabled={disabled} onClick={() => createCategory()}>
        Create
      </Button>
    </div>
  );
};
