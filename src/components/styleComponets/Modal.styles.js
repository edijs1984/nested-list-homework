import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Colors } from "./styleVariables";
export const ModalBg = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 500px;
  height: 400px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 2);
  background: ${Colors.light};
  color: ${Colors.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  p {
    margin-bottom: 1rem;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const ModalInput = styled.input`
  border-width: 1px;
  border-radius: 8px;
  width: 230px;
  height: 40px;
  padding: 10px;
  margin: 10px;
  outline: none;
`;

export const ModalSelect = styled.select`
  border-radius: 8px;
  height: 40px;
  width: 230px;
  padding: 10px;
  margin: 10px;
  outline: none;
  background-color: white;
  option:not(:checked) {
    background-color: ${Colors.light};
  }
`;
