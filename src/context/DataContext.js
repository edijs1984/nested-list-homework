import React, { useState, createContext, useEffect } from "react";
import jsondata from "../responseData.json";

//
export const DataContext = createContext();
export const DataProvider = (props) => {
  //
  const [value, setValue] = useState();
  const [count, setCount] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState({ open: false, type: "" });

  //
  useEffect(() => {
    setValue(jsondata.categories);
  }, []);

  class Remove {
    static category(id) {
      value.splice(id, 1);
      setCount(count + 1);
    }
    static brand(val, brand) {
      value[val].brands.splice(brand, 1);
      setCount(count + 1);
    }
    static product(val, brand, prod) {
      value[val].brands[brand].products.splice(prod, 1);
      setCount(count + 1);
    }
  }

  class Create {
    static category({ name }) {
      console.log({ name });
      value.push({
        id: new Date().getTime(),
        name: name,
        brands: [],
      });
      setCount(count + 1);
      console.log(value);
    }

    static brand({ ctx, name }) {
      value[ctx].brands.push({
        id: new Date().getTime(),
        name: name,
        products: [],
      });
      setCount(count + 1);
    }
    static product({ ctx, brandx, name }) {
      value[ctx].brands[brandx].products.push({
        id: new Date().getTime(),
        name: name,
      });
      setCount(count + 1);
    }
  }

  return (
    <DataContext.Provider
      value={{
        value,
        Remove,
        Create,
        modalIsOpen,
        setModalIsOpen,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
