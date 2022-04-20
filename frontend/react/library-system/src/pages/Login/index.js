import {
  ContainerLogin,
  BoxLogin,
  BoxInfoLogin,
  BoxBanner,
  BoxInfo,
  SubTitleLogin,
  InputLogin,
  ButtonLogin,
  SingInText,
} from "./style";

import loginImage from "../../assets/login-img.png";

const Home = () => {
  return (
    <ContainerLogin>
      <BoxLogin>
        <BoxInfoLogin>
          <BoxInfo>
            <span>Slibrary</span>
            <SubTitleLogin>Entrar na Conta</SubTitleLogin>
            <InputLogin placeholder='Email' />
            <InputLogin placeholder='Senha' />
            <ButtonLogin>Entrar</ButtonLogin>
            <SingInText>Não tem conta? Registre-se</SingInText>
          </BoxInfo>
        </BoxInfoLogin>
        <BoxBanner>
          <img src={loginImage} />
        </BoxBanner>
      </BoxLogin>
    </ContainerLogin>
  );
};

export default Home;
