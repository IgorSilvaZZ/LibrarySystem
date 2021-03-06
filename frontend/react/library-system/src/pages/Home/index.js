import { NavBar } from "../../components/NavBar";

import {
  BannerContainer,
  BannerImage,
  BannerInformation,
  ContainerUse,
  BoxStepsUse,
  ItemStep,
  ContainerFooter,
  BoxInformationFooter,
} from "./style";

import banerImage from "../../assets/banner.png";
import userPlusIcon from "../../assets/user-plus.png";
import searchIconStep from "../../assets/search-step.png";
import bookIconStep from "../../assets/book-step.png";
import libraryIconStep from "../../assets/library-step.png";
import footerImageOne from "../../assets/footer-img1.png";
import footerImageTwo from "../../assets/footer-img2.png";
import { InputSearch } from "../../components/InputSearch";

const Home = () => {
  return (
    <>
      <NavBar />
      <BannerContainer>
        <BannerInformation>
          <span>New platform with worldwide books</span>
          <p>
            Start collection your own library and read your first book for free
            now
          </p>
          <InputSearch
            colorInput={"#b9b9b7"}
            widthContainer={"70%"}
            heightContainer={"10%"}
            backgroundContainer={"#ebebeb"}
            widthImage={"10%"}
            placeHolder='Encontre um livro'
            justifyContainer='center'
            alignItems='center'
          />
        </BannerInformation>
        <BannerImage>
          <img src={banerImage} />
        </BannerImage>
      </BannerContainer>
      <ContainerUse>
        <h1>Simples de Usar</h1>
        <BoxStepsUse>
          <ItemStep>
            <img src={userPlusIcon} />
            <span>Criar conta</span>
            <p>Crie sua conta na plataforma</p>
          </ItemStep>
          <ItemStep>
            <img src={searchIconStep} />
            <span>Procure o Livro</span>
            <p>Procure o livro da sua preferencia</p>
          </ItemStep>
          <ItemStep>
            <img src={bookIconStep} />
            <span>Emprestimo</span>
            <p>Realize o emprestimo do livro desejado</p>
          </ItemStep>
          <ItemStep>
            <img src={libraryIconStep} />
            <span>V?? at?? Biblioteca</span>
            <p>V?? para biblioteca para pegar seu livro!</p>
          </ItemStep>
        </BoxStepsUse>
      </ContainerUse>
      <ContainerFooter>
        <img src={footerImageOne} />
        <BoxInformationFooter>
          <span>
            N??o perca tempo se cadastre para conseguir seus livros preferidos
            tudo de gra??a!
          </span>
          <p>
            Fa??a seu emprestimo agora mesmo, tudo na sua casa e v?? retirar o o
            livro na biblioteca mais proxima da sua casa!
          </p>
          <button>Come??e agora!</button>
        </BoxInformationFooter>
        <img src={footerImageTwo} />
      </ContainerFooter>
    </>
  );
};

export default Home;
