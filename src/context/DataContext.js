import React, { useState, createContext, useEffect } from "react";
import { useImmer } from "use-immer";
import jsondata from "../responseData.json";

//
export const DataContext = createContext();
export const DataProvider = (props) => {
  //
  const [value, setValue] = useImmer();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState(0);

  //
  useEffect(() => {
    setValue(jsondata.categories);
  }, [setValue]);

  class Remove {
    static category(categoryIndex) {
      setValue((draft) => {
        draft.splice(categoryIndex, 1);
      });
    }
    static brand(categoryindex, brandIndex) {
      setValue((draft) => {
        draft[categoryindex].brands.splice(brandIndex, 1);
      });
    }
    static product(categoryIndex, brandIndex, productIndex) {
      setValue((draft) => {
        draft[categoryIndex].brands[brandIndex].products.splice(
          productIndex,
          1
        );
      });
    }
  }

  class Create {
    static category({ name }) {
      setValue((draft) => {
        draft.push({ id: new Date().getTime(), name: name, brands: [] });
      });
    }

    static brand({ categoryIndex, name }) {
      setValue((draft) => {
        draft[categoryIndex].brands.push({
          id: new Date().getTime(),
          name: name,
          products: [],
        });
      });
    }
    static product({ categoryIndex, brandIndex, name }) {
      setValue((draft) => {
        draft[categoryIndex].brands[brandIndex].products.push({
          id: new Date().getTime(),
          name: name,
        });
      });
    }
  }

  class HandleModal {
    static open(value) {
      setModalIsOpen(true);
      setModalType(value);
    }
    static close() {
      setModalIsOpen(false);
      setModalType("");
    }
  }
  return (
    <DataContext.Provider
      value={{
        value,
        Remove,
        Create,
        HandleModal,
        modalIsOpen,
        modalType,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
