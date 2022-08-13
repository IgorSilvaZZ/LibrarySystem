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

export const DescriptionSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 20%;

  background: ${theme.light.pinKNormalSecundary};
  border-radius: 0px 0px 10px 10px;
`;

export const TitleBook = styled.p`
  color: white;

  font-size: 13px;
  font-weight: 600;

  margin-bottom: 2px;

  cursor: pointer;
`;

export const AuthorBook = styled(TitleBook)`
  color: ${theme.light.grayBold}
`;