import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-feather";

import {
  ContainerBody,
  BoxContainer,
  BoxInfoContainer,
  ButtonSubmit,
  InputSubmit,
} from "../../styles/styles";

import { BoxBanner, BoxInfo } from "../Login/style";

import registerImage from "../../assets/footer-img2.png";

const Register = () => {
  const navigate = useNavigate();

  return (
    <ContainerBody>
      <BoxContainer style={{ height: "90%" }}>
        <BoxInfoContainer>
          <BoxInfo style={{ height: "90%" }}>
            <ArrowLeft
              style={{ cursor: "pointer" }}
              size={25}
              color='#fea6b5'
              onClick={() => navigate("/login")}
            />
            <span style={{ fontSize: "25px" }}>Crie sua conta</span>
            <InputSubmit placeholder='Nome Completo' />
            <InputSubmit placeholder='Email' />
            <InputSubmit placeholder='CPF' />
            <InputSubmit placeholder='RG' />
            <InputSubmit placeholder='Senha' />
            <ButtonSubmit>Enviar</ButtonSubmit>
          </BoxInfo>
        </BoxInfoContainer>
        <BoxBanner>
          <img src={registerImage} />
        </BoxBanner>
      </BoxContainer>
    </ContainerBody>
  );
};

export default Register;
