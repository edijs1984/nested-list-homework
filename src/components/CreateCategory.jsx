import React, { useState, useContext } from "react";
import { ModalInput } from "./styleComponets/Modal.styles";
import { Button } from "./styleComponets/Button.styles";
import { DataContext } from "../context/DataContext";

export const CreateCategory = () => {
  const { Create } = useContext(DataContext);

  const [newCategory, setNewCategory] = useState();
  const btnDisabled = !newCategory;

  const createCategory = () => {
    Create.category({ name: newCategory });
    setNewCategory("");
  };
  return (
    <div>
      <p>
        <h1>Create Category</h1>
      </p>
      <div>Category name</div>
      <ModalInput
        onInput={(e) => setNewCategory(e.target.value)}
        value={newCategory}
      />
      <Button disabled={btnDisabled} onClick={() => createCategory()}>
        Create
      </Button>
    </div>
  );
};
