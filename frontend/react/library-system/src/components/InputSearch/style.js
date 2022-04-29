import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContainer};
  align-items: ${(props) => props.alignItems};

  padding: 10px;

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  background: ${(props) => props.background};
  border: ${(props) =>
    props.background !== "transparent" ? "none" : "1px solid #b9b9b7"};

  border-radius: 10px;
`;

export const IconSearch = styled.img`
  width: ${(props) => props.widthImage};
`;

export const InputStyled = styled.input`
  padding: 10px;

  width: 100%;

  color: ${(props) => props.colorInput};

  border: none;
  outline: none;

  background: transparent;
`;
