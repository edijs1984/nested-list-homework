import React from "react";
import styled from "styled-components";
import { Colors } from "./styleVariables";
export const Button = styled.button`
  padding: 2px;
  margin: 5px;
  width: 100px;
  height: 35px;
  background-color: ${Colors.dark};
  border-color: ${Colors.dark};
  border-radius: 10px;
  color: white;
  :hover {
    color: ${Colors.orange};
  }
`;

export const SmButton = styled.button`
  background-color: ${Colors.orange};
  color: white;
  margin-left: 20px;
  border-radius: 5px;
  padding: 2px;
  border-color: ${Colors.orange};
`;
