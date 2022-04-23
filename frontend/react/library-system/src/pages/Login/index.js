import { ArrowLeft } from "react-feather";
import { useNavigate } from "react-router-dom";

import {
  ContainerBody,
  BoxContainer,
  BoxInfoContainer,
  ButtonSubmit,
  InputSubmit,
} from "../../styles/styles";

import { BoxBanner, BoxInfo, SubTitleLogin, SingInText } from "./style";

import loginImage from "../../assets/login-img.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <ContainerBody>
      <BoxContainer>
        <BoxInfoContainer>
          <BoxInfo>
            <ArrowLeft
              style={{ cursor: "pointer" }}
              size={25}
              color='#fea6b5'
              onClick={() => navigate("/")}
            />
            <span>Slibrary</span>
            <SubTitleLogin>Entrar na Conta</SubTitleLogin>
            <InputSubmit placeholder='Email' />
            <InputSubmit placeholder='Senha' />
            <ButtonSubmit>Entrar</ButtonSubmit>
            <SingInText onClick={() => navigate("/register")}>
              Não tem conta? Registre-se
            </SingInText>
          </BoxInfo>
        </BoxInfoContainer>
        <BoxBanner>
          <img src={loginImage} />
        </BoxBanner>
      </BoxContainer>
    </ContainerBody>
  );
};

export default Home;
