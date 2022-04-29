import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 95vw;
  height: 400px;
`;

export const BannerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60%;
  height: 90%;

  img {
    width: 70%;
  }
`;

export const BannerInformation = styled.div`
  width: 30%;
  height: 90%;

  span {
    font-size: 40px;
    font-weight: 500;

    margin-bottom: 10px;

    color: #2d2d76;
  }

  p {
    color: #b9b9b7;

    font-size: 15px;
    font-weight: 500;

    margin-bottom: 15px;
  }
`;

export const ContainerUse = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 350px;
  width: 95vw;

  h1 {
    color: #5fd3cb;

    margin: 10px 0px;
  }
`;

export const BoxStepsUse = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 80%;
  height: 70%;
`;

export const ItemStep = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 90%;
  width: 15%;

  text-align: center;

  img {
    width: 40%;
  }

  span {
    font-size: 15px;
    font-weight: 600;

    color: #7e8080;

    margin-top: 10px;
    margin-bottom: 5px;
  }

  p {
    font-size: 13px;
    font-weight: 600;

    color: #b2bec3;
  }
`;

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: space-between;

  height: 350px;
  width: 95vw;
`;

export const BoxInformationFooter = styled.div`
  width: 50%;
  height: 100%;

  span {
    font-size: 35px;
    font-weight: 500;

    margin-bottom: 10px;

    color: #2d2d76;
  }

  p {
    color: #b9b9b7;

    font-size: 15px;
    font-weight: 500;

    margin-bottom: 15px;
  }

  button {
    padding: 8px;

    border-radius: 10px;

    background: #fea6b5;
    color: white;

    border: none;
    outline: none;

    cursor: pointer;
  }
`;
