import styled from "styled-components";
import { Colors } from "./styleVariables";

export const Button = styled.button`
  padding: 2px;
  margin: 5px;
  width: 150px;
  height: 35px;
  background-color: ${Colors.dark};
  border-color: ${Colors.dark};
  border-radius: 10px;
  cursor: pointer;
  color: white;
  :hover {
    color: ${Colors.orange};
  }
  :disabled {
    color: ${Colors.grey};
    :hover {
      color: ${Colors.grey};
    }
  }
`;

export const SmButton = styled.button`
  background-color: ${Colors.orange};
  color: white;
  margin-left: 20px;
  border-radius: 5px;
  padding: 2px;
  border-color: ${Colors.orange};
  cursor: pointer;
`;
