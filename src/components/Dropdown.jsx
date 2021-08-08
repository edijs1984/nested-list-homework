import React, { useContext } from "react";
import { ModalSelect } from "./styleComponets/Modal.styles";
import { DataContext } from "../context/DataContext";

const Dropdown = ({ setSelected, type, category }) => {
  const { value } = useContext(DataContext);

  const data = type === "category" ? value : value[category].brands;
  return (
    <div>
      <ModalSelect onChange={(e) => setSelected(e.target.value)}>
        <option value={"none"}>Select</option>
        {data.map((object, index) => {
          return <option value={index}>{object.name}</option>;
        })}
      </ModalSelect>
    </div>
  );
};

export default Dropdown;
