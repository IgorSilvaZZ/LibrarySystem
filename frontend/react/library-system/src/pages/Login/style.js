import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;

  background: #f9e9e8;
`;

export const BoxLogin = styled.div`
  display: flex;

  height: 80%;
  width: 70%;

  background: #ffffff;

  border-radius: 20px;
`;

export const BoxInfoLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 70%;
  height: 100%;
`;

export const BoxBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30%;
  height: 100%;

  border-radius: 0px 20px 20px 0px;

  background: #ffa5b5;

  img {
    width: 90%;
  }
`;

export const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;

  height: 80%;
  width: 80%;

  span {
    font-size: 30px;
    font-weight: 600;

    color: #fea6b5;
  }
`;

export const SubTitleLogin = styled.p`
  font-size: 25px;
  font-weight: 600;

  color: #5d646e;

  margin-bottom: 40px;
`;

export const InputLogin = styled.input`
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

export const ButtonLogin = styled.button`
  width: 60%;

  margin-top: 20px;
  padding: 12px;

  border: none;
  outline: none;

  background: #fea6b5;
  color: white;

  font-weight: 600;

  border-radius: 5px;

  cursor: pointer;
`;

export const SingInText = styled.p`
  font-size: 12px;
  font-weight: 500;

  color: #fea6b5;

  margin-top: 20px;

  cursor: pointer;
`;
