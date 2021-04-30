import styled from "styled-components";
import { GRADIENT_DOWN, GRADIENT_UP } from "./constants";

export const Title = styled.div`
  display: inline-block;
  color: white;
  background: linear-gradient(${GRADIENT_UP}, ${GRADIENT_DOWN});
  font-size: 12px;
  padding: 6px 30px;
  text-align: center;
  border-radius: 5px;
`;
