import React, { useContext } from "react";
import { Createbrand } from "./Createbrand";
import { CreateCategory } from "./CreateCategory";
import { Createproduct } from "./Createproduct";
import {
  ModalBg,
  ModalWrapper,
  ModalContent,
  CloseModalButton,
} from "./styleComponets/Modal.styles";
import { DataContext } from "../context/DataContext";

const Modal = () => {
  const { HandleModal, modalType, modalIsOpen } = useContext(DataContext);

  return (
    <>
      {modalIsOpen ? (
        <ModalBg>
          <ModalWrapper>
            <ModalContent>
              {modalType === "category" ? (
                <CreateCategory />
              ) : modalType === "brand" ? (
                <Createbrand />
              ) : (
                <Createproduct />
              )}
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => HandleModal.close()}
            />
          </ModalWrapper>
        </ModalBg>
      ) : null}
    </>
  );
};

export default Modal;
