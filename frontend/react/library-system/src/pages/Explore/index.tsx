import { Books } from "../../components/Books";
import { NavBar } from "../../components/NavBar";
import {
  ExploreContainer,
  ItemCategory,
  SectionCategory,
  TitleContainer,
} from "./style";

const Explore = () => {
  return (
    <div>
      <NavBar isSearch={true} />

      <ExploreContainer>
        <SectionCategory>
          <TitleContainer>Categorias</TitleContainer>
          <ItemCategory>Todos os Generos</ItemCategory>
          <ItemCategory>Aventura</ItemCategory>
          <ItemCategory>Ficção</ItemCategory>
          <ItemCategory>Ciencia</ItemCategory>
          <ItemCategory>Infantil Juvenil</ItemCategory>
          <ItemCategory>Suspense</ItemCategory>
          <ItemCategory>Romance</ItemCategory>
          <ItemCategory>Artes</ItemCategory>
          <ItemCategory>Historia</ItemCategory>
          <ItemCategory>Biografias</ItemCategory>
        </SectionCategory>

        <Books />
      </ExploreContainer>
    </div>
  );
};

export default Explore;
