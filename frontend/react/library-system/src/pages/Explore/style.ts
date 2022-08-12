import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ExploreContainer = styled.main`
  display: flex;
  align-items: flex-start;

  width: 95vw;

  margin: 40px 0;
`;

export const SectionCategory = styled.section`
  display: flex;
  flex-direction: column;

  width: 30%;
  height: fit-content;
`;

export const TitleContainer = styled.span`
  font-size: 25px;
  font-weight: bold;

  color: ${theme.light.pinkNormal};
`;

export const ItemCategory = styled.span`
  padding: 5px;

  font-size: 13px;
  font-weight: 500;

  color: ${theme.light.grayBold};

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    color: ${theme.light.pinkNormal};
  }
`;
