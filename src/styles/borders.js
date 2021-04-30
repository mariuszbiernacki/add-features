import styled from "styled-components";
import { GRADIENT_UP, GRADIENT_DOWN } from "./constants";

export const DivWithLeftBorder = styled.div`
  position: relative;
  border: solid 4px transparent;
  border-radius: 6px;
  background-clip: padding-box;
  box-sizing: border-box;
  width: 300px;
  margin: auto;
  background: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  &::before {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin-left: -12px;
    content: "";
    z-index: -1;
    border-radius: inherit;
    background: linear-gradient(${GRADIENT_UP}, ${GRADIENT_DOWN});
  }
`;
