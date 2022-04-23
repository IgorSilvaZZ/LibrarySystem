import styled from "styled-components";

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

    cursor: pointer;

    transition: all 0.3s;

    &:hover {
      width: 95%;
    }
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

export const SingInText = styled.p`
  font-size: 12px;
  font-weight: 500;

  color: #fea6b5;

  margin-top: 20px;

  transition: color 0.3s;

  cursor: pointer;

  &:hover {
    color: #e84393;
  }
`;
