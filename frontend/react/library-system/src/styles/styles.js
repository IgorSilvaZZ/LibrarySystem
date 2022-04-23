import styled from "styled-components";

export const ContainerBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;

  background: #f9e9e8;
`;

export const BoxContainer = styled.div`
  display: flex;

  height: 80%;
  width: 70%;

  background: #ffffff;

  border-radius: 20px;
`;

export const BoxInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 70%;
  height: 100%;
`;

export const InputSubmit = styled.input`
  width: 60%;

  padding: 12px;

  font-size: 17px;

  background: none;
  outline: none;

  border-radius: 5px;

  margin-bottom: 20px;

  color: #b2bec3;

  border: 1px solid #b2bec3;
`;

export const ButtonSubmit = styled.button`
  width: 60%;

  margin-top: 20px;
  padding: 12px;

  border: none;
  outline: none;

  background: #fea6b5;
  color: white;

  font-weight: 600;

  border-radius: 5px;

  transition: background 0.3s;

  cursor: pointer;

  &:hover {
    background: #e84393;
  }
`;
