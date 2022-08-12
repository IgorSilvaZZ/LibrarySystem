import styled from "styled-components";

interface IStyleInput {
  width: string;
  background?: string;
}

export const InputSearchSection = styled.div<IStyleInput>`
  display: flex;

  width: ${(props) => props.width};
  height: 50%;

  padding: 10px;

  border-radius: 10px;
  border: 1px solid #b9b9b7;

  background: ${(props) => props.background};
`;

export const InputStyle = styled.input`
  padding: 10px;

  width: 100%;

  border: none;
  outline: none;

  background: none;
`;

export const IconInputSearch = styled.img`
  width: 3%;
`;
