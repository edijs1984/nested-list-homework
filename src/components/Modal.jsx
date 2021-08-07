import React, { useState } from "react";
import { Createbrand } from "./Createbrand";
import { CreateCategory } from "./CreateCategory";
import { Createproduct } from "./Createproduct";
import CategoryDropdown from "./Dropdown";
import {
  ModalBg,
  ModalWrapper,
  ModalContent,
  CloseModalButton,
  ModalInput,
  ModalSelect,
} from "./styleComponets/Modal.styles";

const Modal = ({ modal }) => {
  const [selected, setSelected] = useState({
    category: null,
    brand: null,
  });
  console.log(selected);
  return (
    <>
      {modal.visible ? (
        <ModalBg>
          <ModalWrapper>
            <ModalContent>
              {/* <Createbrand /> */}
              {/* <CreateCategory /> */}
              <Createproduct />
            </ModalContent>
            <CloseModalButton aria-label="Close modal" />
          </ModalWrapper>
        </ModalBg>
      ) : null}
    </>
  );
};

export default Modal;
