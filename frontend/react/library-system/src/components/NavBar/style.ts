import styled from "styled-components";
import { theme } from "../../styles/theme";

interface IBoxLogo {
  width: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 95vw;
  height: 80px;
`;

export const BoxLogo = styled.div<IBoxLogo>`
  display: flex;
  align-items: center;

  width: ${(props) => props.width};
`;

export const LogoText = styled.span`
  color: ${theme.light.grayBold};

  font-size: 20px;
  font-weight: 600;

  margin: 0px 10px;
`;

export const ImageNavBar = styled.img`
  width: 50px;

  cursor: pointer;
`;

export const OptionsSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 70%;
`;

export const TextOption = styled.a`
  font-weight: 500;

  color: ${theme.light.grayBold};

  text-decoration: none;

  cursor: pointer;

  padding: 5px;

  transition: all 0.3s;

  &:hover {
    border-radius: 5px;

    color: ${theme.light.pinkNormal};

    background: ${theme.light.whiteNormal};
  }
`;

export const SectionIcons = styled.div`
  display: flex;
  align-items: center;

  width: 10%;
  height: 50%;
`;

export const IconOption = styled.img`
  width: 15px;

  margin: 10px;

  cursor: pointer;
`;
