import React, { useState, createContext, useEffect } from "react";
import jsondata from "../responseData.json";
export const DataContext = createContext();
export const DataProvider = (props) => {
  const [value, setValue] = useState([]);

  const arr = [];

  useEffect(() => {
    // if (value !== []) {
    //   console.log(value);
    //   return;
    // }
    setValue(jsondata.categories);
    console.log(value + 1);
  }, []);

  const deleteCategory = (id) => {
    const res = value.filter((val) => val.id !== id);
    setValue(res);
  };

  const deleteBrand = async (id, id2) => {
    arr.push(value);
    arr[0][id].brands.splice(id2, 1);
    setValue(arr[0]);
    console.log(arr[0]);
  };

  const deleteProduct = (id, id2) => {
    console.log(id);
  };

  return (
    <DataContext.Provider
      value={{ value, setValue, deleteCategory, deleteProduct, deleteBrand }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
