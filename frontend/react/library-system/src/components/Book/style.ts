import styled from "styled-components";
import { theme } from "../../styles/theme";

export const BoxBook = styled.div`
  width: 300px;
  height: 300px;

  margin: 10px 10px 5px 10px;

  border-radius: 10px;

  box-shadow: 10px 5px 5px ${theme.light.grayNormal};
`;

export const ImageSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 80%;

  background: ${theme.light.whiteNormalSecundary};
`;

export const ImageStyled = styled.img`
  width: 50%;

  cursor: pointer;

  transition: width 0.3s;
`;
